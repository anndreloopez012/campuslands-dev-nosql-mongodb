// Base de Datos de Campus Esports - Operaciones CRUD e Integración Analítica
use('campus_esports_db');

// =============================================================================
// 1. CREATE (Inserción Individual Dinámica)
// Registra un nuevo torneo para la disciplina de Smash Bros en el Campus.
// =============================================================================
db.torneos_esports.insertOne({
  _id: "TRN-2026-04",
  nombreTorneo: "Super Smash Bros Ultimate Showdown",
  videojuego: "Super Smash Bros Ultimate",
  genero: "Lucha",
  campusId: "CMP-Z10",
  estado: "INSCRIPCIONES_ABIERTAS",
  organizacion: {
    responsable: "Club de Consolas Campus",
    cupoMaximoEquipos: 20,
    requisitoCreditosMinimo: 0
  },
  plataformas: ["Nintendo Switch"],
  equiposInscritos: [],
  metricas: {
    bolsaPremiosUSD: 400.00,
    duracionHorasEst: 8,
    puntosRankingCampus: 250
  },
  fechaInicio: ISODate("2026-09-01T15:00:00Z")
});


// =============================================================================
// 2. READ: Búsqueda con Filtros, Ordenamiento ($sort) y Límite ($limit)
// Obtiene los 2 torneos con mayor bolsa de premios que estén activos o abiertos.
// =============================================================================
db.torneos_esports.find(
  { estado: { $in: ["INSCRIPCIONES_ABIERTAS", "EN_CURSO"] } },
  {
    _id: 0,
    nombreTorneo: 1,
    videojuego: 1,
    estado: 1,
    bolsaUSD: "$metricas.bolsaPremiosUSD",
    duracionHoras: "$metricas.duracionHorasEst"
  }
).sort({ "metricas.bolsaPremiosUSD": -1 }).limit(2);


// =============================================================================
// 3. READ: Agregación Analítica de Premios y Horas por Género ($group, $avg, $sum)
// Consolida las bolsas de premios totales y el promedio de duración estimada por género.
// =============================================================================
db.torneos_esports.aggregate([
  {
    $group: {
      _id: "$genero",
      totalTorneos: { $sum: 1 },
      bolsaTotalPremiosUSD: { $sum: "$metricas.bolsaPremiosUSD" },
      promedioDuracionHoras: { $avg: "$metricas.duracionHorasEst" }
    }
  },
  {
    $sort: { bolsaTotalPremiosUSD: -1 }
  }
]);


// =============================================================================
// 4. READ: Descomposición de Equipos por Facultad ($unwind + $group)
// Analiza la participación de las Facultades desglosando el array de 'equiposInscritos'.
// =============================================================================
db.torneos_esports.aggregate([
  { $unwind: "$equiposInscritos" },
  {
    $group: {
      _id: "$equiposInscritos.facultad",
      totalEquiposRepresentantes: { $sum: 1 },
      totalVictoriasAcumuladas: { $sum: "$equiposInscritos.victorias" },
      torneosEnQueParticipa: { $addToSet: "$nombreTorneo" }
    }
  },
  {
    $sort: { totalEquiposRepresentantes: -1 }
  }
]);


// =============================================================================
// 5. UPDATE: Inscripción Dinámica de un Nuevo Equipo ($push + $inc)
// Inscribe al equipo "Design Pixel" en el torneo de Valorant ("TRN-2026-02").
// =============================================================================
db.torneos_esports.updateOne(
  { _id: "TRN-2026-02", estado: "INSCRIPCIONES_ABIERTAS" },
  {
    $push: {
      equiposInscritos: {
        equipoId: "EQ-ARQ-02",
        nombreEquipo: "Design Pixel",
        facultad: "Arquitectura",
        victorias: 0,
        derrotas: 0
      }
    }
  }
);


// =============================================================================
// 6. UPDATE: Actualización Masiva de Estado ($updateMany)
// Cierra las inscripciones y cambia el estado a "EN_CURSO" para torneos que inicien pronto.
// =============================================================================
db.torneos_esports.updateMany(
  { _id: "TRN-2026-02" },
  {
    $set: {
      estado: "EN_CURSO",
      "organizacion.responsable": "Asociación de Estudiantes de Sistemas - Comité Esports"
    }
  }
);


// =============================================================================
// 7. DELETE: Eliminación de Registro Específico (deleteOne)
// Elimina el torneo cancelado de prueba técnica ("TRN-2026-99").
// =============================================================================
db.torneos_esports.deleteOne({
  _id: "TRN-2026-99",
  estado: "CANCELADO"
});


// =============================================================================
// 8. DELETE: Purga de Registros Sin Participación (deleteMany)
// Elimina torneos antiguos en estado FINALIZADO que no registraron ningún equipo.
// =============================================================================
db.torneos_esports.deleteMany({
  estado: "FINALIZADO",
  equiposInscritos: { $size: 0 }
});
