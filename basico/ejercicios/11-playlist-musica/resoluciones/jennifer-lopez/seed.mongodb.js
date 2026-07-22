// Playlist por energia 
// Solución de Denise López - Ejercicio 11

use campus_playlist_musica

// Crear la colección en minúsculas y plural
db.createCollection("playlists")

// Insertar 5 playlists con arrays simples de canciones, géneros y niveles de energía
db.playlists.insertMany([
  {
    nombre: "Workout Workout Ultra",
    nivel_energia: "Alta",
    activo: true,
    me_gusta: 1250,
    generos: ["EDM", "Trap", "Electronic"],
    canciones: ["Till I Collapse", "Plan A", "Lucid Dreams", "Adrenalina"],
    etiquetas: ["gym", "cardio", "fuerza"]
  },
  {
    nombre: "Chill & Code",
    nivel_energia: "Baja",
    activo: true,
    me_gusta: 890,
    generos: ["Lo-Fi", "Ambient", "Chillhop"],
    canciones: ["Coffee & Beats", "Midnight Study", "Rainy Window", "Soft Keys"],
    etiquetas: ["estudio", "programacion", "focus"]
  },
  {
    nombre: "Latino Hype",
    nivel_energia: "Alta",
    activo: true,
    me_gusta: 2100,
    generos: ["Reggaeton", "Urban", "Latin Pop"],
    canciones: ["Adan y Eva", "Tal Vez", "Nena Maldicion", "Sin Señas"],
    etiquetas: ["fiesta", "entrenamiento", "latino"]
  },
  {
    nombre: "Focus Deep Work",
    nivel_energia: "Media",
    activo: true,
    me_gusta: 450,
    generos: ["Instrumental", "Classical Modern", "Ambient"],
    canciones: ["Experience", "Nuvole Bianche", "Time", "Flight"],
    etiquetas: ["concentracion", "trabajo", "lectura"]
  },
  {
    nombre: "Noche de Relax",
    nivel_energia: "Baja",
    activo: false,
    me_gusta: 320,
    generos: ["Acoustic", "Indie Folk"],
    canciones: ["Skinny Love", "Holocene", "Opaline"],
    etiquetas: ["descanso", "noche"]
  }
])

// Índices para optimizar búsquedas por nivel de energía, géneros y canciones
db.playlists.createIndex({ nombre: 1 })
db.playlists.createIndex({ nivel_energia: 1, activo: 1 })
db.playlists.createIndex({ canciones: 1 })
db.playlists.createIndex({ generos: 1 })