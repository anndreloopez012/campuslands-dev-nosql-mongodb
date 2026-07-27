// Base de Datos de Música - Consultas Nativas de Búsqueda y Agregación
use('musica_db');

// =============================================================================
// CONSULTA 1: Búsqueda en Array Simple con $all
// Obtiene artistas que tengan simultáneamente los géneros "Rock en Español" y "Post-Punk"
// =============================================================================
db.artistas.find(
  {
    generos: { $all: ["Rock en Español", "Post-Punk"] }
  },
  {
    nombre: 1,
    paisOrigen: 1,
    generos: 1,
    oyentesMensuales: 1
  }
).sort({ oyentesMensuales: -1 });


// =============================================================================
// CONSULTA 2: Conteo directo usando $in en Array Simple
// Cuenta cuántos álbumes están distribuidos en "MEX" o "ESP"
// =============================================================================
db.albumes.countDocuments({
  paisesDistribucion: { $in: ["MEX", "ESP"] }
});


// =============================================================================
// CONSULTA 3: Evaluación de Tamaño de Array Simple con $size y $elemMatch
// Encuentra listas de reproducción públicas con exactamente 4 etiquetas y que contengan "90s"
// =============================================================================
db.listasReproduccion.find(
  {
    publica: true,
    etiquetas: { $size: 4, $in: ["90s"] }
  },
  {
    nombre: 1,
    creador: 1,
    seguidores: 1,
    etiquetas: 1
  }
);


// =============================================================================
// CONSULTA 4: Agregación con $unwind en Array Simple
// Descompone el array simple de "generos" para contar el total de artistas por género
// =============================================================================
db.artistas.aggregate([
  {
    $unwind: "$generos"
  },
  {
    $group: {
      _id: "$generos",
      totalArtistas: { $sum: 1 },
      promedioOyentes: { $avg: "$oyentesMensuales" }
    }
  },
  {
    $project: {
      _id: 0,
      genero: "$_id",
      totalArtistas: 1,
      promedioOyentes: { $round: ["$promedioOyentes", 0] }
    }
  },
  { $sort: { totalArtistas: -1, promedioOyentes: -1 } }
]);


// =============================================================================
// CONSULTA 5: Agregación con $lookup sobre Array Simple de Referencias
// Cruza las listas de reproducción con la colección de álbumes usando un array simple de IDs
// =============================================================================
db.listasReproduccion.aggregate([
  {
    $match: { publica: true }
  },
  {
    $lookup: {
      from: "albumes",
      localField: "albumesIncluidosIds",
      foreignField: "_id",
      as: "detalleAlbumes"
    }
  },
  {
    $project: {
      _id: 0,
      nombreLista: "$nombre",
      creador: 1,
      totalAlbumes: { $size: "$albumesIncluidosIds" },
      titulosAlbumes: "$detalleAlbumes.titulo",
      etiquetas: 1
    }
  },
  { $sort: { totalAlbumes: -1 } }
]);
