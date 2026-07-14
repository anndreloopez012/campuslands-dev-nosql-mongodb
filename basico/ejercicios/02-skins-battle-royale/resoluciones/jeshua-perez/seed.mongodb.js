// 02. Catalogo de skins battle royale
// Solucion - jeshua-perez (nivel basico)
// Enfoque: insertMany y documentos simples

use campus_skins_battle_royale

db.skins.drop()

db.createCollection("skins")

// Catalogo de skins de titulos battle royale, documentos simples y planos
db.skins.insertMany([
  {
    nombre: "Fenix Nocturno",
    juego: "Fortnite",
    rareza: "Legendaria",
    precio: 2000,
    temporada: 5,
    disponible: true
  },
  {
    nombre: "Camuflaje Urbano",
    juego: "Free Fire",
    rareza: "Comun",
    precio: 150,
    temporada: 12,
    disponible: true
  },
  {
    nombre: "Guardian de Cristal",
    juego: "Fortnite",
    rareza: "Epica",
    precio: 1500,
    temporada: 5,
    disponible: true
  },
  {
    nombre: "Dragon Carmesi",
    juego: "PUBG Mobile",
    rareza: "Mitica",
    precio: 3500,
    temporada: 3,
    disponible: false
  },
  {
    nombre: "Explorador del Desierto",
    juego: "Free Fire",
    rareza: "Rara",
    precio: 600,
    temporada: 12,
    disponible: true
  },
  {
    nombre: "Sombra Electrica",
    juego: "Apex Legends",
    rareza: "Epica",
    precio: 1800,
    temporada: 18,
    disponible: false
  }
])
