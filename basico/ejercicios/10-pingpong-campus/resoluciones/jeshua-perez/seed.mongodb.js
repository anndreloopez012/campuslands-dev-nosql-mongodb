// 10. Liga de pingpong
// Solucion - jeshua-perez (nivel basico)
// Enfoque: conteo y busqueda

use campus_pingpong_campus

db.jugadores.drop()

db.createCollection("jugadores")

db.jugadores.insertMany([
  { nombre: "Carlos Munoz", categoria: "Avanzado", club: "Paleta de Oro", partidosGanados: 22, partidosPerdidos: 5 },
  { nombre: "Sofia Trujillo", categoria: "Intermedio", club: "Ping Campus", partidosGanados: 15, partidosPerdidos: 10 },
  { nombre: "Hernan Diaz", categoria: "Avanzado", club: "Paleta de Oro", partidosGanados: 18, partidosPerdidos: 8 },
  { nombre: "Melissa Roa", categoria: "Principiante", club: "Ping Campus", partidosGanados: 4, partidosPerdidos: 12 },
  { nombre: "Ivan Castano", categoria: "Intermedio", club: "Smash Club", partidosGanados: 13, partidosPerdidos: 9 },
  { nombre: "Paola Mendez", categoria: "Avanzado", club: "Smash Club", partidosGanados: 20, partidosPerdidos: 6 }
])
