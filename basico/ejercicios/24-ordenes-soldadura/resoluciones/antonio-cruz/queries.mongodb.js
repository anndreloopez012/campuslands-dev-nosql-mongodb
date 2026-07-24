// Base de datos del ejercicio
use("campus_ordenes_soldadura");

// Mostrar todas las órdenes
db.ordenes.find();

// Órdenes que ya aprobaron inspección
db.ordenes.find(
  { inspeccion: "aprobada" },
  {
    _id: 0,
    codigo: 1,
    cliente: 1
  }
);

// Trabajos pendientes de inspección
db.ordenes.find(
  { inspeccion: "pendiente" },
  {
    _id: 0,
    codigo: 1,
    soldador: 1
  }
);

// Órdenes realizadas con proceso TIG
db.ordenes.find(
  { proceso: "TIG" },
  {
    _id: 0,
    codigo: 1,
    cliente: 1
  }
);

// Reporte ordenado por fecha
db.ordenes.find(
  {},
  {
    _id: 0,
    codigo: 1,
    fecha: 1,
    inspeccion: 1
  }
).sort({ fecha: 1 });

// La orden fue revisada y aprobada
db.ordenes.updateOne(
  { codigo: "OS-005" },
  {
    $set: {
      inspeccion: "aprobada"
    }
  }
);

// Confirmar la actualización
db.ordenes.find(
  { codigo: "OS-005" },
  {
    _id: 0,
    codigo: 1,
    inspeccion: 1
  }
);