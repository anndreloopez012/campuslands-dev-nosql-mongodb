// Drop de ropa urbana - Consultas y Operaciones
// Solución de Denise López - Ejercicio 16

use campus_ropa_drop

// 1. Consulta general para listar todos los registros (requerido por la plantilla base)
db.productos.find({})

// 2. Consulta por array de tallas: Buscar productos que tengan disponible la talla "M"
db.productos.find(
  { tallas_disponibles: "M" },
  { prenda: 1, marca: 1, precio_usd: 1, tallas_disponibles: 1, _id: 0 }
)

// 3. Consulta de coincidencia múltiple en array: Productos que tengan disponibles TANTO la talla "S" como "L"
db.productos.find(
  { tallas_disponibles: { $all: ["S", "L"] } },
  { prenda: 1, marca: 1, tallas_disponibles: 1, _id: 0 }
)

// 4. Operación de actualización (Update): Agregar una nueva talla "XXL" a la hoodie de Supreme ($push)
db.productos.updateOne(
  { marca: "Supreme", prenda: "Box Logo Oversized Hoodie" },
  { 
    $push: { tallas_disponibles: "XXL" },
    $inc: { stock_total: 10 }
  }
)

// 5. Remover una talla agotada del arreglo ($pull) y marcar agotado si el stock llega a 0
db.productos.updateOne(
  { marca: "Stüssy", prenda: "World Tour Pigment Dyed Tee" },
  { $pull: { tallas_disponibles: "M" } }
)