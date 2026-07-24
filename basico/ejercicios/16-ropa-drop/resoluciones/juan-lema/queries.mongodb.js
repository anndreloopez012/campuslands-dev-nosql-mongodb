// 16 - Drop de ropa urbana | juan-lema
// Consultas CRUD sobre campus_ropa_drop.registros
use campus_ropa_drop

// 1. Listar todo el catalogo
try {
  print("--- 1. Catalogo completo ---")
  db.registros.find({}, { nombre: 1, categoria: 1, precio: 1, _id: 0 }).forEach(printjson)
} catch (e) { print("Error en find all: " + e.message) }

// 2. Filtrar: prendas activas con stock en talla "M"
try {
  print("--- 2. Activas con stock en talla M ---")
  db.registros.find(
    { activo: true, tallas: { $elemMatch: { talla: "M", stock: { $gt: 0 } } } },
    { nombre: 1, tallas: 1, _id: 0 }
  ).forEach(printjson)
} catch (e) { print("Error en find filtrado: " + e.message) }

// 3. Update: reponer stock de la talla "XL" del Hoodie Oversize Negro
try {
  print("--- 3. Reponer stock XL ---")
  const upd = db.registros.updateOne(
    { nombre: "Hoodie Oversize Negro", "tallas.talla": "XL" },
    { $set: { "tallas.$.stock": 8 } }
  )
  printjson(upd)
  // Verificacion
  printjson(db.registros.findOne({ nombre: "Hoodie Oversize Negro" }, { tallas: 1, _id: 0 }))
} catch (e) { print("Error en updateOne: " + e.message) }

// 4. Delete: eliminar prendas inactivas (descontinuadas)
try {
  print("--- 4. Eliminar inactivas ---")
  const del = db.registros.deleteOne({ activo: false })
  printjson(del)
  // Verificacion
  print("Restantes: " + db.registros.countDocuments({}))
} catch (e) { print("Error en deleteOne: " + e.message) }

// 5. Reporte: precio promedio por categoria (aggregate)
try {
  print("--- 5. Precio promedio por categoria ---")
  db.registros.aggregate([
    { $group: { _id: "$categoria", precioPromedio: { $avg: "$precio" }, prendas: { $sum: 1 } } },
    { $sort: { precioPromedio: -1 } }
  ]).forEach(printjson)
} catch (e) { print("Error en aggregate: " + e.message) }
