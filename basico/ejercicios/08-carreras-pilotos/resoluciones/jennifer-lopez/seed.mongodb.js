// Ranking de pilotos
// Solución de Denise López - Ejercicio 08

use campus_carreras_pilotos

// Crear la colección en minúsculas y plural
db.createCollection("pilotos")

// Insertar 5 pilotos de carreras con subdocumentos y arrays
db.pilotos.insertMany([
  {
    nombre: "Max Verstappen",
    escuderia: "Red Bull Racing",
    numero_auto: 1,
    activo: true,
    estadisticas: {
      puntos: 400,
      victorias: 15,
      podios: 18,
      vueltas_rapidas: 8
    },
    sponsors: ["Oracle", "Bybit", "Red Bull"],
    circuitos_favoritos: ["Spa-Francorchamps", "Zandvoort"]
  },
  {
    nombre: "Lewis Hamilton",
    escuderia: "Ferrari",
    numero_auto: 44,
    activo: true,
    estadisticas: {
      puntos: 220,
      victorias: 2,
      podios: 6,
      vueltas_rapidas: 3
    },
    sponsors: ["Tommy Hilfiger", "Monster Energy"],
    circuitos_favoritos: ["Silverstone", "Interlagos"]
  },
  {
    nombre: "Lando Norris",
    escuderia: "McLaren",
    numero_auto: 4,
    activo: true,
    estadisticas: {
      puntos: 330,
      victorias: 3,
      podios: 12,
      vueltas_rapidas: 4
    },
    sponsors: ["Dell Technologies", "Chrome"],
    circuitos_favoritos: ["Monza", "Singapore"]
  },
  {
    nombre: "Charles Leclerc",
    escuderia: "Ferrari",
    numero_auto: 16,
    activo: true,
    estadisticas: {
      puntos: 310,
      victorias: 3,
      podios: 10,
      vueltas_rapidas: 2
    },
    sponsors: ["Shell", "Ray-Ban"],
    circuitos_favoritos: ["Monaco", "Monza"]
  },
  {
    nombre: "Fernando Alonso",
    escuderia: "Aston Martin",
    numero_auto: 14,
    activo: true,
    estadisticas: {
      puntos: 180,
      victorias: 0,
      podios: 2,
      vueltas_rapidas: 1
    },
    sponsors: ["Aramco", "Cognizant"],
    circuitos_favoritos: ["Suzuka", "Baku"]
  }
])

// Índices optimizadores para ordenamiento de ranking y búsquedas
db.pilotos.createIndex({ nombre: 1 })
db.pilotos.createIndex({ "estadisticas.puntos": -1 })