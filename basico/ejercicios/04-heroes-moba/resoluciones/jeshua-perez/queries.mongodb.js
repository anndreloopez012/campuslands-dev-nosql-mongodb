// 04. Heroes MOBA por rol
// Consultas - jeshua-perez

use campus_heroes_moba

// 1. Ver todos los heroes
db.heroes.find({})

// 2. Filtro simple: heroes de rol Tank
db.heroes.find({ rol: "Tank" })

// 3. Filtro simple: heroes disponibles en ranked
db.heroes.find({ disponibleRanked: true })

// 4. Filtro simple: heroes de dificultad Alta
db.heroes.find({ dificultad: "Alta" }, { nombre: 1, rol: 1, _id: 0 })

// 5. Habilitar un heroe para ranked (operacion de actualizacion pedida en el ejercicio)
db.heroes.updateOne(
  { nombre: "Sombra Silente" },
  { $set: { disponibleRanked: true } }
)

// 6. Contar heroes por disponibilidad en ranked
db.heroes.countDocuments({ disponibleRanked: true })
