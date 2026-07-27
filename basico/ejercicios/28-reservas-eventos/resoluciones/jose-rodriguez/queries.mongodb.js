// Base de Datos de Gestión Deportiva - Operaciones de Delete Controlado y Agregaciones
use('deportes_liga_db');

// =============================================================================
// CONSULTA 1: Lectura Segura con Filtro de Soft Delete ($match)
// Consulta únicamente los atletas en competición activa (ignorando eliminados).
// =============================================================================
db.atletas.find(
  { "registroControl.eliminado": false },
  {
    _id: 0,
    nombreCompleto: 1,
    disciplina: 1,
    posicion: 1,
    rendimiento: 1
  }
).sort({ "rendimiento.calificacionPromedio": -1 });


// =============================================================================
// OPERACIÓN 2: Ejecución de Delete Controlado (Soft Delete con updateOne)
// Inactiva lógicamente al atleta "ATL-101" registrando el motivo y la fecha de baja.
// =============================================================================
db.atletas.updateOne(
  { _id: "ATL-101", "registroControl.eliminado": false },
  {
    $set: {
      "registroControl.activo": false,
      "registroControl.eliminado": true,
      "registroControl.fechaEliminacion": new Date("2026-07-26T20:00:00Z"),
      "registroControl.motivoBaja": "Transferencia Internacional a otra Liga",
      "registroControl.usuarioAuditoria": "gerente_deportivo"
    }
  }
);


// =============================================================================
// CONSULTA 3: Agregación de Métricas Deportivas EXCLUYENDO Atletas Eliminados
// Calcula el promedio de rendimiento y partidos jugados solo sobre atletas activos.
// =============================================================================
db.atletas.aggregate([
  {
    $match: { "registroControl.eliminado": false }
  },
  {
    $group: {
      _id: "$disciplina",
      totalAtletasActivos: { $sum: 1 },
      partidosPromedio: { $avg: "$rendimiento.partidosJugados" },
      calificacionPromedioGeneral: { $avg: "$rendimiento.calificacionPromedio" }
    }
  },
  {
    $sort: { calificacionPromedioGeneral: -1 }
  }
]);


// =============================================================================
// CONSULTA 4: Reporte de Auditoría de Bajas y Retiros ($match + $group)
// Analiza exclusivamente los atletas dados de baja (Soft Delete) agrupados por motivo.
// =============================================================================
db.atletas.aggregate([
  {
    $match: { "registroControl.eliminado": true }
  },
  {
    $group: {
      _id: "$registroControl.motivoBaja",
      cantidadAtletasAfectados: { $sum: 1 },
      atletas: { $push: "$nombreCompleto" },
      usuariosQueAprobaron: { $addToSet: "$registroControl.usuarioAuditoria" }
    }
  },
  {
    $sort: { cantidadAtletasAfectados: -1 }
  }
]);


// =============================================================================
// OPERACIÓN 5: Purga Física Controlada (Hard Delete por Retención)
// Elimina físicamente registros marcados como eliminados antes de mayo de 2026.
// =============================================================================
db.atletas.deleteMany({
  "registroControl.eliminado": true,
  "registroControl.fechaEliminacion": { $lt: ISODate("2026-05-01T00:00:00Z") }
});
