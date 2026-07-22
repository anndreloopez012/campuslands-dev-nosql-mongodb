// Base de datos del ejercicio.
use("campus_personajes_rpg")

// limpiamos la colección para evitar registros duplicados
db.personajes.deleteMany({})

// en un RPG normalmente el equipo y los atributos siempre viajan junto al personaje, haci que por eso modelan como subdocumentos.

db.personajes.insertMany([
    {
        nombre: "Aldric",
        clase: "Guerrero",
        nivel: 42,

        atributos: {
            fuerza: 95,
            defensa: 88,
            magia: 29,
            velocidad: 54
        },
        equipo: {
            arma: "Epada del Dragón",
            armadura: "Armadura Real",
            accesorio: "Anillo de Vida"
        },
        activo: true
    },
    {
        nombre: "Lyra",
        clase: "Maga",
        nivel: 38,

        atributos: {
            fuerza: 12,
            defensa: 23,
            magia: 98,
            velocidad: 45
        },
        equipo: {
            arma: "Bastón de Cristal Arcano",
            armadura: "Toga de Teñidor de Almas",
            accesorio: "Anillo de Vida"
        },
        activo: true
    },
    {
        nombre: "Kael",
        clase: "Arquero",
        nivel: 34,
        atributos: {
            fuerza: 62,
            defensa: 45,
            magia: 28,
            velocidad: 96
        },
        equipo: {
            arma: "Arco Elfico",
            armadura: "Armadura ligera",
            accesorio: "Botas de viento"
        },
        activo: true
    },
    {
    nombre: "Darius",
    clase: "Paladín",
    nivel: 46,

    atributos: {
        fuerza: 88,
        defensa: 96,
        magia: 52,
        velocidad: 40
    },

    equipo: {
        arma: "Martillo Sagrado",
        armadura: "Escudo Divino",
        accesorio: "Cruz Sagrada"
    },

    activo: true
},
{
    nombre: "Selene",
    clase: "Asesina",
    nivel: 40,

    atributos: {
        fuerza: 78,
        defensa: 44,
        magia: 30,
        velocidad: 99
    },

    equipo: {
        arma: "Dagas Gemelas",
        armadura: "Traje Sombrío",
        accesorio: "Capa Nocturna"
    },

    activo: false
}
]);