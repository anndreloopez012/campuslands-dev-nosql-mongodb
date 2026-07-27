// Base de Datos de Animación 3D - Consultas Simplificadas con .find()
use('animacion_3d_db');

// =============================================================================
// CONSULTA 1: Búsqueda simple por estado de pipeline
// Encuentra todas las tomas (shots) que se encuentran actualmente "EN_RENDER".
// =============================================================================
db.shots.find({ 
  estadoPipeline: "EN_RENDER" 
});


// =============================================================================
// CONSULTA 2: Filtrado por tomas que requieren revisión inmediata
// Busca tomas en estado "REVISION_REQUERIDA" pertenecientes al proyecto "PRJ-001".
// =============================================================================
db.shots.find({ 
  proyectoId: "PRJ-001",
  estadoPipeline: "REVISION_REQUERIDA"
});


// =============================================================================
// CONSULTA 3: Búsqueda por campo técnico dentro del subdocumento
// Obtiene todos los shots que utilizan el motor de render "Cycles" o "Arnold".
// =============================================================================
db.shots.find({ 
  "detallesTecnicos.motorRender": { $in: ["Cycles", "Arnold"] }
});


// =============================================================================
// CONSULTA 4: Búsqueda directa dentro del array de etiquetas técnicas
// Encuentra las tomas que contienen la etiqueta "Personaje".
// =============================================================================
db.shots.find({ 
  etiquetasTecnicas: "Personaje" 
});


// =============================================================================
// CONSULTA 5: Proyección limpia de estado y volumen de trabajo
// Muestra únicamente el código de la toma, el estado del pipeline, el software
// y el total de frames calculados (ocultando el _id).
// =============================================================================
db.shots.find(
  {}, 
  { 
    _id: 0, 
    codigoShot: 1, 
    estadoPipeline: 1, 
    software: "$detallesTecnicos.software",
    totalFrames: "$detallesTecnicos.totalFrames" 
  }
);
