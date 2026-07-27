// Base de Datos de Películas de Miedo - Consultas Nativas de Búsqueda y Rating
use('terror_db');

// =============================================================================
// CONSULTA 1: Búsqueda por Texto Libre ($text) ordenado por Relevancia (Text Score)
// Busca películas que contengan palabras como "demonio", "psicológico" o "culto".
// =============================================================================
db.peliculas.find(
  {
    $text: { $search: "demonio culto" }
  },
  {
    titulo: 1,
    sinopsis: 1,
    puntuacionTexto: { $meta: "textScore" }
  }
).sort({
  puntuacionTexto: { $meta: "textScore" }
});


// =============================================================================
// CONSULTA 2: Filtro Estricto por Ratings Numéricos Múltiples (IMDb y Rotten Tomatoes)
// Obtiene películas aclamadas por la crítica: IMDb >= 7.5 Y Rotten Tomatoes >= 85
// =============================================================================
db.peliculas.find(
  {
    "calificaciones.imdb": { $gte: 7.5 },
    "calificaciones.rottenTomatoes": { $gte: 85 }
  },
  {
    titulo: 1,
    añoEstreno: 1,
    subgeneros: 1,
    "calificaciones.imdb": 1,
    "calificaciones.rottenTomatoes": 1
  }
).sort({ "calificaciones.imdb": -1 });


// =============================================================================
// CONSULTA 3: Búsqueda por Expresión Regular (Regex) Insensible a Mayúsculas
// Encuentra películas cuya sinopsis o título hable de "familia" o "secretos".
// =============================================================================
db.peliculas.find(
  {
    $or: [
      { titulo: { $regex: /familia|secretos/i } },
      { sinopsis: { $regex: /familia|secretos/i } }
    ]
  },
  {
    titulo: 1,
    sinopsis: 1,
    "calificaciones.imdb": 1
  }
);


// =============================================================================
// CONSULTA 4: Agregación Analítica - Calificación Promedio y Recaudación por Subgénero
// Desglosa los subgéneros, calcula el rating promedio de IMDb y la recaudación total.
// =============================================================================
db.peliculas.aggregate([
  {
    $unwind: "$subgeneros"
  },
  {
    $group: {
      _id: "$subgeneros",
      totalPeliculas: { $sum: 1 },
      promedioImdb: { $avg: "$calificaciones.imdb" },
      recaudacionTotalUSD: { $sum: "$recaudacionUSD" }
    }
  },
  {
    $match: {
      promedioImdb: { $gte: 7.0 }
    }
  },
  {
    $project: {
      _id: 0,
      subgenero: "$_id",
      totalPeliculas: 1,
      promedioImdb: { $round: ["$promedioImdb", 2] },
      recaudacionTotalUSD: 1
    }
  },
  { $sort: { promedioImdb: -1 } }
]);


// =============================================================================
// CONSULTA 5: Agregación con $lookup - Cruce de Películas de Alto Rating con su Director
// Filtra películas con Rotten Tomatoes >= 85 y une la información completa del director.
// =============================================================================
db.peliculas.aggregate([
  {
    $match: {
      "calificaciones.rottenTomatoes": { $gte: 85 }
    }
  },
  {
    $lookup: {
      from: "directores",
      localField: "directorId",
      foreignField: "_id",
      as: "director"
    }
  },
  {
    $unwind: "$director"
  },
  {
    $project: {
      _id: 0,
      pelicula: "$titulo",
      año: "$añoEstreno",
      director: "$director.nombre",
      estiloDirector: "$director.estiloPrincipal",
      rottenTomatoesScore: "$calificaciones.rottenTomatoes",
      imdbScore: "$calificaciones.imdb"
    }
  },
  { $sort: { rottenTomatoesScore: -1 } }
]);
