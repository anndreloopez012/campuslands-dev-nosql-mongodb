use('campus_peliculas_terror');

// 1. Obtiene películas con rating IMDb mayor o igual a 7.5 mostrando solo título y clasificación.
db.peliculas.find(
  { "clasificacion.rating_imdb": { $gte: 7.5 }, activa: true },
  { titulo: 1, director: 1, "clasificacion.rating_imdb": 1, _id: 0 }
);

// 2. Busca películas que pertenezcan al subgénero "monstruos".
db.peliculas.find(
  { subgeneros: "monstruos" },
  { titulo: 1, director: 1, subgeneros: 1, _id: 0 }
);

// 3. Actualiza la nota/rating IMDb de la película "Hereditary" y marcarla como verificada.
db.peliculas.updateOne(
  { titulo: "Hereditary" },
  {
    $inc: { "clasificacion.rating_imdb": 0.2 },
    $set: { "clasificacion.revisado": true }
  }
);

// 4. Obtiene la cantidad de películas clasificadas como categoría "R".
db.peliculas.countDocuments({ "clasificacion.clasificacion_edad": "R" });