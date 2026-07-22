// Catálogo de películas de miedo
// Solución de Denise López - Ejercicio 12

use campus_peliculas_terror

// Crear la colección principal en minúsculas y plural (sin drop previa)
db.createCollection("peliculas")

// Insertar 5 películas populares de terror con ratings, directores y subdocumentos
db.peliculas.insertMany([
  {
    titulo: "El Exorcista",
    titulo_original: "The Exorcist",
    estreno: 1973,
    clasificacion: "R",
    rating: 8.1,
    director: "William Friedkin",
    subgeneros: ["Terror Posesión", "Sobrenatural"],
    detalles: {
      duracion_min: 122,
      presupuesto_usd: 12000000,
      disponible_streaming: true
    },
    sinopsis: "Una niña de doce años es poseída por una entidad demoníaca y dos sacerdotes intentan salvarla."
  },
  {
    titulo: "El Conjuro",
    titulo_original: "The Conjuring",
    estreno: 2013,
    clasificacion: "R",
    rating: 7.5,
    director: "James Wan",
    subgeneros: ["Sobrenatural", "Casas Embrujadas"],
    detalles: {
      duracion_min: 112,
      presupuesto_usd: 20000000,
      disponible_streaming: true
    },
    sinopsis: "Investigadores paranormales acuden en ayuda de una familia aterrorizada por una presencia oscura."
  },
  {
    titulo: "El Resplandor",
    titulo_original: "The Shining",
    estreno: 1980,
    clasificacion: "R",
    rating: 8.4,
    director: "Stanley Kubrick",
    subgeneros: ["Terror Psicológico", "Misterio"],
    detalles: {
      duracion_min: 146,
      presupuesto_usd: 19000000,
      disponible_streaming: true
    },
    sinopsis: "Un escritor se traslada a un hotel aislado donde fuerzas oscuras influyen en su cordura."
  },
  {
    titulo: "Halloween",
    titulo_original: "Halloween",
    estreno: 1978,
    clasificacion: "R",
    rating: 7.7,
    director: "John Carpenter",
    subgeneros: ["Slasher"],
    detalles: {
      duracion_min: 91,
      presupuesto_usd: 325000,
      disponible_streaming: false
    },
    sinopsis: "Quince años después de asesinar a su hermana, Michael Myers escapa del psiquiátrico."
  },
  {
    titulo: "Scream",
    titulo_original: "Scream",
    estreno: 1996,
    clasificacion: "R",
    rating: 7.4,
    director: "Wes Craven",
    subgeneros: ["Slasher", "Misterio"],
    detalles: {
      duracion_min: 111,
      presupuesto_usd: 15000000,
      disponible_streaming: true
    },
    sinopsis: "Un asesino enmascarado conocido como Ghostface aterroriza a un grupo de estudiantes de secundaria."
  }
])

// Índices para búsquedas eficientes por rating, año e índice de texto en sinopsis/título
db.peliculas.createIndex({ titulo: 1 })
db.peliculas.createIndex({ rating: -1 })
db.peliculas.createIndex({ titulo: "text", sinopsis: "text" })