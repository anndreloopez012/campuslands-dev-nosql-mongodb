// Base de datos del ejercicio.
use("campus_liga_futbol")

// Limpiamos la colección para evitar duplicados
// si el script se ejecuta nuevamente.
db.equipos.deleteMany({})

// Cada documento representa un equipo.
// Se guardan únicamente los datos necesarios para
// realizar consultas de proyección y ordenamiento.

db.equipos.insertMany([
{
    nombre: "Tigres Campus",
    ciudad: "Guatemala",
    partidos: 12,
    puntos: 28,
    golesFavor: 25,
    golesContra: 10,
    activo: true
},
{
    nombre: "Leones FC",
    ciudad: "Antigua",
    partidos: 12,
    puntos: 21,
    golesFavor: 19,
    golesContra: 14,
    activo: true
},
{
    nombre: "Halcones United",
    ciudad: "Quetzaltenango",
    partidos: 12,
    puntos: 30,
    golesFavor: 29,
    golesContra: 9,
    activo: true
},
{
    nombre: "Águilas FC",
    ciudad: "Escuintla",
    partidos: 12,
    puntos: 18,
    golesFavor: 15,
    golesContra: 18,
    activo: true
},
{
    nombre: "Toros Club",
    ciudad: "Cobán",
    partidos: 12,
    puntos: 24,
    golesFavor: 22,
    golesContra: 13,
    activo: false
}
])

// Índice pensado para consultas por cantidad de puntos.
db.equipos.createIndex({
    puntos: -1
})