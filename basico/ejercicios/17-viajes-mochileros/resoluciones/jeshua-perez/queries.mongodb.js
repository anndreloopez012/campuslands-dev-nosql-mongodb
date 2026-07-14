// 17. Viajes mochileros
// Consultas - jeshua-perez

use campus_viajes_mochileros

// 1. Viajes que iniciaron a partir de marzo de 2026
db.viajes.find({ fechaInicio: { $gte: new Date("2026-03-01") } })

// 2. Viajes que se pasaron del presupuesto ($expr compara dos campos del mismo documento)
db.viajes.find({ $expr: { $gt: ["$gastado", "$presupuesto"] } })

// 3. Viajes de un viajero especifico, ordenados por fecha de inicio
db.viajes.find({ viajero: "Cristian Lopez" }).sort({ fechaInicio: 1 })

// 4. Viajes con presupuesto mayor a 500000, mostrando destino y fechas
db.viajes.find(
  { presupuesto: { $gt: 500000 } },
  { destino: 1, fechaInicio: 1, fechaFin: 1, _id: 0 }
)

// 5. Registrar un gasto adicional en un viaje activo
db.viajes.updateOne(
  { destino: "Salento" },
  { $inc: { gastado: 25000 } }
)

// 6. Reporte: presupuesto total planeado en todos los viajes
db.viajes.aggregate([
  { $group: { _id: null, presupuestoTotal: { $sum: "$presupuesto" } } }
])
