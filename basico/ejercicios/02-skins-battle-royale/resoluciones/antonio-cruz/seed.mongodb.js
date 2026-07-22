// Base de datos del ejercicio.
use("campus_skins_battle_royale")

// Limpiamos la colección para evitar registros duplicados
// cuando el script se ejecuta más de una vez.
db.skins.deleteMany({})

// Para este caso basta con una sola colección.
// Cada skin es independiente, así que no hace falta usar referencias.

db.skins.insertMany([
{
    nombre: "Shadow Raven",
    rareza: "Legendaria",
    personaje: "Raven",
    temporada: 12,
    precio: 2000,
    disponible: true
},
{
    nombre: "Frozen Wolf",
    rareza: "Épica",
    personaje: "Hunter",
    temporada: 10,
    precio: 1500,
    disponible: true
},
{
    nombre: "Cyber Ninja",
    rareza: "Legendaria",
    personaje: "Kai",
    temporada: 15,
    precio: 2200,
    disponible: false
},
{
    nombre: "Desert Soldier",
    rareza: "Rara",
    personaje: "Nomad",
    temporada: 8,
    precio: 900,
    disponible: true
},
{
    nombre: "Golden Phantom",
    rareza: "Mítica",
    personaje: "Specter",
    temporada: 18,
    precio: 3000,
    disponible: false
}
])

// Índice pensado para consultas frecuentes por rareza.
db.skins.createIndex({
    rareza: 1
})