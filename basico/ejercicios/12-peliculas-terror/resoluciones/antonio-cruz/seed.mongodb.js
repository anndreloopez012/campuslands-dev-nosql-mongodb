// Base de datos del ejercicio.
use("campus_peliculas_terror")

// Se limpia la colección para que el script pueda
// ejecutarse todas las veces que sea necesario.
db.peliculas.deleteMany({})

// Cada documento representa una película.
// El modelo se mantiene simple porque todas las consultas
// se realizan directamente sobre los atributos del documento.

db.peliculas.insertMany([
{
    titulo: "La Maldición del Bosque",
    director: "James Carter",
    anio: 2021,
    genero: "Sobrenatural",
    rating: 8.7,
    disponible: true
},
{
    titulo: "Ecos en la Oscuridad",
    director: "Laura Smith",
    anio: 2019,
    genero: "Psicológico",
    rating: 7.9,
    disponible: true
},
{
    titulo: "El Último Ritual",
    director: "Miguel Torres",
    anio: 2023,
    genero: "Demonios",
    rating: 9.2,
    disponible: false
},
{
    titulo: "Casa Sin Salida",
    director: "Daniel Brown",
    anio: 2020,
    genero: "Slasher",
    rating: 7.5,
    disponible: true
},
{
    titulo: "Sombras del Ático",
    director: "Patricia Evans",
    anio: 2022,
    genero: "Sobrenatural",
    rating: 8.4,
    disponible: false
}
])

// Índice pensado para búsquedas por género.
db.peliculas.createIndex({
    genero: 1
});