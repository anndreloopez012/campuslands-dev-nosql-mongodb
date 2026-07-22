// Inventario de perfiles gamer 
// Solución de Denise López - Ejercicio 01

use campus_colecciones_gamers

// Limpiar la colección para garantizar un script repetible
db.gamers.drop()

// Crear la colección en plural y minúsculas con nombre descriptivo
db.createCollection("gamers")

// Insertar 5 documentos coherentes sobre el caso de uso
db.gamers.insertMany([
  {
    nombre: "Jeser",
    rango: "Inmortal",
    nivel: 88,
    activo: true,
    estadisticas: {
      partidas_ganadas: 340,
      partidas_perdidas: 110,
      precision: 82
    },
    armas: ["AWP", "Operator", "Ghost", "Karambit"]
  },
  {
    nombre: "GhostWalker",
    rango: "Diamante",
    nivel: 42,
    activo: true,
    estadisticas: {
      partidas_ganadas: 120,
      partidas_perdidas: 45,
      precision: 68
    },
    armas: ["M4A1-S", "Desert Eagle", "Cuchillo Mariposa"]
  },
  {
    nombre: "SilverFox",
    rango: "Oro",
    nivel: 15,
    activo: false,
    estadisticas: {
      partidas_ganadas: 22,
      partidas_perdidas: 30,
      precision: 45
    },
    armas: ["AK-47", "Glock-18"]
  },
  {
    nombre: "Mathieu",
    rango: "Platino",
    nivel: 54,
    activo: true,
    estadisticas: {
      partidas_ganadas: 195,
      partidas_perdidas: 110,
      precision: 55
    },
    armas: ["Spectre", "Vandal", "Sheriff"]
  },
  {
    nombre: "Tyson",
    rango: "Bronce",
    nivel: 8,
    activo: true,
    estadisticas: {
      partidas_ganadas: 3,
      partidas_perdidas: 12,
      precision: 31
    },
    armas: ["Bucky", "Frenzy"]
  }
])

// Creación de índices optimizadores
db.gamers.createIndex({ nombre: 1 })
db.gamers.createIndex({ activo: 1, rango: 1 })