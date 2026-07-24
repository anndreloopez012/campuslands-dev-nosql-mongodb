// Usuarios streaming - juan-lema
use("campus_usuarios_streaming");

db.registros.drop();

db.registros.insertMany([
  {
    nombre: "Lucia Fernandez",
    email: "lucia.fernandez@correo.com",
    pais: "Guatemala",
    plan: "premium",
    activo: true,
    generosFavoritos: ["drama", "pop"],
    historial: [
      { titulo: "El viaje del tiempo", tipo: "pelicula", fecha: new Date("2026-05-10"), calificacion: 5 },
      { titulo: "Luz de neon", tipo: "cancion", fecha: new Date("2026-06-01"), calificacion: 4 }
    ],
    fechaRegistro: new Date("2025-11-02")
  },
  {
    nombre: "Mario Castillo",
    email: "mario.castillo@correo.com",
    pais: "Mexico",
    plan: "basico",
    activo: true,
    generosFavoritos: ["accion", "rock"],
    historial: [
      { titulo: "Fuerza cruzada", tipo: "pelicula", fecha: new Date("2026-04-20"), calificacion: 3 }
    ],
    fechaRegistro: new Date("2026-01-15")
  },
  {
    nombre: "Ana Morales",
    email: "ana.morales@correo.com",
    pais: "Colombia",
    plan: "gratis",
    activo: false,
    generosFavoritos: ["comedia"],
    historial: [],
    fechaRegistro: new Date("2026-02-08")
  },
  {
    nombre: "Diego Ramirez",
    email: "diego.ramirez@correo.com",
    pais: "Guatemala",
    plan: "premium",
    activo: true,
    generosFavoritos: ["terror", "electronica", "drama"],
    historial: [
      { titulo: "Sombras del silencio", tipo: "pelicula", fecha: new Date("2026-03-11"), calificacion: 5 },
      { titulo: "Pulso nocturno", tipo: "cancion", fecha: new Date("2026-03-15"), calificacion: 5 },
      { titulo: "Eco final", tipo: "cancion", fecha: new Date("2026-04-02"), calificacion: 4 }
    ],
    fechaRegistro: new Date("2025-09-20")
  },
  {
    nombre: "Sofia Herrera",
    email: "sofia.herrera@correo.com",
    pais: "Peru",
    plan: "basico",
    activo: true,
    generosFavoritos: ["pop", "documental"],
    historial: [
      { titulo: "Mares profundos", tipo: "pelicula", fecha: new Date("2026-06-18"), calificacion: 4 }
    ],
    fechaRegistro: new Date("2026-03-30")
  }
]);

db.registros.find({}, { nombre: 1, _id: 0 });
