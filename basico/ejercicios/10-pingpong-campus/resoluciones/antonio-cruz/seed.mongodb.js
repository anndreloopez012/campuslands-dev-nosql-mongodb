// Base de datos del ejercicio.
use("campus_pingpong_campus")

// Se eliminan los registros existentes para que el seed
// pueda ejecutarse varias veces sin generar duplicados.
db.jugadores.deleteMany({})

// Cada documento representa un jugador inscrito en la liga.
// Se optó por un modelo simple ya que toda la información
// pertenece directamente al participante.

db.jugadores.insertMany([
{
    nombre: "Diego Morales",
    facultad: "Ingeniería",
    victorias: 12,
    derrotas: 3,
    categoria: "Avanzado",
    activo: true
},
{
    nombre: "Sofía Herrera",
    facultad: "Arquitectura",
    victorias: 9,
    derrotas: 5,
    categoria: "Intermedio",
    activo: true
},
{
    nombre: "Kevin López",
    facultad: "Ingeniería",
    victorias: 6,
    derrotas: 8,
    categoria: "Intermedio",
    activo: false
},
{
    nombre: "María Castillo",
    facultad: "Medicina",
    victorias: 14,
    derrotas: 2,
    categoria: "Avanzado",
    activo: true
},
{
    nombre: "Andrés Pérez",
    facultad: "Derecho",
    victorias: 4,
    derrotas: 10,
    categoria: "Principiante",
    activo: true
}
])

// Índice pensado para acelerar búsquedas por categoría.
db.jugadores.createIndex({
    categoria: 1
});