// Liga de pingpong
// Solución de Denise López - Ejercicio 10

use campus_pingpong_campus

// Crear la colección principal en minúsculas y plural
db.createCollection("jugadores")

// Insertar 5 documentos coherentes sobre jugadores de pingpong
db.jugadores.insertMany([
  {
    nombre: "Ma Long",
    apodo: "The Dictator",
    categoria: "Avanzado",
    activo: true,
    estadisticas: {
      partidos_jugados: 120,
      partidos_ganados: 110,
      torneos_ganados: 25
    },
    equipamiento: {
      paleta: "DHS Hurricane Long 5",
      goma_derecha: "Hurricane 3 Neo",
      goma_reves: "Tenergy 05"
    },
    etiquetas: ["zurdo", "topspin", "campus-elite"]
  },
  {
    nombre: "Fan Zhendong",
    apodo: "Little Fat",
    categoria: "Avanzado",
    activo: true,
    estadisticas: {
      partidos_jugados: 100,
      partidos_ganados: 88,
      torneos_ganados: 18
    },
    equipamiento: {
      paleta: "Viscaria ALC",
      goma_derecha: "Dignics 09C",
      goma_reves: "Dignics 05"
    },
    etiquetas: ["diestro", "potencia", "campus-elite"]
  },
  {
    nombre: "Timo Boll",
    apodo: "The Legend",
    categoria: "Avanzado",
    activo: false,
    estadisticas: {
      partidos_jugados: 150,
      partidos_ganados: 120,
      torneos_ganados: 30
    },
    equipamiento: {
      paleta: "Timo Boll ALC",
      goma_derecha: "Dignics 09C",
      goma_reves: "Dignics 09C"
    },
    etiquetas: ["zurdo", "control", "veterano"]
  },
  {
    nombre: "Adriana Díaz",
    apodo: "La Pequeña",
    categoria: "Intermedio",
    activo: true,
    estadisticas: {
      partidos_jugados: 80,
      partidos_ganados: 62,
      torneos_ganados: 10
    },
    equipamiento: {
      paleta: "Zhang Jike ALC",
      goma_derecha: "Tenergy 64",
      goma_reves: "Tenergy 05"
    },
    etiquetas: ["diestro", "velocidad", "promesa"]
  },
  {
    nombre: "Hugo Calderano",
    apodo: "The Thrill",
    categoria: "Intermedio",
    activo: true,
    estadisticas: {
      partidos_jugados: 95,
      partidos_ganados: 70,
      torneos_ganados: 12
    },
    equipamiento: {
      paleta: "Cornilleau Target",
      goma_derecha: "Target Pro GT",
      goma_reves: "Target Pro GT"
    },
    etiquetas: ["diestro", "potencia", "campus-elite"]
  }
])

// Crear índices para optimizar búsquedas por categoría y etiquetas
db.jugadores.createIndex({ nombre: 1 })
db.jugadores.createIndex({ categoria: 1, activo: 1 })
db.jugadores.createIndex({ etiquetas: 1 })