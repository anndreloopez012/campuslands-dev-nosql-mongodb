// Base de Datos de Streaming Multimedia (Películas y Música) - Script de Poblado (Seed)
use('streaming_media_db');

// Limpieza de colecciones previas
db.contenido_media.drop();
db.usuarios.drop();

// 1. Inserción de Catálogo Multimedia de Referencia (Colección: contenido_media)
db.contenido_media.insertMany([
  {
    _id: "MED-FILM-001",
    titulo: "Sinfonía Estelar 2026",
    tipo: "PELICULA", // PELICULA, MUSICA
    genero: "Ciencia Ficción",
    duracionMinutos: 142,
    clasificacion: "PG-13"
  },
  {
    _id: "MED-FILM-002",
    titulo: "El Silencio del Jazz",
    tipo: "PELICULA",
    genero: "Drama / Música",
    duracionMinutos: 118,
    clasificacion: "R"
  },
  {
    _id: "MED-TRACK-101",
    titulo: "Midnight Cyber Synth",
    tipo: "MUSICA",
    genero: "Synthwave",
    duracionMinutos: 4,
    artista: "Neon Horizon"
  },
  {
    _id: "MED-TRACK-102",
    titulo: "Océanos de Cristal",
    tipo: "MUSICA",
    genero: "Ambient",
    duracionMinutos: 6,
    artista: "Luna Blue"
  }
]);

// 2. Inserción de Documentos de Usuario (Colección: usuarios)
// Modelado: Subdocumentos 'perfil' y 'suscripcion', Arrays de Subdocumentos 'favoritos' 
// e 'historialReproduccion', y Array Simple 'generosPreferidos'.
db.usuarios.insertMany([
  {
    _id: "USR-1001",
    username: "carlos_streamer",
    email: "carlos.m@email.com",
    perfil: {
      nombreCompleto: "Carlos Mendoza",
      pais: "Guatemala",
      edad: 28,
      idioma: "ES"
    },
    suscripcion: {
      plan: "VIP_PREMIUM", // FREE, STANDARD, VIP_PREMIUM
      estado: "ACTIVA",
      precioMensualUSD: 14.99,
      renovacionAutomatica: true
    },
    generosPreferidos: ["Ciencia Ficción", "Synthwave", "Acción"],
    favoritos: [
      { contenidoId: "MED-FILM-001", titulo: "Sinfonía Estelar 2026", tipo: "PELICULA", guardadoEn: ISODate("2026-02-10T00:00:00Z") },
      { contenidoId: "MED-TRACK-101", titulo: "Midnight Cyber Synth", tipo: "MUSICA", guardadoEn: ISODate("2026-03-01T00:00:00Z") }
    ],
    historialReproduccion: [
      { contenidoId: "MED-FILM-001", tipo: "PELICULA", minConsumidos: 142, calificacionUsuario: 5, fecha: ISODate("2026-06-10T21:00:00Z") },
      { contenidoId: "MED-TRACK-101", tipo: "MUSICA", minConsumidos: 4, calificacionUsuario: 5, fecha: ISODate("2026-07-01T10:15:00Z") },
      { contenidoId: "MED-TRACK-102", tipo: "MUSICA", minConsumidos: 6, calificacionUsuario: 4, fecha: ISODate("2026-07-15T08:30:00Z") }
    ],
    horasConsumidasTotales: 18.5,
    ultimoAcceso: ISODate("2026-07-25T19:00:00Z")
  },
  {
    _id: "USR-1002",
    username: "valeria_vibes",
    email: "v.ruiz@email.com",
    perfil: {
      nombreCompleto: "Valeria Ruiz",
      pais: "México",
      edad: 24,
      idioma: "ES"
    },
    suscripcion: {
      plan: "STANDARD",
      estado: "ACTIVA",
      precioMensualUSD: 9.99,
      renovacionAutomatica: true
    },
    generosPreferidos: ["Ambient", "Drama / Música", "Indie"],
    favoritos: [
      { contenidoId: "MED-FILM-002", titulo: "El Silencio del Jazz", tipo: "PELICULA", guardadoEn: ISODate("2026-04-12T00:00:00Z") },
      { contenidoId: "MED-TRACK-102", titulo: "Océanos de Cristal", tipo: "MUSICA", guardadoEn: ISODate("2026-05-18T00:00:00Z") }
    ],
    historialReproduccion: [
      { contenidoId: "MED-FILM-002", tipo: "PELICULA", minConsumidos: 118, calificacionUsuario: 5, fecha: ISODate("2026-05-20T22:00:00Z") },
      { contenidoId: "MED-TRACK-102", tipo: "MUSICA", minConsumidos: 6, calificacionUsuario: 5, fecha: ISODate("2026-06-05T14:20:00Z") }
    ],
    horasConsumidasTotales: 25.2,
    ultimoAcceso: ISODate("2026-07-26T12:00:00Z")
  },
  {
    _id: "USR-1003",
    username: "andres_cine",
    email: "a.gomez@email.com",
    perfil: {
      nombreCompleto: "Andrés Gómez",
      pais: "Colombia",
      edad: 35,
      idioma: "ES"
    },
    suscripcion: {
      plan: "FREE",
      estado: "INACTIVA",
      precioMensualUSD: 0.00,
      renovacionAutomatica: false
    },
    generosPreferidos: ["Ciencia Ficción"],
    favoritos: [],
    historialReproduccion: [
      { contenidoId: "MED-FILM-001", tipo: "PELICULA", minConsumidos: 45, calificacionUsuario: 3, fecha: ISODate("2026-01-10T18:00:00Z") }
    ],
    horasConsumidasTotales: 2.1,
    ultimoAcceso: ISODate("2026-03-01T09:00:00Z")
  },
  {
    _id: "USR-1004",
    username: "beatriz_music",
    email: "b.solis@email.com",
    perfil: {
      nombreCompleto: "Beatriz Solís",
      pais: "Guatemala",
      edad: 30,
      idioma: "EN"
    },
    suscripcion: {
      plan: "VIP_PREMIUM",
      estado: "ACTIVA",
      precioMensualUSD: 14.99,
      renovacionAutomatica: true
    },
    generosPreferidos: ["Synthwave", "Pop", "Rock"],
    favoritos: [
      { contenidoId: "MED-TRACK-101", titulo: "Midnight Cyber Synth", tipo: "MUSICA", guardadoEn: ISODate("2026-06-01T00:00:00Z") }
    ],
    historialReproduccion: [
      { contenidoId: "MED-TRACK-101", tipo: "MUSICA", minConsumidos: 4, calificacionUsuario: 4, fecha: ISODate("2026-07-10T16:45:00Z") }
    ],
    horasConsumidasTotales: 42.0,
    ultimoAcceso: ISODate("2026-07-26T18:10:00Z")
  }
]);
