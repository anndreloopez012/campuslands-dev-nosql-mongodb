// Reservas de eventos campus - Consultas y Operaciones
// Solución de Denise López - Ejercicio 28

use campus_reservas_eventos

// 1. Consulta general requerida por la plantilla base
db.reservas.find({})

// 2. Consulta de reservas confirmadas con pago realizado
db.reservas.find(
  { estado_reserva: "Confirmada", "detalles_pago.pagado": true },
  { codigo_reserva: 1, nombre_evento: 1, recinto: 1, "detalles_pago.monto_gtq": 1, _id: 0 }
)

// 3. Consulta de eventos con capacidad esperada superior a 50 asistentes
db.reservas.find(
  { asistentes_esperados: { $gt: 50 } },
  { nombre_evento: 1, deporte: 1, asistentes_esperados: 1, organizador: 1, _id: 0 }
)

// 4. Operación de actualización (Update): Confirmar pago y estado de la reserva de Básquetbol
db.reservas.updateOne(
  { codigo_reserva: "RES-DEP-002" },
  {
    $set: {
      estado_reserva: "Confirmada",
      "detalles_pago.pagado": true,
      "detalles_pago.metodo": "Transferencia"
    }
  }
)

// 5. Inserción de una nueva reserva deportiva en Guatemala
db.reservas.insertOne({
  codigo_reserva: "RES-DEP-006",
  nombre_evento: "Torneo Interfacultades de Ajedrez",
  deporte: "Ajedrez",
  organizador: "Xanthos Escandón",
  recinto: "Salón Polideportivo Tikal",
  pais: "Guatemala",
  asistentes_esperados: 40,
  estado_reserva: "Confirmada",
  detalles_pago: {
    monto_gtq: 200.00,
    pagado: true,
    metodo: "Efectivo"
  },
  equipamiento_solicitado: ["Tableros Profesionales", "Relojes Digitales"],
  fecha_evento: ISODate("2026-09-01T15:00:00Z")
})

// 6. Delete Controlado 1: Eliminar una reserva específica que fue cancelada (deleteOne)
db.reservas.deleteOne({ codigo_reserva: "RES-DEP-003" })

// 7. Delete Controlado 2: Eliminar de forma masiva las reservas con estado "Cancelada" (deleteMany)
db.reservas.deleteMany({ estado_reserva: "Cancelada" })