// 02. Catalogo de skins battle royale
// Consultas - jeshua-perez

use campus_skins_battle_royale

// 1. Ver todo el catalogo
db.skins.find({})

// 2. Buscar skins disponibles de un juego especifico
db.skins.find({ juego: "Fortnite", disponible: true })

// 3. Listar skins por rareza, mostrando nombre y precio
db.skins.find(
  { rareza: "Epica" },
  { nombre: 1, precio: 1, _id: 0 }
)

// 4. Contar skins disponibles en el catalogo
db.skins.countDocuments({ disponible: true })

// 5. Marcar una skin como no disponible (venta agotada)
db.skins.updateOne(
  { nombre: "Explorador del Desierto" },
  { $set: { disponible: false } }
)

// 6. Reporte: precio promedio del catalogo
db.skins.aggregate([
  { $group: { _id: null, precioPromedio: { $avg: "$precio" } } }
])
