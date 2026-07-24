// Base de datos del ejercicio
use("campus_tattoo_agenda");

// El script puede ejecutarse varias veces sin dejar registros duplicados
db.citas.drop();

// Cada documento representa una cita completa.
// El estado, la fecha y el tatuador siempre se consultan junto con la cita,
// así que mantener todo embebido simplifica bastante el modelo.

db.citas.insertMany([
  {
    cliente: "Carlos Méndez",
    tatuador: "Luis Romero",
    estilo: "Blackwork",
    zona: "Antebrazo",
    fecha: ISODate("2026-08-04T10:00:00"),
    precio: 1200,
    estado: "pendiente"
  },
  {
    cliente: "Andrea López",
    tatuador: "Sofía Pérez",
    estilo: "Minimalista",
    zona: "Muñeca",
    fecha: ISODate("2026-08-05T14:30:00"),
    precio: 650,
    estado: "confirmada"
  },
  {
    cliente: "Kevin Morales",
    tatuador: "Luis Romero",
    estilo: "Realismo",
    zona: "Espalda",
    fecha: ISODate("2026-08-06T09:00:00"),
    precio: 3200,
    estado: "confirmada"
  },
  {
    cliente: "María García",
    tatuador: "Diego Castillo",
    estilo: "Geométrico",
    zona: "Pierna",
    fecha: ISODate("2026-08-07T15:00:00"),
    precio: 1800,
    estado: "cancelada"
  },
  {
    cliente: "José Ramírez",
    tatuador: "Sofía Pérez",
    estilo: "Lettering",
    zona: "Pecho",
    fecha: ISODate("2026-08-08T11:30:00"),
    precio: 900,
    estado: "pendiente"
  }
]);