// Proyecto básico MongoDB 
// Solución de Denise López - Ejercicio 30

use campus_proyecto_basico

// Crear la colección principal en minúsculas y plural
db.createCollection("torneos")

// Insertar 5 registros de torneos de videojuegos en el campus
db.torneos.insertMany([
  {
    codigo_torneo: "TRN-GAM-001",
    nombre_torneo: "Copa Campus Valorant 2026",
    videojuego: "Valorant",
    categoria: "FPS",
    lider_equipo: "Zephyrine Valdivia",
    sede_arena: "Arena Gaming Cráter Azul",
    pais: "Guatemala",
    equipos_inscritos: 16,
    monto_premio_gtq: 2500.00,
    estado: "Finalizado",
    estadisticas: {
      partidas_jugadas: 30,
      equipo_ganador: "Phoenix Strike",
      mvp_jugador: "ZephyrineGT"
    },
    plataformas: ["PC"],
    fecha_inicio: ISODate("2026-02-10T00:00:00Z")
  },
  {
    codigo_torneo: "TRN-GAM-002",
    nombre_torneo: "Torneo Interfacultades League of Legends",
    videojuego: "League of Legends",
    categoria: "MOBA",
    lider_equipo: "Orestes Vane",
    sede_arena: "Arena Gaming Semuc Champey",
    pais: "Guatemala",
    equipos_inscritos: 12,
    monto_premio_gtq: 3000.00,
    estado: "En Curso",
    estadisticas: {
      partidas_jugadas: 18,
      equipo_ganador: "Pendiente",
      mvp_jugador: "En definición"
    },
    plataformas: ["PC"],
    fecha_inicio: ISODate("2026-03-15T00:00:00Z")
  },
  {
    codigo_torneo: "TRN-GAM-003",
    nombre_torneo: "Super Smash Bros Ultimate Showdown",
    videojuego: "Super Smash Bros Ultimate",
    categoria: "Lucha",
    lider_equipo: "Balthazar Nightshade",
    sede_arena: "Arena Gaming Quiriguá",
    pais: "Guatemala",
    equipos_inscritos: 32,
    monto_premio_gtq: 1500.00,
    estado: "Finalizado",
    estadisticas: {
      partidas_jugadas: 62,
      equipo_ganador: "Balthazar_Slayer",
      mvp_jugador: "Nightshade_Fox"
    },
    plataformas: ["Nintendo Switch"],
    fecha_inicio: ISODate("2026-04-20T00:00:00Z")
  },
  {
    codigo_torneo: "TRN-GAM-004",
    nombre_torneo: "Liga Estudiantil Rocket League",
    videojuego: "Rocket League",
    categoria: "Deportes / Autos",
    lider_equipo: "Cyrene Sterling",
    sede_arena: "Arena Gaming Tikal",
    pais: "Guatemala",
    equipos_inscritos: 8,
    monto_premio_gtq: 1800.00,
    estado: "En Curso",
    estadisticas: {
      partidas_jugadas: 10,
      equipo_ganador: "Pendiente",
      mvp_jugador: "En definición"
    },
    plataformas: ["PC", "PlayStation 5", "Xbox Series X"],
    fecha_inicio: ISODate("2026-05-18T00:00:00Z")
  },
  {
    codigo_torneo: "TRN-GAM-005",
    nombre_torneo: "Championship Street Fighter 6",
    videojuego: "Street Fighter 6",
    categoria: "Lucha",
    lider_equipo: "Melantho Frost",
    sede_arena: "Arena Gaming Laguna Lachúa",
    pais: "Guatemala",
    equipos_inscritos: 20,
    monto_premio_gtq: 2000.00,
    estado: "Inscripciones Abiertas",
    estadisticas: {
      partidas_jugadas: 0,
      equipo_ganador: "Por comenzar",
      mvp_jugador: "Por comenzar"
    },
    plataformas: ["PC", "PlayStation 5"],
    fecha_inicio: ISODate("2026-08-01T00:00:00Z")
  }
])

// Crear índices para optimizar consultas frecuentes

// Sirve para encontrar rápidamente torneos por su estado (Finalizado, En Curso, Inscripciones Abiertas).
db.torneos.createIndex({ estado: 1 })

// Sirve para consultar de golpe los eventos según el videojuego disputado.
db.torneos.createIndex({ videojuego: 1 })

// Sirve para garantizar la unicidad del código del torneo en todo el campus.
db.torneos.createIndex({ codigo_torneo: 1 }, { unique: true })