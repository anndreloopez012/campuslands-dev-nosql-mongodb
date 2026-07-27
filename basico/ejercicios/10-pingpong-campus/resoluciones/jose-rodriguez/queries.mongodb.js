// Base de Datos de Ping Pong - Consultas Nativas en Español
use('pingpong_db');

// =============================================================================
// CONSULTA 1: Búsqueda de jugadores activos con agarre "Clásico" y estilo ofensivo
// =============================================================================
db.jugadores.find(
  {
    estado: "ACTIVO",
    "estiloJuego.agarre": "Clásico",
    etiquetas: { $in: ["ofensivo"] }
  },
  {
    nombre: 1,
    apellido: 1,
    pais: 1,
    ranking: 1,
    "estiloJuego.gomas.drive": 1
  }
).sort({ ranking: 1 });


// =============================================================================
// CONSULTA 2: Conteo directo de partidos jugados en el torneo "TOR-001"
// =============================================================================
db.partidos.countDocuments({
  torneoId: "TOR-001"
});


// =============================================================================
// CONSULTA 3: Detección de partidos con remontada ("Comeback")
// Encuentra partidos donde el ganador general perdió el primer set.
// =============================================================================
db.partidos.find({
  $expr: {
    $and: [
      { $eq: ["$sets.0.numeroSet", 1] },
      { $ne: [{ $arrayElemAt: ["$sets.ganadorId", 0] }, "$ganadorId"] }
    ]
  }
}, {
  etapa: 1,
  ganadorId: 1,
  duracionMinutos: 1,
  "sets.numeroSet": 1,
  "sets.ganadorId": 1
});


// =============================================================================
// CONSULTA 4: Agregación con $group y $lookup - Promedios y victorias por jugador
// =============================================================================
db.partidos.aggregate([
  {
    $group: {
      _id: "$ganadorId",
      totalVictorias: { $sum: 1 },
      duracionPromedioMinutos: { $avg: "$duracionMinutos" }
    }
  },
  {
    $lookup: {
      from: "jugadores",
      localField: "_id",
      foreignField: "_id",
      as: "informacionJugador"
    }
  },
  {
    $unwind: "$informacionJugador"
  },
  {
    $project: {
      _id: 0,
      jugadorId: "$informacionJugador._id",
      nombreCompleto: { $concat: ["$informacionJugador.nombre", " ", "$informacionJugador.apellido"] },
      pais: "$informacionJugador.pais",
      rankingActual: "$informacionJugador.ranking",
      totalVictorias: 1,
      duracionPromedioMinutos: { $round: ["$duracionPromedioMinutos", 1] }
    }
  },
  { $sort: { totalVictorias: -1 } }
]);


// =============================================================================
// CONSULTA 5: Agregación de torneos por país sede y total de jugadores inscritos
// =============================================================================
db.torneos.aggregate([
  {
    $group: {
      _id: { pais: "$ubicacion.pais", estado: "$estado" },
      totalTorneos: { $sum: 1 },
      totalInscritosAcumulados: { $sum: { $size: "$jugadoresInscritosIds" } }
    }
  },
  {
    $project: {
      _id: 0,
      paisSede: "$_id.pais",
      estadoTorneo: "$_id.estado",
      totalTorneos: 1,
      totalInscritosAcumulados: 1
    }
  },
  { $sort: { totalTorneos: -1 } }
]);
