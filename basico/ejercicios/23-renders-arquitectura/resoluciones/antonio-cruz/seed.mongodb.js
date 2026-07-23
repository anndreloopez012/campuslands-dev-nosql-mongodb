// Base de datos del ejercicio
use("campus_renders_arquitectura");

// Reinicio la colección para mantener el script repetible
db.renders.drop();

// Cada documento representa un render entregado a un cliente.
// El cliente se almacena dentro del mismo documento porque para este ejercicio
// no existe información compartida que justifique usar referencias.

db.renders.insertMany([
  {
    proyecto: "Residencial Las Flores",
    cliente: "Constructora Maya",
    tipo: "Exterior",
    software: "Lumion",
    fechaEntrega: ISODate("2026-08-05"),
    costo: 4200,
    estado: "entregado"
  },
  {
    proyecto: "Edificio Torre Norte",
    cliente: "Grupo Vertical",
    tipo: "Interior",
    software: "3ds Max",
    fechaEntrega: ISODate("2026-08-09"),
    costo: 5600,
    estado: "revision"
  },
  {
    proyecto: "Casa Horizonte",
    cliente: "Constructora Maya",
    tipo: "Exterior",
    software: "Lumion",
    fechaEntrega: ISODate("2026-08-14"),
    costo: 3100,
    estado: "entregado"
  },
  {
    proyecto: "Centro Comercial Nova",
    cliente: "Urban Projects",
    tipo: "Recorrido",
    software: "Twinmotion",
    fechaEntrega: ISODate("2026-08-18"),
    costo: 7900,
    estado: "produccion"
  },
  {
    proyecto: "Villa Toscana",
    cliente: "Arquitectura GT",
    tipo: "Interior",
    software: "Blender",
    fechaEntrega: ISODate("2026-08-22"),
    costo: 3800,
    estado: "revision"
  }
]);