// Base de Datos de Fórmulas Químicas - Consultas Analíticas y Avanzadas
use('quimica_formulas_db');

// =============================================================================
// CONSULTA 1: Búsqueda dentro del Array de Componentes (Notación de Punto)
// Encuentra todos los compuestos que contienen el elemento Carbono ("C").
// =============================================================================
db.compuestos.find(
  { "componentes.simboloElemento": "C" },
  {
    _id: 0,
    nombreComun: 1,
    formulaIUPAC: 1,
    estadoMateria: 1,
    componentes: 1
  }
);


// =============================================================================
// CONSULTA 2: Búsqueda con Ordenamiento ($sort) y Límite ($limit)
// Obtiene los 3 compuestos con mayor masa molar en la base de datos.
// =============================================================================
db.compuestos.find(
  {},
  {
    _id: 0,
    nombreComun: 1,
    formulaIUPAC: 1,
    masaMolarGmol: "$propiedadesFisicas.masaMolarGmol",
    estadoMateria: 1
  }
).sort({ "propiedadesFisicas.masaMolarGmol": -1 }).limit(3);


// =============================================================================
// CONSULTA 3: Agregación con Promedio ($avg) y Conteo ($sum) por Estado de Materia
// Calcula la masa molar promedio y la cantidad de compuestos por estado (SÓLIDO, LÍQUIDO, GASEOSO).
// =============================================================================
db.compuestos.aggregate([
  {
    $group: {
      _id: "$estadoMateria",
      totalCompuestos: { $sum: 1 },
      masaMolarPromedio: { $avg: "$propiedadesFisicas.masaMolarGmol" },
      puntoFusionPromedio: { $avg: "$propiedadesFisicas.puntoFusionC" }
    }
  },
  {
    $sort: { masaMolarPromedio: -1 }
  }
]);


// =============================================================================
// CONSULTA 4: Agregación con Descomposición ($unwind) de Componentes
// Desglosa el array de componentes para calcular cuántos átomos en total tiene cada
// fórmula química y la masa molar correspondiente.
// =============================================================================
db.compuestos.aggregate([
  { $unwind: "$componentes" },
  {
    $group: {
      _id: {
        idCompuesto: "$_id",
        nombre: "$nombreComun",
        formula: "$formulaIUPAC"
      },
      totalAtomosEnFormula: { $sum: "$componentes.cantidadAtomos" },
      cantidadElementosDistintos: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      nombreComun: "$_id.nombre",
      formulaIUPAC: "$_id.formula",
      totalAtomosEnFormula: 1,
      cantidadElementosDistintos: 1
    }
  },
  {
    $sort: { totalAtomosEnFormula: -1 }
  }
]);


// =============================================================================
// CONSULTA 5: Agregación con $unwind de Usos Industriales y Filtro ($match)
// Analiza la frecuencia de usos industriales entre compuestos con clasificación "NO_PELIGROSO".
// =============================================================================
db.compuestos.aggregate([
  {
    $match: { clasificacionRiesgo: "NO_PELIGROSO" }
  },
  { $unwind: "$usosIndustriales" },
  {
    $group: {
      _id: "$usosIndustriales",
      frecuenciaUso: { $sum: 1 },
      compuestosAsociados: { $push: "$nombreComun" }
    }
  },
  {
    $sort: { frecuenciaUso: -1 }
  }
]);
