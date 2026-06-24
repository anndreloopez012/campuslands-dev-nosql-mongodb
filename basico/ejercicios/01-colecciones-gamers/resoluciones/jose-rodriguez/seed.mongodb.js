//Seleccionar o crear la base de datos requerida
use('campus_colecciones_gamers');

// Insertar 5 documentos coherentes y realistas del ecosistema shooter
db.jugadores.insertMany([
  {
    nickname: "GhostWalker",
    rango: "Diamante",
    horas_jugadas: 142,
    activo: true,
    estilo_juego: "Sniper",
    inventario_armas: ["AWM", "Desert Eagle"],
    estadisticas: { kda: 2.5, headshots_porcentaje: 45, victorias: 88 }
  },
  {
    nickname: "ViperStrike",
    rango: "Platino",
    horas_jugadas: 95,
    activo: true,
    estilo_juego: "Rusher",
    inventario_armas: ["AK-47", "Sawn-Off"],
    estadisticas: { kda: 1.8, headshots_porcentaje: 32, victorias: 54 }
  },
  {
    nickname: "AlphaTactics",
    rango: "Inmortal",
    horas_jugadas: 410,
    activo: true,
    estilo_juego: "IGL (Leader)",
    inventario_armas: ["M4A1", "USP-S", "Knife-Karambit"],
    estadisticas: { kda: 3.1, headshots_porcentaje: 52, victorias: 245 }
  },
  {
    nickname: "NoobMaster99",
    rango: "Bronce",
    horas_jugadas: 12,
    activo: false,
    estilo_juego: "Casual",
    inventario_armas: ["P90"],
    estadisticas: { kda: 0.6, headshots_porcentaje: 12, victorias: 2 }
  },
  {
    nickname: "PhoenixReborn",
    rango: "Oro",
    horas_jugadas: 78,
    activo: true,
    estilo_juego: "Support",
    inventario_armas: ["M4A1", "Flashbang", "Smoke"],
    estadisticas: { kda: 1.4, headshots_porcentaje: 28, victorias: 41 }
  }
]);


