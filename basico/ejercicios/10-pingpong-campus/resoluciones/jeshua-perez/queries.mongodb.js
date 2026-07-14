// 10. Liga de pingpong
// Consultas - jeshua-perez

use campus_pingpong_campus

// 1. Busqueda por club
db.jugadores.find({ club: "Paleta de Oro" })

// 2. Busqueda por categoria
db.jugadores.find({ categoria: "Avanzado" }, { nombre: 1, club: 1, _id: 0 })

// 3. Contar jugadores por categoria (Intermedio)
db.jugadores.countDocuments({ categoria: "Intermedio" })

// 4. Contar total de jugadores en la liga
db.jugadores.countDocuments({})

// 5. Buscar jugadores con mas de 15 partidos ganados
db.jugadores.find({ partidosGanados: { $gt: 15 } }, { nombre: 1, partidosGanados: 1, _id: 0 })

// 6. Registrar un nuevo partido ganado para un jugador
db.jugadores.updateOne(
  { nombre: "Melissa Roa" },
  { $inc: { partidosGanados: 1 } }
)

// 7. Contar jugadores por club usando distinct
db.jugadores.distinct("club")
