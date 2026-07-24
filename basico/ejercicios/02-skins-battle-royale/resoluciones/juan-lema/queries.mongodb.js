// Ejercicio 02 - Catalogo de skins battle royale

use campus_skins_battle_royale

// 1. Listar todo el catalogo
db.registros.find({})

// 2. Filtrar skins legendarias disponibles, solo nombre y precio
db.registros.find(
  { rareza: "Legendaria", disponible: true },
  { nombre: 1, precio: 1, _id: 0 }
)

// 3. Filtrar por etiqueta especifica (skins de edicion limitada)
db.registros.find(
  { etiquetas: "edicion-limitada" },
  { nombre: 1, temporada: 1, _id: 0 }
)

// 4. Actualizar: "Guardian de Cristal" vuelve a estar disponible
db.registros.updateOne(
  { nombre: "Guardian de Cristal" },
  { $set: { disponible: true } }
)

db.registros.find({ nombre: "Guardian de Cristal" }, { nombre: 1, disponible: 1, _id: 0 })

// 5. Eliminar la skin comun de temporada 5 (rotacion de catalogo)
db.registros.deleteOne({ nombre: "Vagabundo Oxidado" })

db.registros.countDocuments({})

// 6. Reporte: cantidad de skins disponibles por rareza
db.registros.aggregate([
  { $match: { disponible: true } },
  { $group: { _id: "$rareza", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])
