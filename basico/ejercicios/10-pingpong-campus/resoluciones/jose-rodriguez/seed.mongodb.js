// Base de Datos de Ping Pong - Script de Poblado (Seed)
use('pingpong_db');

// Limpieza de colecciones previas
db.jugadores.drop();
db.torneos.drop();
db.partidos.drop();

db.jugadores.insertMany([
  {
    _id: "JUG-001",
    nombre: "Ma",
    apellido: "Long",
    pais: "CHN",
    ranking: 1,
    estado: "ACTIVO",
    estiloJuego: {
      agarre: "Clásico",
      manoDominante: "Derecha",
      gomas: { drive: "Hurricane 3 Neo", reves: "Tenergy 05" }
    },
    etiquetas: ["ofensivo", "topspin", "campeon"],
    estadisticasCarrera: { partidosGanados: 450, partidosPerdidos: 35, titulos: 28 }
  },
  {
    _id: "JUG-002",
    nombre: "Fan",
    apellido: "Zhendong",
    pais: "CHN",
    ranking: 2,
    estado: "ACTIVO",
    estiloJuego: {
      agarre: "Clásico",
      manoDominante: "Derecha",
      gomas: { drive: "Dignics 09C", reves: "Dignics 05" }
    },
    etiquetas: ["ofensivo", "potencia", "rapido"],
    estadisticasCarrera: { partidosGanados: 380, partidosPerdidos: 42, titulos: 19 }
  },
  {
    _id: "JUG-003",
    nombre: "Hugo",
    apellido: "Calderano",
    pais: "BRA",
    ranking: 3,
    estado: "ACTIVO",
    estiloJuego: {
      agarre: "Clásico",
      manoDominante: "Derecha",
      gomas: { drive: "Target Pro GT", reves: "Rasanter R53" }
    },
    etiquetas: ["ofensivo", "reves-potente", "americas"],
    estadisticasCarrera: { partidosGanados: 290, partidosPerdidos: 88, titulos: 12 }
  },
  {
    _id: "JUG-004",
    nombre: "Timo",
    apellido: "Boll",
    pais: "GER",
    ranking: 12,
    estado: "ACTIVO",
    estiloJuego: {
      agarre: "Clásico",
      manoDominante: "Zurda",
      gomas: { drive: "Dignics 09C", reves: "Dignics 09C" }
    },
    etiquetas: ["tactico", "maestro-efecto", "veterano"],
    estadisticasCarrera: { partidosGanados: 520, partidosPerdidos: 150, titulos: 32 }
  },
  {
    _id: "JUG-005",
    nombre: "Jang",
    apellido: "Woojin",
    pais: "KOR",
    ranking: 8,
    estado: "INACTIVO",
    estiloJuego: {
      agarre: "Lapicero",
      manoDominante: "Derecha",
      gomas: { drive: "Hurricane 3", reves: "Picos Cortos" }
    },
    etiquetas: ["lapicero", "contraataque"],
    estadisticasCarrera: { partidosGanados: 180, partidosPerdidos: 95, titulos: 4 }
  }
]);

// 2. Inserción de Torneos (Colección: torneos)
// Modelado: Array de IDs referenciales de jugadores
db.torneos.insertMany([
  {
    _id: "TOR-001",
    nombre: "Gran Smash Singapur 2026",
    categoria: "Profesional Senior",
    ubicacion: { ciudad: "Singapur", pais: "SGP" },
    fechaInicio: ISODate("2026-03-10T00:00:00Z"),
    fechaFin: ISODate("2026-03-20T00:00:00Z"),
    jugadoresInscritosIds: ["JUG-001", "JUG-002", "JUG-003", "JUG-004"],
    estado: "FINALIZADO"
  },
  {
    _id: "TOR-002",
    nombre: "Campeonato Mundial de Tenis de Mesa 2026",
    categoria: "Copa Mundial",
    ubicacion: { ciudad: "Doha", pais: "QAT" },
    fechaInicio: ISODate("2026-05-15T00:00:00Z"),
    fechaFin: ISODate("2026-05-25T00:00:00Z"),
    jugadoresInscritosIds: ["JUG-001", "JUG-002", "JUG-003", "JUG-005"],
    estado: "EN_PROGRESO"
  }
]);

