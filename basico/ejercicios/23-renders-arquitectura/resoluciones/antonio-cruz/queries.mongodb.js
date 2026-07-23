// Base de datos del ejercicio
use("campus_renders_arquitectura");

// Mostrar todos los renders
db.renders.find();

// Buscar proyectos del cliente Constructora Maya
db.renders.find(
  { cliente: "Constructora Maya" },
  {
    _id: 0,
    proyecto: 1,
    estado: 1
  }
);

// Renders que ya fueron entregados
db.renders.find(
  { estado: "entregado" },
  {
    _id: 0,
    proyecto: 1,
    cliente: 1
  }
);

// Proyectos con costo mayor a Q4000
db.renders.find(
  {
    costo: { $gt: 4000 }
  },
  {
    _id: 0,
    proyecto: 1,
    costo: 1
  }
);

// Reporte ordenado por fecha de entrega
db.renders.find(
  {},
  {
    _id: 0,
    proyecto: 1,
    fechaEntrega: 1
  }
).sort({ fechaEntrega: 1 });

// El cliente aprobó el render
db.renders.updateOne(
  { proyecto: "Villa Toscana" },
  {
    $set: {
      estado: "entregado"
    }
  }
);

// Confirmar la actualización
db.renders.find(
  { proyecto: "Villa Toscana" },
  {
    _id: 0,
    proyecto: 1,
    estado: 1
  }
);