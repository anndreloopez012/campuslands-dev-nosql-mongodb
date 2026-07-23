// Base de datos del ejercicio.
use("campus_sci_fi_sagas")

// Se eliminan los datos existentes para que el script
// pueda ejecutarse varias veces sin duplicar información.
db.sagas.deleteMany({})
db.peliculas.deleteMany({})

// Primero registramos las sagas.
// Cada una tendrá un código que luego será utilizado
// como referencia manual desde la colección de películas.

db.sagas.insertMany([
{
    codigo: "SG001",
    nombre: "Star Wars",
    creador: "George Lucas",
    universo: "Galáctico"
},
{
    codigo: "SG002",
    nombre: "Dune",
    creador: "Frank Herbert",
    universo: "Arrakis"
},
{
    codigo: "SG003",
    nombre: "Alien",
    creador: "Dan O'Bannon",
    universo: "Xenomorfos"
}
])

// Las películas almacenan únicamente el código de la saga.
// Es un ejemplo sencillo de referencia manual.

db.peliculas.insertMany([
{
    titulo: "Star Wars: A New Hope",
    anio: 1977,
    rating: 8.6,
    sagaCodigo: "SG001"
},
{
    titulo: "The Empire Strikes Back",
    anio: 1980,
    rating: 8.7,
    sagaCodigo: "SG001"
},
{
    titulo: "Dune",
    anio: 2021,
    rating: 8.0,
    sagaCodigo: "SG002"
},
{
    titulo: "Alien",
    anio: 1979,
    rating: 8.5,
    sagaCodigo: "SG003"
},
{
    titulo: "Aliens",
    anio: 1986,
    rating: 8.4,
    sagaCodigo: "SG003"
}
])

// Índice para localizar rápidamente las películas
// pertenecientes a una saga.
db.peliculas.createIndex({
    sagaCodigo: 1
});