// Seleccionar la base de datos
use('campus_liga_futbol');

// CONSULTA 1: Tabla de posiciones (Ordenamiento y Proyección)
// Obtener nombre, puntos y goles a favor ordenados de mayor a menor puntaje
db.equipos.find(
  { activo: true },
  {
    _id: 0,
    nombre: 1,
    "estadisticas.puntos": 1,
    "estadisticas.goles_favor": 1,
    "estadisticas.partidos_jugados": 1
  }
).sort({ "estadisticas.puntos": -1, "estadisticas.goles_favor": -1 });

// CONSULTA 2: Filtrar equipos de un campus específico con proyección
db.equipos.find(
  { ciudad: "Campus Norte" },
  { _id: 0, nombre: 1, categoria: 1, "estadisticas.puntos": 1 }
);

// CONSULTA 3: Buscar equipos con ofensiva destacada (> 15 goles)
db.equipos.find(
  { "estadisticas.goles_favor": { $gt: 15 } },
  { _id: 0, nombre: 1, "estadisticas.goles_favor": 1 }
);

// OPERACIÓN 4: Actualización de resultado tras una victoria ($inc y $set)
// Jaguares FC gana un partido: suma 3 puntos, 1 victoria y +2 goles a favor
db.equipos.updateOne(
  { nombre: "Jaguares FC" },
  {
    $inc: {
      "estadisticas.partidos_jugados": 1,
      "estadisticas.victorias": 1,
      "estadisticas.puntos": 3,
      "estadisticas.goles_favor": 2
    }
  }
);

// CONSULTA 5: Top 3 de equipos (Limit)
db.equipos.find(
  {},
  { _id: 0, nombre: 1, "estadisticas.puntos": 1 }
).sort({ "estadisticas.puntos": -1 }).limit(3);