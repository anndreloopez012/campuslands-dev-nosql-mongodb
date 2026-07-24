// Base de datos del ejercicio
use("campus_viajes_mochileros");

// Reinicio la colección para que el script pueda ejecutarse varias veces
db.viajes.drop();

// Cada documento representa un viaje completo.
// El presupuesto y las fechas pertenecen al mismo contexto, así que no vale
// la pena dividir esta información en varias colecciones.

db.viajes.insertMany([
  {
    destino: "Antigua Guatemala",
    pais: "Guatemala",
    presupuesto: 1800,
    transporte: "Bus",
    duracionDias: 3,
    fechaSalida: ISODate("2026-08-05"),
    fechaRegreso: ISODate("2026-08-08"),
    acompanantes: 2,
    estado: "planeado"
  },
  {
    destino: "Panajachel",
    pais: "Guatemala",
    presupuesto: 950,
    transporte: "Bus",
    duracionDias: 2,
    fechaSalida: ISODate("2026-09-12"),
    fechaRegreso: ISODate("2026-09-14"),
    acompanantes: 1,
    estado: "planeado"
  },
  {
    destino: "León",
    pais: "Nicaragua",
    presupuesto: 3200,
    transporte: "Bus",
    duracionDias: 5,
    fechaSalida: ISODate("2026-10-02"),
    fechaRegreso: ISODate("2026-10-07"),
    acompanantes: 3,
    estado: "confirmado"
  },
  {
    destino: "San Salvador",
    pais: "El Salvador",
    presupuesto: 2200,
    transporte: "Bus",
    duracionDias: 4,
    fechaSalida: ISODate("2026-11-10"),
    fechaRegreso: ISODate("2026-11-14"),
    acompanantes: 2,
    estado: "planeado"
  },
  {
    destino: "Copán Ruinas",
    pais: "Honduras",
    presupuesto: 2700,
    transporte: "Bus",
    duracionDias: 4,
    fechaSalida: ISODate("2026-12-03"),
    fechaRegreso: ISODate("2026-12-07"),
    acompanantes: 1,
    estado: "confirmado"
  }
]);