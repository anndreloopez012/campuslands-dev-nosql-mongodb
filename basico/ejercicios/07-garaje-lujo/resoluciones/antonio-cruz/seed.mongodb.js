// Base de datos del ejercicio.
use("campus_garaje_lujo")

// Limpiamos la colección para evitar registros duplicados
// cuando el script se ejecute nuevamente.
db.autos.deleteMany({})

// Cada documento representa un vehículo del garaje.
// Se utiliza un modelo simple porque el ejercicio está
// orientado a consultas con filtros numéricos.

db.autos.insertMany([
{
    marca: "Ferrari",
    modelo: "SF90 Stradale",
    anio: 2023,
    precio: 450000,
    caballos: 986,
    disponible: true
},
{
    marca: "Lamborghini",
    modelo: "Huracán EVO",
    anio: 2022,
    precio: 320000,
    caballos: 631,
    disponible: true
},
{
    marca: "Porsche",
    modelo: "911 Turbo S",
    anio: 2024,
    precio: 240000,
    caballos: 640,
    disponible: false
},
{
    marca: "McLaren",
    modelo: "720S",
    anio: 2023,
    precio: 305000,
    caballos: 710,
    disponible: true
},
{
    marca: "Aston Martin",
    modelo: "DB12",
    anio: 2024,
    precio: 265000,
    caballos: 671,
    disponible: false
}
])

// Índice útil para búsquedas por precio.
db.autos.createIndex({
    precio: 1
})