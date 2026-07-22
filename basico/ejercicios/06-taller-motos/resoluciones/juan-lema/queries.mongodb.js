// Ejercicio 06 - Ordenes de taller de motos
use campus_taller_motos

// 1. Catalogo completo
db.ordenes.find({})

// 2. Ordenes pendientes con proyeccion
db.ordenes.find(
  { estado: "pendiente" },
  { cliente: 1, "moto.marca": 1, "moto.modelo": 1, costo: 1, _id: 0 }
)

// 3. Ordenes de alta prioridad con costo mayor a 500
db.ordenes.find(
  { prioridad: "alta", costo: { $gt: 500 } },
  { "moto.placa": 1, costo: 1, estado: 1, _id: 0 }
)

// 4. Update basico: marcar orden en_proceso -> finalizada y ajustar costo
db.ordenes.updateOne(
  { "moto.placa": "P456DEF" },
  { $set: { estado: "finalizada", costo: 800 } }
)
db.ordenes.find({ "moto.placa": "P456DEF" }, { estado: 1, costo: 1, _id: 0 })

// 5. Update basico: agregar servicio adicional a una orden pendiente
db.ordenes.updateOne(
  { "moto.placa": "P789GHI" },
  { $push: { servicios: "cambio de filtro de aire" } }
)
db.ordenes.find({ "moto.placa": "P789GHI" }, { servicios: 1, _id: 0 })

// 6. Eliminar una orden finalizada antigua
db.ordenes.deleteOne({ "moto.placa": "P123ABC" })
db.ordenes.countDocuments({})

// 7. Reporte: total de costo agrupado por estado
db.ordenes.aggregate([
  { $group: { _id: "$estado", totalCosto: { $sum: "$costo" }, ordenes: { $sum: 1 } } },
  { $sort: { totalCosto: -1 } }
])
