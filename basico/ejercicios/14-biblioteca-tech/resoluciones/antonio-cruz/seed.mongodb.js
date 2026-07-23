// Base de datos del ejercicio.
use("campus_biblioteca_tech")

// Limpiamos la colección para evitar registros duplicados
// cuando el script se vuelva a ejecutar.
db.libros.deleteMany({})

// Cada documento representa un libro del catálogo.
// Se utiliza una única colección porque toda la información
// pertenece directamente al libro.

db.libros.insertMany([
{
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    categoria: "Programación",
    anio: 2008,
    disponible: true
},
{
    titulo: "Designing Data-Intensive Applications",
    autor: "Martin Kleppmann",
    categoria: "Bases de Datos",
    anio: 2017,
    disponible: true
},
{
    titulo: "The Pragmatic Programmer",
    autor: "Andrew Hunt",
    categoria: "Desarrollo",
    anio: 1999,
    disponible: false
},
{
    titulo: "JavaScript: The Good Parts",
    autor: "Douglas Crockford",
    categoria: "JavaScript",
    anio: 2008,
    disponible: true
},
{
    titulo: "MongoDB: The Definitive Guide",
    autor: "Shannon Bradshaw",
    categoria: "Bases de Datos",
    anio: 2020,
    disponible: true
}
])

// Índice pensado para búsquedas por categoría.
db.libros.createIndex({
    categoria: 1
});