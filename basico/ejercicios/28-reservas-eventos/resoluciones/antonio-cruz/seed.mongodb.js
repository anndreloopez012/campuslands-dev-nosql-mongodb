// Base de datos del ejercicio
use("campus_reservas_eventos");

// Limpio la colección para mantener una carga controlada y repetible
db.reservas.drop();

// Cada documento representa una reserva completa de un evento deportivo.
// Los datos del participante y del evento se mantienen juntos porque se leen
// normalmente en la misma operación de consulta.

db.reservas.insertMany([
  {
    evento: "Torneo de Futbol Campus",
    deporte: "Futbol",
    participante: "Carlos Méndez",
    fechaEvento: ISODate("2026-08-10"),
    cancha: "Cancha A",
    estado: "confirmada"
  },
  {
    evento: "Carrera 5K Campus",
    deporte: "Atletismo",
    participante: "Andrea López",
    fechaEvento: ISODate("2026-08-12"),
    cancha: "Pista Principal",
    estado: "pendiente"
  },
  {
    evento: "Campeonato de Baloncesto",
    deporte: "Baloncesto",
    participante: "Kevin Morales",
    fechaEvento: ISODate("2026-08-15"),
    cancha: "Cancha B",
    estado: "confirmada"
  },
  {
    evento: "Torneo de Voleibol",
    deporte: "Voleibol",
    participante: "María García",
    fechaEvento: ISODate("2026-08-18"),
    cancha: "Cancha C",
    estado: "cancelada"
  },
  {
    evento: "Competencia de Natación",
    deporte: "Natación",
    participante: "José Ramírez",
    fechaEvento: ISODate("2026-08-20"),
    piscina: "Piscina Campus",
    estado: "pendiente"
  }
]);