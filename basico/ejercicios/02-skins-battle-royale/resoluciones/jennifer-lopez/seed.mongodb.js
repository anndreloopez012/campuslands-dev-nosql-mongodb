// Catálogo de skins battle royale
// Solución de Denise López - Ejercicio 02

use campus_skins_battle_royale

// Crear la colección de forma explícita en minúsculas y plural
db.createCollection("skins")

// Insertar 5 documentos coherentes de skins con subdocumentos y arrays
db.skins.insertMany([
  {
    nombre: "Cuervo Legendario",
    rareza: "Legendario",
    precio_monedas: 2000,
    disponible: true,
    detalles: {
      temporada: 4,
      estilo: "Sombrío",
      puntos_popularidad: 95
    },
    estilos_desbloqueables: ["Sombra", "Tóxico", "Neón"],
    etiquetas: ["battle-pass", "exclusivo", "popular"]
  },
  {
    nombre: "Llama Galáctica",
    rareza: "Épico",
    precio_monedas: 1500,
    disponible: true,
    detalles: {
      temporada: 7,
      estilo: "Espacial",
      puntos_popularidad: 88
    },
    estilos_desbloqueables: ["Cósmico", "Supernova"],
    etiquetas: ["tienda", "animado"]
  },
  {
    nombre: "Infiltrado Táctico",
    rareza: "Raro",
    precio_monedas: 1200,
    disponible: true,
    detalles: {
      temporada: 2,
      estilo: "Camuflaje",
      puntos_popularidad: 60
    },
    estilos_desbloqueables: ["Urbano", "Desierto"],
    etiquetas: ["tienda", "militar"]
  },
  {
    nombre: "Espectro de Hielo",
    rareza: "Legendario",
    precio_monedas: 2000,
    disponible: false,
    detalles: {
      temporada: 5,
      estilo: "Congelado",
      puntos_popularidad: 92
    },
    estilos_desbloqueables: ["Ventisca", "Cero Absoluto"],
    etiquetas: ["evento-invierno", "exclusivo"]
  },
  {
    nombre: "Recluta Básico",
    rareza: "Común",
    precio_monedas: 0,
    disponible: true,
    detalles: {
      temporada: 1,
      estilo: "Estándar",
      puntos_popularidad: 20
    },
    estilos_desbloqueables: [],
    etiquetas: ["gratis", "inicial"]
  }
])

// Índices para optimizar búsquedas por nombre y por disponibilidad/rareza
db.skins.createIndex({ nombre: 1 })
db.skins.createIndex({ disponible: 1, rareza: 1 })