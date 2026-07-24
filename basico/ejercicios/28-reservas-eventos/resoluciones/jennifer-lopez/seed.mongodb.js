// Reservas de eventos campus 
// Solución de Denise López - Ejercicio 28

use campus_reservas_eventos

// Crear la colección principal en minúsculas y plural
db.createCollection("reservas")

// Insertar 5 reservas de eventos deportivos en recintos del campus
db.reservas.insertMany([
  {
    codigo_reserva: "RES-DEP-001",
    nombre_evento: "Torneo Relámpago de Futsal Campus",
    deporte: "Futsal",
    organizador: "Zephyrine Valdivia",
    recinto: "Complejo Deportivo Cráter Azul",
    pais: "Guatemala",
    asistentes_esperados: 120,
    estado_reserva: "Confirmada",
    detalles_pago: {
      monto_gtq: 450.00,
      pagado: true,
      metodo: "Transferencia"
    },
    equipamiento_solicitado: ["Balones", "Chalecos", "Cronómetro Digital"],
    fecha_evento: ISODate("2026-08-05T10:00:00Z")
  },
  {
    codigo_reserva: "RES-DEP-002",
    nombre_evento: "Clínica de Básquetbol Universitario",
    deporte: "Básquetbol",
    organizador: "Orestes Vane",
    recinto: "Gimnasio Semuc Champey",
    pais: "Guatemala",
    asistentes_esperados: 60,
    estado_reserva: "Pendiente",
    detalles_pago: {
      monto_gtq: 250.00,
      pagado: false,
      metodo: "Efectivo"
    },
    equipamiento_solicitado: ["Tableros Ajustables", "Balones Molten"],
    fecha_evento: ISODate("2026-08-12T14:00:00Z")
  },
  {
    codigo_reserva: "RES-DEP-003",
    nombre_evento: "Campeonato Nocturno de Voleibol",
    deporte: "Voleibol",
    organizador: "Balthazar Nightshade",
    recinto: "Cancha Multiusos Quiriguá",
    pais: "Guatemala",
    asistentes_esperados: 80,
    estado_reserva: "Cancelada",
    detalles_pago: {
      monto_gtq: 300.00,
      pagado: false,
      metodo: "Ninguno"
    },
    equipamiento_solicitado: ["Red Profesional", "Balones Mikasa"],
    fecha_evento: ISODate("2026-07-10T18:00:00Z")
  },
  {
    codigo_reserva: "RES-DEP-004",
    nombre_evento: "Exhibición de Tenis de Mesa",
    deporte: "Tenis de Mesa",
    organizador: "Cyrene Sterling",
    recinto: "Salón Polideportivo Tikal",
    pais: "Guatemala",
    asistentes_esperados: 35,
    estado_reserva: "Confirmada",
    detalles_pago: {
      monto_gtq: 180.00,
      pagado: true,
      metodo: "Tarjeta"
    },
    equipamiento_solicitado: ["Mesas Oficiales", "Redes", "Pelotas 3 Estrellas"],
    fecha_evento: ISODate("2026-08-20T09:00:00Z")
  },
  {
    codigo_reserva: "RES-DEP-005",
    nombre_evento: "Práctica Libre de Atletismo",
    deporte: "Atletismo",
    organizador: "Melantho Frost",
    recinto: "Pista Olímpica Laguna Lachúa",
    pais: "Guatemala",
    asistentes_esperados: 25,
    estado_reserva: "Cancelada",
    detalles_pago: {
      monto_gtq: 100.00,
      pagado: false,
      metodo: "Ninguno"
    },
    equipamiento_solicitado: ["Vallas", "Testigos de Relevo"],
    fecha_evento: ISODate("2026-06-15T07:00:00Z")
  }
])

// creacion de índices para optimizar consultas frecuentes
// Sirve para consultar de inmediato las reservas según su estado (Confirmada, Pendiente, Cancelada).
db.reservas.createIndex({ estado_reserva: 1 })

// Sirve para ubicar rápidamente la disponibilidad y eventos agendados en un recinto específico.
db.reservas.createIndex({ recinto: 1 })

// Sirve para filtrar de golpe las reservas registradas por disciplina deportiva.
db.reservas.createIndex({ deporte: 1 })