// Base de datos del ejercicio
use("campus_usuarios_streaming");

// Limpio la colección para poder ejecutar nuevamente la carga inicial
db.usuarios.drop();

// Cada documento representa un usuario completo del servicio streaming.
// Las preferencias y listas se mantienen embebidas porque pertenecen únicamente
// al usuario y se consultan junto con su perfil.

db.usuarios.insertMany([
  {
    nombre: "Carlos Méndez",
    correo: "carlos@email.com",
    plan: "premium",
    fechaRegistro: ISODate("2026-01-15"),
    preferencias: {
      generoPeliculas: ["accion", "ciencia ficcion"],
      generoMusica: ["rock", "metal"]
    },
    favoritos: ["Interstellar", "Metallica"],
    estado: "activo"
  },
  {
    nombre: "Andrea López",
    correo: "andrea@email.com",
    plan: "basico",
    fechaRegistro: ISODate("2026-02-10"),
    preferencias: {
      generoPeliculas: ["drama", "romance"],
      generoMusica: ["pop"]
    },
    favoritos: ["Titanic", "Taylor Swift"],
    estado: "activo"
  },
  {
    nombre: "Kevin Morales",
    correo: "kevin@email.com",
    plan: "premium",
    fechaRegistro: ISODate("2026-03-05"),
    preferencias: {
      generoPeliculas: ["terror", "accion"],
      generoMusica: ["electronica"]
    },
    favoritos: ["The Conjuring", "Daft Punk"],
    estado: "activo"
  },
  {
    nombre: "María García",
    correo: "maria@email.com",
    plan: "basico",
    fechaRegistro: ISODate("2026-04-20"),
    preferencias: {
      generoPeliculas: ["animacion"],
      generoMusica: ["clasica"]
    },
    favoritos: ["Toy Story", "Mozart"],
    estado: "inactivo"
  },
  {
    nombre: "José Ramírez",
    correo: "jose@email.com",
    plan: "premium",
    fechaRegistro: ISODate("2026-05-12"),
    preferencias: {
      generoPeliculas: ["aventura"],
      generoMusica: ["rock"]
    },
    favoritos: ["Indiana Jones", "Queen"],
    estado: "activo"
  }
]);