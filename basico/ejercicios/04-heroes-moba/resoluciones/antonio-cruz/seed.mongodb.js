// Base de datos del ejercicio
use('campus_heroes_moba');

// Limpiamos la colección para evitar registros duplicados
// cuando el script se ejecuta más de una vez.
db.heroes.deleteMany({});

// En este ejercicio cada heroe es un documento independiente
// el enfoque esta en filtros simples, asi que el modelo se mantiene plano.

db.heroes.insertMany([
{
    nombre: "Aether",
    rol: "Tirador",
    dificultad: "Media",
    ataque: 91,
    defensa: 42,
    disponible: true
},
{
    nombre: "Valeria",
    rol: "Mago",
    dificultad: "Alta",
    ataque: 95,
    defensa: 35,
    disponible: true
},
{
    nombre: "Brakus",
    rol: "Tanque",
    dificultad: "Baja",
    ataque: 58,
    defensa: 97,
    disponible: true
},
{
    nombre: "Nyx",
    rol: "Asesino",
    dificultad: "Alta",
    ataque: 98,
    defensa: 28,
    disponible: false
},
{
    nombre: "Eldor",
    rol: "Soporte",
    dificultad: "Media",
    ataque: 44,
    defensa: 82,
    disponible: true
}
])

// Índice pensado para búsquedas frecuentes por rol.
db.heroes.createIndex({
    rol: 1
});

