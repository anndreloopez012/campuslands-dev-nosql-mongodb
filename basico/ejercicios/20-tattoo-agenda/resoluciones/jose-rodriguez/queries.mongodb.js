// Base de Datos de Estudio de Tatuajes - Consultas Simplificadas
use('estudio_tatuajes_db');

// =============================================================================
// CONSULTA 1: Búsqueda simple por estado de la cita
// Muestra todas las citas que están actualmente en estado "CONFIRMADA".
// =============================================================================
db.citas.find({ 
  estado: "CONFIRMADA" 
});


// =============================================================================
// CONSULTA 2: Búsqueda por rango de fechas de la cita ($gte y $lte)
// Encuentra las citas programadas para el mes de agosto de 2026.
// =============================================================================
db.citas.find({
  "fechas.fechaCita": {
    $gte: ISODate("2026-08-01T00:00:00Z"),
    $lte: ISODate("2026-08-31T23:59:59Z")
  }
});


// =============================================================================
// CONSULTA 3: Búsqueda combinada por Estado y Fecha
// Obtiene citas "COMPLETADO" cuya revisión de curación fue programada para agosto de 2026.
// =============================================================================
db.citas.find({
  estado: "COMPLETADO",
  "fechas.fechaRevisionCuracion": {
    $gte: ISODate("2026-08-01T00:00:00Z"),
    $lte: ISODate("2026-08-31T23:59:59Z")
  }
});


// =============================================================================
// CONSULTA 4: Búsqueda por atributo dentro del subdocumento de detalles
// Busca todos los trabajos solicitados en la zona del cuerpo "Espalda" o estilo "Blackwork".
// =============================================================================
db.citas.find({
  $or: [
    { "detallesTatuaje.zonaCuerpo": "Espalda" },
    { "detallesTatuaje.estilo": "Blackwork" }
  ]
});


// =============================================================================
// CONSULTA 5: Proyección simple de campos clave
// Muestra solo el ID de la cita, el estado, el estilo y la fecha de la cita (oculta _id si deseas).
// =============================================================================
db.citas.find(
  {}, 
  { 
    _id: 1, 
    estado: 1, 
    "detallesTatuaje.estilo": 1, 
    "fechas.fechaCita": 1, 
    "presupuesto.costoTotalUSD": 1 
  }
);