// 3. Inserción de Partidos (Colección: partidos)
// Modelado: Sets embebidos en el partido con referenciación simple
db.partidos.insertMany([
  {
    _id: "PAR-001",
    torneoId: "TOR-001",
    etapa: "FINAL",
    jugador1Id: "JUG-001",
    jugador2Id: "JUG-002",
    ganadorId: "JUG-001",
    duracionMinutos: 58,
    sets: [
      { numeroSet: 1, puntosJ1: 9, puntosJ2: 11, ganadorId: "JUG-002" },
      { numeroSet: 2, puntosJ1: 11, puntosJ2: 8, ganadorId: "JUG-001" },
      { numeroSet: 3, puntosJ1: 11, puntosJ2: 6, ganadorId: "JUG-001" },
      { numeroSet: 4, puntosJ1: 7, puntosJ2: 11, ganadorId: "JUG-002" },
      { numeroSet: 5, puntosJ1: 12, puntosJ2: 10, ganadorId: "JUG-001" }
    ],
    estadisticas: { saquesDirectosJ1: 6, saquesDirectosJ2: 4, erroresNoForzadosJ1: 12, erroresNoForzadosJ2: 18 }
  },
  {
    _id: "PAR-002",
    torneoId: "TOR-001",
    etapa: "SEMIFINAL",
    jugador1Id: "JUG-001",
    jugador2Id: "JUG-003",
    ganadorId: "JUG-001",
    duracionMinutos: 42,
    sets: [
      { numeroSet: 1, puntosJ1: 11, puntosJ2: 5, ganadorId: "JUG-001" },
      { numeroSet: 2, puntosJ1: 11, puntosJ2: 7, ganadorId: "JUG-001" },
      { numeroSet: 3, puntosJ1: 11, puntosJ2: 9, ganadorId: "JUG-001" }
    ],
    estadisticas: { saquesDirectosJ1: 8, saquesDirectosJ2: 2, erroresNoForzadosJ1: 8, erroresNoForzadosJ2: 15 }
  },
  {
    _id: "PAR-003",
    torneoId: "TOR-001",
    etapa: "SEMIFINAL",
    jugador1Id: "JUG-002",
    jugador2Id: "JUG-004",
    ganadorId: "JUG-002",
    duracionMinutos: 49,
    sets: [
      { numeroSet: 1, puntosJ1: 8, puntosJ2: 11, ganadorId: "JUG-004" },
      { numeroSet: 2, puntosJ1: 11, puntosJ2: 9, ganadorId: "JUG-002" },
      { numeroSet: 3, puntosJ1: 11, puntosJ2: 4, ganadorId: "JUG-002" },
      { numeroSet: 4, puntosJ1: 11, puntosJ2: 8, ganadorId: "JUG-002" }
    ],
    estadisticas: { saquesDirectosJ1: 5, saquesDirectosJ2: 7, erroresNoForzadosJ1: 10, erroresNoForzadosJ2: 14 }
  },
  {
    _id: "PAR-004",
    torneoId: "TOR-002",
    etapa: "CUARTOS_DE_FINAL",
    jugador1Id: "JUG-003",
    jugador2Id: "JUG-005",
    ganadorId: "JUG-003",
    duracionMinutos: 35,
    sets: [
      { numeroSet: 1, puntosJ1: 11, puntosJ2: 8, ganadorId: "JUG-003" },
      { numeroSet: 2, puntosJ1: 11, puntosJ2: 6, ganadorId: "JUG-003" },
      { numeroSet: 3, puntosJ1: 11, puntosJ2: 9, ganadorId: "JUG-003" }
    ],
    estadisticas: { saquesDirectosJ1: 9, saquesDirectosJ2: 3, erroresNoForzadosJ1: 9, erroresNoForzadosJ2: 16 }
  }
]);
