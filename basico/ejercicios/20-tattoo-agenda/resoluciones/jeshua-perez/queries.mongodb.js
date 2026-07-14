// 20. Agenda de tatuajes
// Consultas - jeshua-perez

use campus_tattoo_agenda

// 1. Citas pendientes por confirmar
db.citas.find({ estado: "pendiente" })

// 2. Agenda de un artista, ordenada por fecha
db.citas.find({ artista: "Nadia Ferro" }).sort({ fecha: 1 })

// 3. Citas de una semana especifica (rango de fechas)
db.citas.find({
  fecha: { $gte: new Date("2026-07-14"), $lt: new Date("2026-07-21") }
})

// 4. Confirmar una cita pendiente
db.citas.updateOne(
  { cliente: "Erika Montano" },
  { $set: { estado: "confirmada" } }
)

// 5. Marcar una cita como completada tras realizarse
db.citas.updateOne(
  { cliente: "Wilson Bravo" },
  { $set: { estado: "completada" } }
)

// 6. Reporte de citas por estado
db.citas.aggregate([
  { $group: { _id: "$estado", total: { $sum: 1 } } }
])
