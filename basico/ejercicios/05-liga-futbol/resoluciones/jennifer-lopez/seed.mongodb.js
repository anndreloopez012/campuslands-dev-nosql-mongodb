// Liga de fútbol campus
// Solución de Denise López - Ejercicio 05

use campus_liga_futbol

// Crear la colección en minúsculas y plural
db.createCollection("equipos")

// Insertar 5 equipos con subdocumentos y arrays
db.equipos.insertMany([
  {
    nombre: "Lions FC",
    ciudad: "Bucaramanga",
    fundado: 2018,
    activo: true,
    estadisticas: {
      partidos_jugados: 10,
      partidos_ganados: 7,
      goles_favor: 22,
      puntos: 23
    },
    jugadores_destacados: ["Carlos Valderrama", "Luis Díaz"],
    categorias: ["Masculino", "Mayores"]
  },
  {
    nombre: "Águilas Doradas Campus",
    ciudad: "Floridablanca",
    fundado: 2020,
    activo: true,
    estadisticas: {
      partidos_jugados: 10,
      partidos_ganados: 8,
      goles_favor: 28,
      puntos: 26
    },
    jugadores_destacados: ["James Rodríguez", "Radamel Falcao"],
    categorias: ["Masculino", "Mayores"]
  },
  {
    nombre: "Titanas Femenino",
    ciudad: "Giron",
    fundado: 2021,
    activo: true,
    estadisticas: {
      partidos_jugados: 10,
      partidos_ganados: 6,
      goles_favor: 19,
      puntos: 20
    },
    jugadores_destacados: ["Linda Caicedo", "Catalina Usme"],
    categorias: ["Femenino", "Mayores"]
  },
  {
    nombre: "Pumas Sub-20",
    ciudad: "Bucaramanga",
    fundado: 2022,
    activo: true,
    estadisticas: {
      partidos_jugados: 10,
      partidos_ganados: 3,
      goles_favor: 12,
      puntos: 11
    },
    jugadores_destacados: ["Yaser Asprilla"],
    categorias: ["Masculino", "Sub-20"]
  },
  {
    nombre: "Real Campus",
    ciudad: "Piedecuesta",
    fundado: 2019,
    activo: false,
    estadisticas: {
      partidos_jugados: 10,
      partidos_ganados: 2,
      goles_favor: 8,
      puntos: 7
    },
    jugadores_destacados: ["Daniel Muñoz"],
    categorias: ["Masculino", "Mayores"]
  }
])

// Índices optimizadores para consultas por nombre y tabla de posiciones (puntos)
db.equipos.createIndex({ nombre: 1 })
db.equipos.createIndex({ "estadisticas.puntos": -1 })