// Base de datos del ejercicio.
use("campus_carreras_pilotos")

// Se limpia la colección para que el seed siempre genere
// exactamente los mismos datos.
db.pilotos.deleteMany({})

// Cada documento representa un piloto dentro del campeonato.
// Como el ejercicio es básico, toda la información se mantiene
// en un único documento para simplificar las consultas.

db.pilotos.insertMany([
{
    nombre: "Max Hunter",
    escuderia: "Velocity Racing",
    victorias: 8,
    puntos: 245,
    pais: "Países Bajos",
    activo: true
},
{
    nombre: "Lucas Ferrari",
    escuderia: "Solar GP",
    victorias: 5,
    puntos: 198,
    pais: "Italia",
    activo: true
},
{
    nombre: "Daniel Storm",
    escuderia: "Titan Motorsport",
    victorias: 6,
    puntos: 221,
    pais: "Reino Unido",
    activo: true
},
{
    nombre: "Mateo Cruz",
    escuderia: "Phoenix Team",
    victorias: 2,
    puntos: 142,
    pais: "España",
    activo: false
},
{
    nombre: "Alex Vega",
    escuderia: "Nova Racing",
    victorias: 4,
    puntos: 184,
    pais: "México",
    activo: true
}
])

// Índice pensado para consultas del ranking.
db.pilotos.createIndex({
    puntos: -1
});