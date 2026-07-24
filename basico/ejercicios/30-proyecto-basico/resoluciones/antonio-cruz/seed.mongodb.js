// Base de datos del ejercicio
use("campus_proyecto_basico");

// Reinicio la colección para mantener una carga limpia y repetible
db.videojuegos.drop();

// Cada documento representa un videojuego registrado dentro del campus.
// Los datos del juego, categoría y jugadores se mantienen juntos porque
// pertenecen al mismo contexto y se consultan normalmente en conjunto.

db.videojuegos.insertMany([
  {
    titulo: "Campus Warriors",
    genero: "accion",
    plataforma: "PC",
    desarrollador: "Campus Games",
    jugadores: 120,
    precio: 350,
    estado: "activo"
  },
  {
    titulo: "Pixel Adventure",
    genero: "aventura",
    plataforma: "Nintendo Switch",
    desarrollador: "Pixel Studio",
    jugadores: 80,
    precio: 250,
    estado: "activo"
  },
  {
    titulo: "Cyber Arena",
    genero: "competitivo",
    plataforma: "PC",
    desarrollador: "Tech Labs",
    jugadores: 200,
    precio: 500,
    estado: "activo"
  },
  {
    titulo: "Campus Racing",
    genero: "carreras",
    plataforma: "PlayStation",
    desarrollador: "Campus Games",
    jugadores: 60,
    precio: 300,
    estado: "mantenimiento"
  },
  {
    titulo: "Fantasy Quest",
    genero: "rol",
    plataforma: "PC",
    desarrollador: "Adventure Studio",
    jugadores: 150,
    precio: 450,
    estado: "activo"
  }
]);