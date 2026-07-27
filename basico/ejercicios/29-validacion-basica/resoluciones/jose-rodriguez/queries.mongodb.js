// Base de Datos de Tecnología - Consultas Analíticas y Verificación de Esquema
use('tecnologia_db');

// =============================================================================
// CONSULTA 1: Búsqueda Filtrada en Subdocumento de Especificaciones
// Obtiene los productos que tienen 16 GB o más de memoria RAM.
// =============================================================================
db.productos_tech.find(
  { "especificacionesTecnicas.ramGB": { $gte: 16 } },
  {
    _id: 0,
    nombre: 1,
    sku: 1,
    precioUSD: 1,
    ramGB: "$especificacionesTecnicas.ramGB",
    procesador: "$especificacionesTecnicas.procesador"
  }
).sort({ "especificacionesTecnicas.ramGB": -1 });


// =============================================================================
// CONSULTA 2: Top Productos de Mayor Precio (.sort() + .limit())
// Obtiene los 3 equipos tecnológicos más costosos del catálogo.
// =============================================================================
db.productos_tech.find(
  {},
  {
    _id: 0,
    nombre: 1,
    sku: 1,
    precioUSD: 1,
    categoriaId: 1
  }
).sort({ precioUSD: -1 }).limit(3);


// =============================================================================
// CONSULTA 3: Agregación con Promedio ($avg) e Valoración de Inventario por Categoría
// Agrupa los productos por categoría, calculando el precio promedio y el valor
// total retenido en stock ($multiply).
// =============================================================================
db.productos_tech.aggregate([
  {
    $group: {
      _id: "$categoriaId",
      totalModelos: { $sum: 1 },
      unidadesEnStock: { $sum: "$stock.actual" },
      precioPromedioUSD: { $avg: "$precioUSD" },
      valorInversionStockUSD: {
        $sum: { $multiply: ["$precioUSD", "$stock.actual"] }
      }
    }
  },
  {
    $sort: { valorInversionStockUSD: -1 }
  }
]);


// =============================================================================
// CONSULTA 4: Análisis de Etiquetas de Tecnología ($unwind + $group)
// Desglosa el array 'etiquetas' para conocer las características técnicas
// más frecuentes implementadas en el catálogo.
// =============================================================================
db.productos_tech.aggregate([
  { $unwind: "$etiquetas" },
  {
    $group: {
      _id: "$etiquetas",
      totalProductosConEtiqueta: { $sum: 1 },
      modelos: { $push: "$nombre" }
    }
  },
  {
    $sort: { totalProductosConEtiqueta: -1 }
  }
]);


// =============================================================================
// PRUEBA DE SCHEMA VALIDATION (Documento Inválido - Comentado para referencia)
// Intento de inserción de un producto que VIOLA las reglas de esquema (Falla en SKU y RAM).
// Al ejecutarlo en mongosh, MongoDB rechazará la inserción lanzando 'Document failed validation'.
// =============================================================================
/*
db.productos_tech.insertOne({
  _id: "PRD-ERROR",
  sku: "INVALIDO_123", // Viola el patrón regex ^[A-Z]{3}-[0-9]{4}$
  nombre: "Laptop Defectuosa",
  categoriaId: "CAT-COMP",
  precioUSD: -50.00, // Viola la regla minimum: 0.01
  especificacionesTecnicas: {
    procesador: "Intel i3",
    ramGB: NumberInt(0), // Viola la regla minimum: 1
    almacenamientoGB: NumberInt(128)
  },
  etiquetas: ["Error"],
  stock: { actual: NumberInt(1), disponible: true }
});
*/
