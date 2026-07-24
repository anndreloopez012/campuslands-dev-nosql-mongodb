// 23. Renders arquitectura 3D
// Consultas - jeshua-perez

use campus_renders_arquitectura

// 1. Todos los proyectos de un cliente
db.renders.find({ cliente: "Grupo Meridiano" })

// 2. Proyectos pendientes de entrega de un cliente
db.renders.find({ cliente: "Familia Escobar", entregado: false })

// 3. Proyectos entregados de un cliente, ordenados por fecha
db.renders.find({ cliente: "Constructora Alameda", entregado: true }).sort({ fechaEntrega: 1 })

// 4. Total facturado por cliente
db.renders.aggregate([
  { $group: { _id: "$cliente", totalFacturado: { $sum: "$costo" } } }
])

// 5. Marcar un render como entregado
db.renders.updateOne(
  { proyecto: "Oficinas Torre Sol" },
  { $set: { entregado: true } }
)

// 6. Listar clientes distintos en cartera
db.renders.distinct("cliente")
