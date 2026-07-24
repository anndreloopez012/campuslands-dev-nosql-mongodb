// Base de datos del ejercicio.
use("campus_kickboxing_ranking")

// Dejamos la colección limpia para evitar duplicados
// cuando el archivo se vuelva a ejecutar.
db.peleadores.deleteMany({})

// Cada documento representa un peleador dentro del ranking.
// El modelo es plano porque todas las consultas se realizan
// directamente sobre los mismos atributos.

db.peleadores.insertMany([
{
    nombre: "Carlos Vega",
    categoria: "Peso Ligero",
    pais: "Guatemala",
    victorias: 18,
    derrotas: 2,
    ranking: 1,
    activo: true
},
{
    nombre: "Luis Romero",
    categoria: "Peso Welter",
    pais: "México",
    victorias: 14,
    derrotas: 5,
    ranking: 4,
    activo: true
},
{
    nombre: "Andrés Silva",
    categoria: "Peso Medio",
    pais: "Brasil",
    victorias: 20,
    derrotas: 1,
    ranking: 2,
    activo: false
},
{
    nombre: "Marco Torres",
    categoria: "Peso Ligero",
    pais: "Argentina",
    victorias: 11,
    derrotas: 6,
    ranking: 7,
    activo: true
},
{
    nombre: "David Cruz",
    categoria: "Peso Welter",
    pais: "Colombia",
    victorias: 16,
    derrotas: 3,
    ranking: 3,
    activo: true
}
])

// Este índice ayuda cuando se consulta el ranking oficial.
db.peleadores.createIndex({
    ranking: 1
})