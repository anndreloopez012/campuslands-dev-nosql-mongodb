// 26. Inventario ecommerce (autos y motos)
// Consultas - jeshua-perez

use campus_inventario_ecommerce

// 1. Alerta: productos con stock por debajo del minimo ($expr compara dos campos)
db.productos.find({ $expr: { $lt: ["$stock", "$stockMinimo"] } })

// 2. Productos por categoria
db.productos.find({ categoria: "moto" }, { nombre: 1, stock: 1, _id: 0 })

// 3. Productos sin stock disponible
db.productos.find({ stock: { $lte: 0 } })

// 4. Registrar una venta (descontar stock)
db.productos.updateOne(
  { nombre: "Bujia de alto rendimiento" },
  { $inc: { stock: -1 } }
)

// 5. Registrar reposicion de inventario
db.productos.updateOne(
  { nombre: "Kit de frenos delanteros" },
  { $inc: { stock: 20 } }
)

// 6. Reporte: valor total del inventario por categoria
db.productos.aggregate([
  { $group: { _id: "$categoria", valorInventario: { $sum: { $multiply: ["$precio", "$stock"] } } } }
])
