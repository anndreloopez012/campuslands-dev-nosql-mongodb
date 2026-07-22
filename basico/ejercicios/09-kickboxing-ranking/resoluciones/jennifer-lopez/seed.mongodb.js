// Ranking kickboxing
// Solución de Denise López - Ejercicio 09

use campus_kickboxing_ranking

// Crear la colección en minúsculas y plural
db.createCollection("peleadores")

// Insertar 5 peleadores con récord de combate, subdocumentos y arrays
db.peleadores.insertMany([
  {
    nombre: "Rico Verhoeven",
    apodo: "The King of Kickboxing",
    categoria_peso: "Pesado",
    activo: true,
    record: {
      victorias: 60,
      derrotas: 10,
      nocauts: 20
    },
    estilos: ["Dutch Kickboxing", "Muay Thai"],
    titulos: ["GLORY Heavyweight Champion"]
  },
  {
    nombre: "Giorgio Petrosyan",
    apodo: "The Doctor",
    categoria_peso: "Mediano",
    activo: true,
    record: {
      victorias: 105,
      derrotas: 3,
      nocauts: 42
    },
    estilos: ["Kickboxing", "Muay Thai"],
    titulos: ["K-1 World MAX Champion", "ONE Featherweight GP Winner"]
  },
  {
    nombre: "Badr Hari",
    apodo: "The Golden Boy",
    categoria_peso: "Pesado",
    activo: false,
    record: {
      victorias: 106,
      derrotas: 16,
      nocauts: 92
    },
    estilos: ["Dutch Kickboxing"],
    titulos: ["K-1 Heavyweight Champion"]
  },
  {
    nombre: "Superbon Singha Mawynn",
    apodo: "Superbon",
    categoria_peso: "Pluma",
    activo: true,
    record: {
      victorias: 114,
      derrotas: 36,
      nocauts: 28
    },
    estilos: ["Muay Thai", "Kickboxing"],
    titulos: ["ONE Featherweight Kickboxing Champion"]
  },
  {
    nombre: "Sitthichai Sitsongpeenong",
    apodo: "Killer Kid",
    categoria_peso: "Mediano",
    activo: true,
    record: {
      victorias: 128,
      derrotas: 33,
      nocauts: 39
    },
    estilos: ["Muay Thai"],
    titulos: ["GLORY Lightweight Champion"]
  }
])

// Índices para optimizar búsquedas por categoría y récords
db.peleadores.createIndex({ nombre: 1 })
db.peleadores.createIndex({ categoria_peso: 1, activo: 1 })
db.peleadores.createIndex({ "record.victorias": -1 })