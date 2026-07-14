// 15. Pedidos foodtruck
// Consultas - jeshua-perez

use campus_foodtruck_campus

// 1. Insertar un nuevo pedido que llega al foodtruck
db.pedidos.insertOne({
  cliente: "Diego Palacios",
  items: ["Arepa rellena", "Gaseosa"],
  total: 16000,
  estado: "recibido",
  fecha: new Date("2026-06-01T12:20:00")
})

// 2. Ver pedidos pendientes por preparar
db.pedidos.find({ estado: "recibido" })

// 3. Actualizar un pedido de "recibido" a "en preparacion"
db.pedidos.updateOne(
  { cliente: "Laura Beltran" },
  { $set: { estado: "en preparacion" } }
)

// 4. Actualizar un pedido de "en preparacion" a "entregado"
db.pedidos.updateOne(
  { cliente: "Jhon Cardenas" },
  { $set: { estado: "entregado" } }
)

// 5. Ver todos los pedidos entregados, ordenados por fecha
db.pedidos.find({ estado: "entregado" }).sort({ fecha: 1 })

// 6. Reporte: total vendido en pedidos entregados
db.pedidos.aggregate([
  { $match: { estado: "entregado" } },
  { $group: { _id: null, totalVendido: { $sum: "$total" } } }
])
