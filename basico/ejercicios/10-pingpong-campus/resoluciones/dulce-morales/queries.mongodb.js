// QUERIES: Validaciones y Consultas
// Asegura el uso de la coleccion 
use('campus_pingpong_campus');

// CONSULTA 1: Búsqueda de jugadores activos en categoría 'Avanzado'
db.jugadores.find(
  { activo: true, categoria: "Avanzado" },
  { nombre: 1, apodo: 1, "estadisticas.puntos_ranking": 1, _id: 0 }
);

// CONSULTA 2: Conteo de jugadores activos por categoría. Enfocado en el requerimiento de "conteo"
db.jugadores.countDocuments({ activo: true });

db.jugadores.countDocuments({ mano_habil: "Zurda" });

// CONSULTA 3: Buscar jugadores con más de 1000 puntos en el ranking
db.jugadores.find(
  { "estadisticas.puntos_ranking": { $gt: 1000 } },
  { nombre: 1, categoria: 1, "estadisticas.puntos_ranking": 1, _id: 0 }
);

// OPERACIÓN DE ACTUALIZACIÓN: Registrar Victoria de un Jugador. Incrementa partidos jugados, partidos ganados y puntos de ranking
db.jugadores.updateOne(
  { nombre: "Carlos Mendoza" },
  {
    $inc: {
      "estadisticas.partidos_jugados": 1,
      "estadisticas.partidos_ganados": 1,
      "estadisticas.puntos_ranking": 30
    }
  }
);

// Verificación de la actualización
db.jugadores.find(
  { nombre: "Carlos Mendoza" },
  { nombre: 1, estadisticas: 1, _id: 0 }
);