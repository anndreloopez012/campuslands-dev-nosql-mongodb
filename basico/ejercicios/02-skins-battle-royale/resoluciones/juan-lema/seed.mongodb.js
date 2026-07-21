// Ejercicio 02 - Catalogo de skins battle royale
// Autor: juan-lema

use campus_skins_battle_royale

db.createCollection("registros")

db.registros.insertMany([
  {
    nombre: "Fenix Carmesi",
    personaje: "Kael",
    juego: "Zona de Impacto",
    rareza: "Legendaria",
    precio: 1800,
    temporada: 7,
    disponible: true,
    etiquetas: ["fuego", "edicion-limitada", "alas"]
  },
  {
    nombre: "Sombra de Acero",
    personaje: "Nyra",
    juego: "Zona de Impacto",
    rareza: "Epica",
    precio: 1200,
    temporada: 7,
    disponible: true,
    etiquetas: ["nocturno", "sigilo"]
  },
  {
    nombre: "Guardian de Cristal",
    personaje: "Doran",
    juego: "Zona de Impacto",
    rareza: "Rara",
    precio: 650,
    temporada: 6,
    disponible: false,
    etiquetas: ["hielo", "defensivo"]
  },
  {
    nombre: "Vagabundo Oxidado",
    personaje: "Bram",
    juego: "Zona de Impacto",
    rareza: "Comun",
    precio: 250,
    temporada: 5,
    disponible: true,
    etiquetas: ["chatarra", "inicial"]
  },
  {
    nombre: "Espectro Neon",
    personaje: "Ilya",
    juego: "Zona de Impacto",
    rareza: "Epica",
    precio: 1150,
    temporada: 8,
    disponible: true,
    etiquetas: ["neon", "cyberpunk", "brillante"]
  },
  {
    nombre: "Reina del Abismo",
    personaje: "Morrigan",
    juego: "Zona de Impacto",
    rareza: "Legendaria",
    precio: 2000,
    temporada: 8,
    disponible: false,
    etiquetas: ["oscuridad", "corona", "edicion-limitada"]
  }
])

db.registros.find({})
