// 12. Catalogo de peliculas de miedo
// Consultas - jeshua-perez

use campus_peliculas_terror

// 1. Indice de texto sobre el titulo, para busquedas por palabra
db.peliculas.createIndex({ titulo: "text" })

// 2. Busqueda por texto en el titulo
db.peliculas.find({ $text: { $search: "Sotano" } })

// 3. Peliculas con rating mayor o igual a 7.5
db.peliculas.find(
  { rating: { $gte: 7.5 } },
  { titulo: 1, rating: 1, _id: 0 }
).sort({ rating: -1 })

// 4. Filtro por titulo usando expresion regular (coincidencia parcial sin indice de texto)
db.peliculas.find({ titulo: { $regex: "Noche", $options: "i" } })

// 5. Peliculas de un subgenero especifico con buen rating
db.peliculas.find({ subgenero: "Slasher", rating: { $gte: 6 } })

// 6. Actualizar el rating de una pelicula tras nuevas resenas
db.peliculas.updateOne(
  { titulo: "Noche sin Luna" },
  { $set: { rating: 6.3 } }
)
