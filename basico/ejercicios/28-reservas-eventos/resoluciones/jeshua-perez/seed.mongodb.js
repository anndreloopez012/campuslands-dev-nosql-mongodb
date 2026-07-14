// 28. Reservas de eventos campus
// Solucion - jeshua-perez (nivel basico)
// Enfoque: delete controlado

use campus_reservas_eventos

db.reservas.drop()

db.createCollection("reservas")

db.reservas.insertMany([
  { evento: "Torneo de Voleibol Interfacultades", deporte: "Voleibol", responsable: "Diana Castano", cupo: 24, fecha: new Date("2026-07-20"), estado: "confirmada" },
  { evento: "Clasico de Baloncesto Campus", deporte: "Baloncesto", responsable: "Julian Mora", cupo: 20, fecha: new Date("2026-07-22"), estado: "confirmada" },
  { evento: "Sesion de Yoga al Aire Libre", deporte: "Yoga", responsable: "Paula Beltran", cupo: 15, fecha: new Date("2026-06-05"), estado: "cancelada" },
  { evento: "Maraton 5K Campus", deporte: "Atletismo", responsable: "Ricardo Nieto", cupo: 100, fecha: new Date("2026-08-01"), estado: "confirmada" },
  { evento: "Torneo Relampago de Ajedrez", deporte: "Ajedrez", responsable: "Diana Castano", cupo: 16, fecha: new Date("2026-06-10"), estado: "cancelada" },
  { evento: "Clinica de Natacion", deporte: "Natacion", responsable: "Julian Mora", cupo: 12, fecha: new Date("2026-07-25"), estado: "confirmada" }
])
