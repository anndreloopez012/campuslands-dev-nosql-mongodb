// Catálogo de películas de miedo - Consultas y Operaciones
// Solución de Denise López - Ejercicio 12

use campus_peliculas_terror

// 1. Consulta general para listar todos los registros (requerido por la plantilla base)
db.peliculas.find({})

// 2. Filtro por Rating: Películas con calificación superior o igual a 8.0
db.peliculas.find(
  { rating: { $gte: 8.0 } },
  { titulo: 1, rating: 1, director: 1, _id: 0 }
)

// 3. Búsqueda por Texto utilizando el índice $text: Buscar el término "posesión" o "psiquiátrico"
db.peliculas.find(
  { $text: {$search: "posesión psiquiátrico" } },
  { titulo: 1, sinopsis: 1, rating: 1, _id: 0 }
)

// 4. Filtro combinado por Rating y Streaming: Mayor a 7.5 disponible en plataformas
db.peliculas.find(
  {
    rating: { $gt: 7.5 },
    "detalles.disponible_streaming": true
  },
  { titulo: 1, rating: 1, director: 1, _id: 0 }
)

// 5. Consulta sobre arrays de subgéneros: Películas catalogadas como "Slasher"
db.peliculas.find(
  { subgeneros: "Slasher" },
  { titulo: 1, director: 1, estreno: 1, _id: 0 }
)

// 6. Operación de actualización (Update): Ajustar el rating de "El Conjuro" tras reevaluación
db.peliculas.updateOne(
  { titulo: "El Conjuro" },
  {
    $set: { rating: 7.7 },$inc: { "detalles.duracion_min": 0 }
  }
)