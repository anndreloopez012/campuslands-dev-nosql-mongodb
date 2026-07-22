// Seleccionar/Crear la base de datos del ejercicio
use('campus_sci_fi_sagas');


// 1. Insertar Sagas de Ciencia Ficción (Entregas embebidas)
db.sagas.insertMany([
  {
    _id: ObjectId("65001"),
    nombre: "Dune",
    creador: "Frank Herbert",
    genero: "Ciencia Ficción Épica",
    activa: true,
    entregas: [
      { titulo: "Dune", anio: 1965, tipo: "Libro" },
      { titulo: "Dune: Parte 1", anio: 2021, tipo: "Película" },
      { titulo: "Dune: Parte 2", anio: 2024, tipo: "Película" }
    ],
    puntuacion_promedio: 9.2
  },
  {
    _id: ObjectId("65002"),
    nombre: "Star Wars",
    creador: "George Lucas",
    genero: "Space Opera",
    activa: true,
    entregas: [
      { titulo: "Una Nueva Esperanza", anio: 1977, tipo: "Película" },
      { titulo: "El Imperio Contraataca", anio: 1980, tipo: "Película" }
    ],
    puntuacion_promedio: 8.8
  },
  {
    _id: ObjectId("65003"),
    nombre: "Matrix",
    creador: "Hermanas Wachowski",
    genero: "Cyberpunk",
    activa: false,
    entregas: [
      { titulo: "The Matrix", anio: 1999, tipo: "Película" },
      { titulo: "Matrix Reloaded", anio: 2003, tipo: "Película" }
    ],
    puntuacion_promedio: 8.5
  }
]);

// 2. Insertar Personajes de Ciencia Ficción usando REFERENCIAS MANUALES (saga_id)
db.personajes.insertMany([
  {
    nombre: "Paul Atreides",
    rol: "Protagonista / Muad'Dib",
    especie: "Humano",
    saga_id: ObjectId("65001"), // Referencia a Dune
    habilidades: ["Voz", "Presciencia", "Combate"]
  },
  {
    nombre: "Chani Kynes",
    rol: "Guerrera Fremen",
    especie: "Humana",
    saga_id: ObjectId("65001"), // Referencia a Dune
    habilidades: ["Supervivencia", "Combate Fremen"]
  },
  {
    nombre: "Luke Skywalker",
    rol: "Caballero Jedi",
    especie: "Humano",
    saga_id: ObjectId("65002"), // Referencia a Star Wars
    habilidades: ["La Fuerza", "Pilotaje"]
  },
  {
    nombre: "Darth Vader",
    rol: "Lord Sith",
    especie: "Humano / Cyborg",
    saga_id: ObjectId("65002"), // Referencia a Star Wars
    habilidades: ["Lado Oscuro", "Sable de Luz"]
  },
  {
    nombre: "Neo",
    rol: "El Elegido",
    especie: "Humano",
    saga_id: ObjectId("65003"), // Referencia a Matrix
    habilidades: ["Alteración del Código", "Artes Marciales"]
  }
]);