// 05. Liga de futbol campus
// Consultas - jeshua-perez

use campus_liga_futbol

// 1. Tabla de goleadores: proyeccion limpia ordenada de mayor a menor
db.jugadores.find(
  {},
  { nombre: 1, equipo: 1, goles: 1, _id: 0 }
).sort({ goles: -1 })

// 2. Top 3 asistidores
db.jugadores.find(
  {},
  { nombre: 1, asistencias: 1, _id: 0 }
).sort({ asistencias: -1 }).limit(3)

// 3. Jugadores de un equipo, ordenados alfabeticamente
db.jugadores.find(
  { equipo: "Halcones FC" },
  { nombre: 1, posicion: 1, _id: 0 }
).sort({ nombre: 1 })

// 4. Ordenar por partidos jugados ascendente (menos rodaje primero)
db.jugadores.find({}, { nombre: 1, partidosJugados: 1, _id: 0 }).sort({ partidosJugados: 1 })

// 5. Reporte: sumar un gol a un jugador tras un nuevo partido
db.jugadores.updateOne(
  { nombre: "Felipe Duarte" },
  { $inc: { goles: 1, partidosJugados: 1 } }
)
