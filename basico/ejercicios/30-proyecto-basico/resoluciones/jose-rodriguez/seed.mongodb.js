// Base de Datos de Campus Esports - Script de Poblado (Seed)
use('campus_esports_db');

// Limpieza de colecciones previas
db.campus_sedes.drop();
db.torneos_esports.drop();

// 1. CREATE: Inserción de Sedes / Edificios del Campus (Colección: campus_sedes)
db.campus_sedes.insertMany([
  {
    _id: "CMP-CENTRAL",
    nombreSede: "Campus Central - Edificio de Innovación",
    ubicationLab: "Laboratorio de Gaming 3er Nivel",
    capacidadEspectadores: 150,
    activo: true
  },
  {
    _id: "CMP-Z10",
    nombreSede: "Campus Zona 10 - Arena Digital",
    ubicationLab: "Auditorio de Tecnología",
    capacidadEspectadores: 300,
    activo: true
  }
]);

// 2. CREATE: Inserción de Torneos de Videojuegos (Colección: torneos_esports)
// Modelado: Subdocumento 'organizacion', Array de Subdocumentos 'equiposInscritos',
// Array Simple 'plataformas' y Subdocumento 'metricas'.
db.torneos_esports.insertMany([
  {
    _id: "TRN-2026-01",
    nombreTorneo: "Copa Interfacultades League of Legends 2026",
    videojuego: "League of Legends",
    genero: "MOBA",
    campusId: "CMP-CENTRAL",
    estado: "EN_CURSO", // INSCRIPCIONES_ABIERTAS, EN_CURSO, FINALIZADO, CANCELADO
    organizacion: {
      responsable: "Club de Desarrollo y Gaming",
      cupoMaximoEquipos: 16,
      requisitoCreditosMinimo: 12
    },
    plataformas: ["PC Windows"],
    equiposInscritos: [
      { equipoId: "EQ-ING-01", nombreEquipo: "Cyber Engineers", facultad: "Ingeniería", victorias: 3, derrotas: 0 },
      { equipoId: "EQ-MED-02", nombreEquipo: "Medik Killers", facultad: "Medicina", victorias: 2, derrotas: 1 },
      { equipoId: "EQ-ARQ-01", nombreEquipo: "BIM Strikers", facultad: "Arquitectura", victorias: 1, derrotas: 2 }
    ],
    metricas: {
      bolsaPremiosUSD: 1200.00,
      duracionHorasEst: 20,
      puntosRankingCampus: 500
    },
    fechaInicio: ISODate("2026-03-10T14:00:00Z")
  },
  {
    _id: "TRN-2026-02",
    nombreTorneo: "Valorant Campus Championship",
    videojuego: "Valorant",
    genero: "Tactical Shooter",
    campusId: "CMP-Z10",
    estado: "INSCRIPCIONES_ABIERTAS",
    organizacion: {
      responsable: "Asociación de Estudiantes de Sistemas",
      cupoMaximoEquipos: 32,
      requisitoCreditosMinimo: 10
    },
    plataformas: ["PC Windows"],
    equiposInscritos: [
      { equipoId: "EQ-ING-02", nombreEquipo: "Kernel Panic", facultad: "Ingeniería", victorias: 0, derrotas: 0 },
      { equipoId: "EQ-DER-01", nombreEquipo: "Lex Gaming", facultad: "Derecho", victorias: 0, derrotas: 0 }
    ],
    metricas: {
      bolsaPremiosUSD: 2500.00,
      duracionHorasEst: 35,
      puntosRankingCampus: 1000
    },
    fechaInicio: ISODate("2026-08-15T09:00:00Z")
  },
  {
    _id: "TRN-2026-03",
    nombreTorneo: "Rocket League Campus Clash",
    videojuego: "Rocket League",
    genero: "Deportes / Vehicular",
    campusId: "CMP-CENTRAL",
    estado: "FINALIZADO",
    organizacion: {
      responsable: "Deportes Universitario",
      cupoMaximoEquipos: 8,
      requisitoCreditosMinimo: 0
    },
    plataformas: ["PC Windows", "PS5", "Xbox Series X"],
    equiposInscritos: [
      { equipoId: "EQ-ECO-01", nombreEquipo: "Wall Street Boosters", facultad: "Económicas", victorias: 4, derrotas: 0 },
      { equipoId: "EQ-ING-01", nombreEquipo: "Cyber Engineers", facultad: "Ingeniería", victorias: 3, derrotas: 1 }
    ],
    metricas: {
      bolsaPremiosUSD: 600.00,
      duracionHorasEst: 12,
      puntosRankingCampus: 300
    },
    fechaInicio: ISODate("2026-02-01T10:00:00Z")
  },
  {
    _id: "TRN-2026-99",
    nombreTorneo: "Prueba Tecnica de Latencia LAN",
    videojuego: "Street Fighter 6",
    genero: "Peleas",
    campusId: "CMP-CENTRAL",
    estado: "CANCELADO",
    organizacion: {
      responsable: "Soporte TI Campus",
      cupoMaximoEquipos: 4,
      requisitoCreditosMinimo: 0
    },
    plataformas: ["PS5"],
    equiposInscritos: [],
    metricas: {
      bolsaPremiosUSD: 0.00,
      duracionHorasEst: 2,
      puntosRankingCampus: 0
    },
    fechaInicio: ISODate("2026-01-05T08:00:00Z")
  }
]);
