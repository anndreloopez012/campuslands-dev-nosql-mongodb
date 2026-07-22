//seed.mongodb.js

// Cambiamos a la base del ejercicio.
// Si ya existe simplemente la reutiliza.
use("campus_colecciones_gamers")

// Por comodidad limpiamos la colección.
// Así el script se puede ejecutar varias veces sin duplicar datos.
db.perfiles.deleteMany({})

// En este caso decidi embeber estadisticas, armas y configuracion.
// Todo ese contenido normalmente siempre se consulta junto al perfil
// del jugador, asi que evita hacer búsquedas adicionales.

db.perfiles.insertMany([
{
    nickname: "ShadowX",
    nivel: 87,
    rango: "Diamante",
    pais: "Guatemala",

    estadisticas: {
        partidas: 1450,
        victorias: 612,
        bajas: 4897,
        precision: 42.8
    },

    armasFavoritas: [
        "AK-47",
        "M4A1",
        "AWP"
    ],

    configuracion: {
        sensibilidad: 1.6,
        dpi: 800
    },

    online: true
},
{
    nickname: "GhostHunter",
    nivel: 64,
    rango: "Platino",
    pais: "México",

    estadisticas: {
        partidas: 980,
        victorias: 388,
        bajas: 3210,
        precision: 39.2
    },

    armasFavoritas: [
        "MP5",
        "AK-47"
    ],

    configuracion: {
        sensibilidad: 1.8,
        dpi: 1200
    },

    online: false
},
{
    nickname: "Nova",
    nivel: 91,
    rango: "Maestro",
    pais: "Colombia",

    estadisticas: {
        partidas: 1720,
        victorias: 845,
        bajas: 6201,
        precision: 47.5
    },

    armasFavoritas: [
        "AWP",
        "Desert Eagle"
    ],

    configuracion: {
        sensibilidad: 1.4,
        dpi: 800
    },

    online: true
},
{
    nickname: "Falcon",
    nivel: 52,
    rango: "Oro",
    pais: "Perú",

    estadisticas: {
        partidas: 760,
        victorias: 270,
        bajas: 2144,
        precision: 35.7
    },

    armasFavoritas: [
        "UMP45",
        "M4A1"
    ],

    configuracion: {
        sensibilidad: 2.0,
        dpi: 1600
    },

    online: false
},
{
    nickname: "Reaper",
    nivel: 73,
    rango: "Diamante",
    pais: "Argentina",

    estadisticas: {
        partidas: 1265,
        victorias: 540,
        bajas: 4512,
        precision: 44.3
    },

    armasFavoritas: [
        "AK-47",
        "Desert Eagle"
    ],

    configuracion: {
        sensibilidad: 1.5,
        dpi: 1000
    },

    online: true
}]);

// Un índice sencillo sobre rango.
// Si después el juego empieza a filtrar rankings por rango,
// Mongo evita recorrer toda la colección.
db.perfiles.createIndex({
    rango: 1
});