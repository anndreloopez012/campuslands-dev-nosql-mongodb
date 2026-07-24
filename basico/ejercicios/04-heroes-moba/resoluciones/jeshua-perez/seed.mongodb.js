// 04. Heroes MOBA por rol
// Solucion - jeshua-perez (nivel basico)
// Enfoque: filtros simples

use campus_heroes_moba

db.heroes.drop()

db.createCollection("heroes")

db.heroes.insertMany([
  {
    nombre: "Draven Filo de Hacha",
    rol: "Carry",
    dificultad: "Media",
    winRate: 51.2,
    disponibleRanked: true
  },
  {
    nombre: "Muralla de Piedra",
    rol: "Tank",
    dificultad: "Baja",
    winRate: 53.8,
    disponibleRanked: true
  },
  {
    nombre: "Susurro Curativo",
    rol: "Support",
    dificultad: "Baja",
    winRate: 49.6,
    disponibleRanked: true
  },
  {
    nombre: "Sombra Silente",
    rol: "Jungla",
    dificultad: "Alta",
    winRate: 47.9,
    disponibleRanked: false
  },
  {
    nombre: "Arcano Central",
    rol: "Mid",
    dificultad: "Alta",
    winRate: 50.5,
    disponibleRanked: true
  },
  {
    nombre: "Coloso Errante",
    rol: "Tank",
    dificultad: "Media",
    winRate: 52.1,
    disponibleRanked: false
  }
])
