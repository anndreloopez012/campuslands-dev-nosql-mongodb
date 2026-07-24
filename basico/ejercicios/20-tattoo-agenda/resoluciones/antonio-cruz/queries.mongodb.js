// Base de datos del ejercicio
use("campus_tattoo_agenda");

// Mostrar todas las citas
db.citas.find();

// Citas que ya fueron confirmadas
db.citas.find(
  { estado: "confirmada" },
  {
    _id: 0,
    cliente: 1,
    tatuador: 1,
    fecha: 1
  }
);

// Trabajos con precio mayor a Q1000
db.citas.find(
  {
    precio: { $gt: 1000 }
  },
  {
    _id: 0,
    cliente: 1,
    precio: 1
  }
);

// Citas asignadas a Sofía Pérez
db.citas.find(
  {
    tatuador: "Sofía Pérez"
  },
  {
    _id: 0,
    cliente: 1,
    estado: 1
  }
);

// Reporte ordenado por fecha
db.citas.find(
  {},
  {
    _id: 0,
    cliente: 1,
    fecha: 1,
    estado: 1
  }
).sort({ fecha: 1 });

// El cliente confirmó su cita
db.citas.updateOne(
  { cliente: "José Ramírez" },
  {
    $set: {
      estado: "confirmada"
    }
  }
);

// Validar el cambio realizado
db.citas.find(
  { cliente: "José Ramírez" },
  {
    _id: 0,
    cliente: 1,
    estado: 1
  }
);