// 08. Ranking de pilotos
// Consultas - jeshua-perez

use campus_carreras_pilotos

// 1. Ranking general ordenado por puntos, de mayor a menor
db.pilotos.find({}, { nombre: 1, puntos: 1, _id: 0 }).sort({ puntos: -1 })

// 2. Top 3 del campeonato
db.pilotos.find({}, { nombre: 1, escuderia: 1, puntos: 1, _id: 0 }).sort({ puntos: -1 }).limit(3)

// 3. Piloto con menos puntos (ultimo lugar)
db.pilotos.find({}, { nombre: 1, puntos: 1, _id: 0 }).sort({ puntos: 1 }).limit(1)

// 4. Top 2 pilotos con mas victorias
db.pilotos.find({}, { nombre: 1, victorias: 1, _id: 0 }).sort({ victorias: -1 }).limit(2)

// 5. Sumar puntos a un piloto tras ganar una carrera
db.pilotos.updateOne(
  { nombre: "Sara Beltran" },
  { $inc: { puntos: 25, victorias: 1, podios: 1 } }
)

// 6. Ranking actualizado tras la carrera
db.pilotos.find({}, { nombre: 1, puntos: 1, _id: 0 }).sort({ puntos: -1 })
