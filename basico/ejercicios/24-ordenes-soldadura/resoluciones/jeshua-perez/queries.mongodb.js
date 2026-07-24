// 24. Ordenes de soldadura
// Consultas - jeshua-perez

use campus_ordenes_soldadura

// 1. Ordenes rechazadas, que requieren reproceso
db.ordenes.find({ estadoInspeccion: "rechazado" })

// 2. Ordenes pendientes de inspeccionar
db.ordenes.find({ estadoInspeccion: "pendiente" })

// 3. Ordenes de un soldador especifico con su resultado
db.ordenes.find(
  { soldador: "Anibal Correa" },
  { pieza: 1, estadoInspeccion: 1, _id: 0 }
)

// 4. Aprobar una orden que paso inspeccion
db.ordenes.updateOne(
  { pieza: "Bracket Soporte A7" },
  { $set: { estadoInspeccion: "aprobado" } }
)

// 5. Reenviar una orden rechazada a estado pendiente tras corregirla
db.ordenes.updateOne(
  { pieza: "Tuberia 6 pulgadas" },
  { $set: { estadoInspeccion: "pendiente" } }
)

// 6. Reporte de ordenes por estado de inspeccion
db.ordenes.aggregate([
  { $group: { _id: "$estadoInspeccion", total: { $sum: 1 } } }
])
