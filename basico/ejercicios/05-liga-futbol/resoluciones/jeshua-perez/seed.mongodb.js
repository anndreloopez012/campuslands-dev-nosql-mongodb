// 05. Liga de futbol campus
// Solucion - jeshua-perez (nivel basico)
// Enfoque: proyecciones y ordenamiento

use campus_liga_futbol

db.jugadores.drop()

db.createCollection("jugadores")

db.jugadores.insertMany([
  { nombre: "Esteban Molina", equipo: "Halcones FC", posicion: "Delantero", goles: 18, asistencias: 4, partidosJugados: 20 },
  { nombre: "Ricardo Pena", equipo: "Titanes Azules", posicion: "Mediocampista", goles: 6, asistencias: 14, partidosJugados: 22 },
  { nombre: "David Fonseca", equipo: "Halcones FC", posicion: "Defensa", goles: 1, asistencias: 2, partidosJugados: 21 },
  { nombre: "Santiago Vera", equipo: "Leones Rojos", posicion: "Delantero", goles: 15, asistencias: 6, partidosJugados: 19 },
  { nombre: "Andres Puentes", equipo: "Titanes Azules", posicion: "Portero", goles: 0, asistencias: 0, partidosJugados: 22 },
  { nombre: "Felipe Duarte", equipo: "Leones Rojos", posicion: "Mediocampista", goles: 9, asistencias: 11, partidosJugados: 20 }
])
