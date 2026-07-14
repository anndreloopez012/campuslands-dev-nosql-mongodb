// 12. Catalogo de peliculas de miedo
// Solucion - jeshua-perez (nivel basico)
// Enfoque: filtros por texto y rating

use campus_peliculas_terror

db.peliculas.drop()

db.createCollection("peliculas")

db.peliculas.insertMany([
  { titulo: "La Casa del Silencio", anio: 2019, director: "Marcos Villalba", rating: 7.8, subgenero: "Casa embrujada" },
  { titulo: "El Ultimo Grito", anio: 2021, director: "Elena Restrepo", rating: 6.4, subgenero: "Slasher" },
  { titulo: "Sombras del Pantano", anio: 2018, director: "Marcos Villalba", rating: 8.1, subgenero: "Criatura" },
  { titulo: "Noche sin Luna", anio: 2022, director: "Carla Jimenez", rating: 5.9, subgenero: "Slasher" },
  { titulo: "El Sotano", anio: 2020, director: "Elena Restrepo", rating: 7.2, subgenero: "Casa embrujada" },
  { titulo: "Posesion Final", anio: 2023, director: "Carla Jimenez", rating: 8.5, subgenero: "Posesion" }
])
