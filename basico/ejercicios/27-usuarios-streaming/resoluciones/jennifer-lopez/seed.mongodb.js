// Usuarios streaming
// Solución de Denise López - Ejercicio 27

use campus_usuarios_streaming

// Crear la colección principal en minúsculas y plural
db.createCollection("usuarios")

// Insertar 5 usuarios con suscripciones, perfiles, favoritos y preferencias de películas/música
db.usuarios.insertMany([
  {
    codigo_usuario: "USR-STR-001",
    nombre_completo: "Zephyrine Valdivia",
    email: "zephyrine.valdivia@campus.gt",
    pais: "Guatemala",
    membresia: {
      tipo_plan: "Familiar Premium",
      precio_gtq: 109.99,
      estado: "Activo",
      dispositivos_permitidos: 4
    },
    preferencias: {
      generos_favoritos: ["Anime", "Soundtracks", "Ciencia Ficción"],
      idioma_audio: "Japonés",
      subtitulos_activos: true
    },
    listas_favoritas: [
      { titulo: "Openings de Anime Populares", tipo: "Música", total_elementos: 25 },
      { titulo: "Maratón Assassination Classroom", tipo: "Película/Serie", total_elementos: 12 }
    ],
    fecha_registro: ISODate("2026-01-10T00:00:00Z")
  },
  {
    codigo_usuario: "USR-STR-002",
    nombre_completo: "Orestes Vane",
    email: "orestes.vane@craterazul.gt",
    pais: "Guatemala",
    membresia: {
      tipo_plan: "Individual",
      precio_gtq: 59.99,
      estado: "Activo",
      dispositivos_permitidos: 1
    },
    preferencias: {
      generos_favoritos: ["Rock", "Universo Marvel", "Acción"],
      idioma_audio: "Español Latino",
      subtitulos_activos: false
    },
    listas_favoritas: [
      { titulo: "Clásicos de Eminem y Paulo Londra", tipo: "Música", total_elementos: 40 },
      { titulo: "Saga de Capitán América", tipo: "Película/Serie", total_elementos: 4 }
    ],
    fecha_registro: ISODate("2026-02-14T00:00:00Z")
  },
  {
    codigo_usuario: "USR-STR-003",
    nombre_completo: "Balthazar Nightshade",
    email: "balthazar.n@quirigua.gt",
    pais: "Guatemala",
    membresia: {
      tipo_plan: "Estudiante",
      precio_gtq: 35.00,
      estado: "Pendiente",
      dispositivos_permitidos: 1
    },
    preferencias: {
      generos_favoritos: ["Películas Clásicas", "Música Sinfónica"],
      idioma_audio: "Inglés",
      subtitulos_activos: true
    },
    listas_favoritas: [
      { titulo: "Soundtracks de Ciencia Ficción", tipo: "Música", total_elementos: 18 }
    ],
    fecha_registro: ISODate("2026-03-01T00:00:00Z")
  },
  {
    codigo_usuario: "USR-STR-004",
    nombre_completo: "Cyrene Sterling",
    email: "cyrene.s@lachua.gt",
    pais: "Guatemala",
    membresia: {
      tipo_plan: "Familiar Premium",
      precio_gtq: 109.99,
      estado: "Activo",
      dispositivos_permitidos: 4
    },
    preferencias: {
      generos_favoritos: ["Pop Latino", "Comedia", "Documentales"],
      idioma_audio: "Español Latino",
      subtitulos_activos: false
    },
    listas_favoritas: [
      { titulo: "Éxitos Urbanos 2026", tipo: "Música", total_elementos: 50 },
      { titulo: "Comedias de Ficción", tipo: "Película/Serie", total_elementos: 8 }
    ],
    fecha_registro: ISODate("2026-04-12T00:00:00Z")
  },
  {
    codigo_usuario: "USR-STR-005",
    nombre_completo: "Melantho Frost",
    email: "melantho.frost@tikal.gt",
    pais: "Guatemala",
    membresia: {
      tipo_plan: "Individual",
      precio_gtq: 59.99,
      estado: "Cancelado",
      dispositivos_permitidos: 1
    },
    preferencias: {
      generos_favoritos: ["Fantasía", "Música Instrumental"],
      idioma_audio: "Inglés",
      subtitulos_activos: true
    },
    listas_favoritas: [
      { titulo: "Películas de Magia y Fantasía", tipo: "Película/Serie", total_elementos: 15 }
    ],
    fecha_registro: ISODate("2026-05-20T00:00:00Z")
  }
])

// creación de índices para optimizar las consultas

// Sirve para encontrar rápidamente a los usuarios según el estado de su suscripción (Activo, Cancelado, Pendiente).
db.usuarios.createIndex({ "membresia.estado": 1 })

// Sirve para buscar al instante a los usuarios que escuchan o ven un género musical o de película específico.
db.usuarios.createIndex({ "preferencias.generos_favoritos": 1 })

// Sirve para consultar inmediatamente a un usuario por su correo electrónico sin revisar toda la base de datos.
db.usuarios.createIndex({ email: 1 }, { unique: true })