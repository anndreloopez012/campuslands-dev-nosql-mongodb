// Base de Datos de Paracaidismo - Consultas Directas y Simplificadas
use('paracaidismo_db');

// =============================================================================
// CONSULTA 1: Búsqueda simple por estado de autorización
// Encuentra todos los saltos que están completamente "AUTORIZADOS" para despegar.
// =============================================================================
db.saltos.find({ 
  estadoVuelo: "AUTORIZADO" 
});


// =============================================================================
// CONSULTA 2: Filtrado por falla en validación manual
// Encuentra los saltos retenidos porque falta la firma de exención de responsabilidad.
// =============================================================================
db.saltos.find({ 
  "validacionesManuales.exencionResponsabilidadFirmada": false 
});


// =============================================================================
// CONSULTA 3: Proyección simple de información de vuelo
// Muestra únicamente el ID del salto, el tipo, la altitud y quién aprobó la revisión.
// =============================================================================
db.saltos.find(
  {}, 
  { 
    _id: 1, 
    tipoSalto: 1, 
    altitudPies: 1, 
    "validacionesManuales.revisadoPorOficialSeguridad": 1 
  }
);


// =============================================================================
// CONSULTA 4: Búsqueda en paracaidistas por experiencia o licencia
// Busca paracaidistas con nivel de licencia "D" O que tengan más de 500 saltos acumulados.
// =============================================================================
db.paracaidistas.find({
  $or: [
    { nivelLicencia: "D" },
    { totalSaltos: { $gte: 500 } }
  ]
});


// =============================================================================
// CONSULTA 5: Filtrado de equipos con revisión pendiente o sin dispositivo activo
// Muestra los equipos que necesitan inspección o cuya apertura automática no está activa.
// =============================================================================
db.equipos.find({
  $or: [
    { estadoInspeccion: "REVISION_PENDIENTE" },
    { "dispositivoAperturaAutomatica.activo": false }
  ]
});
