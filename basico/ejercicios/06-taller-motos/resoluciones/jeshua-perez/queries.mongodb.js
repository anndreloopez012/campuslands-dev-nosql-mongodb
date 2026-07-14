// 06. Ordenes de taller de motos
// Consultas - jeshua-perez

use campus_taller_motos

// 1. Ver todas las ordenes pendientes
db.ordenes.find({ estado: "pendiente" })

// 2. Update basico: pasar una orden de pendiente a en proceso
db.ordenes.updateOne(
  { cliente: "Oscar Delgado" },
  { $set: { estado: "en proceso" } }
)

// 3. Update basico: marcar una orden como completada
db.ordenes.updateOne(
  { cliente: "Marcela Nino" },
  { $set: { estado: "completado" } }
)

// 4. Update multiple: aplicar descuento a todas las ordenes pendientes
db.ordenes.updateMany(
  { estado: "pendiente" },
  { $mul: { costo: 0.9 } }
)

// 5. Consultar ordenes completadas tras los updates
db.ordenes.find({ estado: "completado" }, { cliente: 1, moto: 1, servicio: 1, _id: 0 })

// 6. Contar ordenes por estado "en proceso"
db.ordenes.countDocuments({ estado: "en proceso" })
