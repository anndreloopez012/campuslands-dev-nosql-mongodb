// Base de datos del ejercicio
use("campus_formulas_lab");

// Mostrar todas las fórmulas
db.formulas.find();

// Fórmulas aprobadas
db.formulas.find(
  { estado: "aprobada" },
  {
    _id: 0,
    nombre: 1,
    codigo: 1
  }
);

// Buscar fórmulas que utilicen Agua destilada
db.formulas.find(
  { componentes: "Agua destilada" },
  {
    _id: 0,
    nombre: 1,
    componentes: 1
  }
);

// Fórmulas de la categoría Reactivo
db.formulas.find(
  { categoria: "Reactivo" },
  {
    _id: 0,
    nombre: 1,
    responsable: 1
  }
);

// Reporte ordenado por fecha de creación
db.formulas.find(
  {},
  {
    _id: 0,
    nombre: 1,
    fechaCreacion: 1,
    estado: 1
  }
).sort({ fechaCreacion: 1 });

// La fórmula terminó el proceso de revisión
db.formulas.updateOne(
  { codigo: "FQ-005" },
  {
    $set: {
      estado: "aprobada"
    }
  }
);

// Confirmar la actualización
db.formulas.find(
  { codigo: "FQ-005" },
  {
    _id: 0,
    nombre: 1,
    estado: 1
  }
);