// Sagas de ciencia ficción 
// Solución de Denise López - Ejercicio 13

use campus_sci_fi_sagas

// Crear las colecciones principales en minúsculas y plural
db.createCollection("sagas")
db.createCollection("peliculas")

// IDs fijos para establecer las referencias manuales
const sagaStarWarsId = new ObjectId("60c72b2f9b1d8b2b8c8b4561")
const sagaMCUId = new ObjectId("60c72b2f9b1d8b2b8c8b4562")
const sagaAvatarId = new ObjectId("60c72b2f9b1d8b2b8c8b4563")

// 1. Insertar las sagas más populares del cine de ciencia ficción
db.sagas.insertMany([
  {
    _id: sagaStarWarsId,
    nombre: "Star Wars",
    creador: "George Lucas",
    universo: "Galaxia Lejana",
    activa: true,
    total_entregas: 9
  },
  {
    _id: sagaMCUId,
    nombre: "Marvel Cinematic Universe (Avengers)",
    creador: "Kevin Feige",
    universo: "Universo Marvel",
    activa: true,
    total_entregas: 33
  },
  {
    _id: sagaAvatarId,
    nombre: "Avatar",
    creador: "James Cameron",
    universo: "Pandora",
    activa: true,
    total_entregas: 3
  }
])

// 2. Insertar las películas populares referenciando el saga_id de su franquicia
db.peliculas.insertMany([
  {
    titulo: "Star Wars: Episode IV - A New Hope",
    estreno: 1977,
    director: "George Lucas",
    recaudacion_m_usd: 775,
    saga_id: sagaStarWarsId,
    personajes_clave: ["Luke Skywalker", "Darth Vader", "Leia Organa"]
  },
  {
    titulo: "Star Wars: Episode V - The Empire Strikes Back",
    estreno: 1980,
    director: "Irvin Kershner",
    recaudacion_m_usd: 538,
    saga_id: sagaStarWarsId,
    personajes_clave: ["Luke Skywalker", "Yoda", "Darth Vader"]
  },
  {
    titulo: "Avengers: Endgame",
    estreno: 2019,
    director: "Anthony y Joe Russo",
    recaudacion_m_usd: 2798,
    saga_id: sagaMCUId,
    personajes_clave: ["Iron Man", "Captain America", "Thanos"]
  },
  {
    titulo: "Avengers: Infinity War",
    estreno: 2018,
    director: "Anthony y Joe Russo",
    recaudacion_m_usd: 2048,
    saga_id: sagaMCUId,
    personajes_clave: ["Thor", "Iron Man", "Thanos"]
  },
  {
    titulo: "Avatar",
    estreno: 2009,
    director: "James Cameron",
    recaudacion_m_usd: 2923,
    saga_id: sagaAvatarId,
    personajes_clave: ["Jake Sully", "Neytiri", "Colonel Quaritch"]
  }
])

// Índices para optimizar búsquedas por nombre de saga y por referencia saga_id
db.sagas.createIndex({ nombre: 1 })
db.peliculas.createIndex({ saga_id: 1 })
db.peliculas.createIndex({ titulo: 1 })