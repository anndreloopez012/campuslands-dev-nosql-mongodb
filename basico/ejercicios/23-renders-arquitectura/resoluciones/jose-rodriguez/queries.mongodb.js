// Base de Datos de Diseño 3D Arquitectura - Consultas Simplificadas por Cliente
use('archviz_3d_db');

// =============================================================================
// CONSULTA 1: Todos los proyectos de un cliente específico por su ID
// Obtiene el catálogo completo de proyectos 3D de "Inmobiliaria Bosques del Norte" (CLI-001).
// =============================================================================
db.proyectos3d.find({ 
  clienteId: "CLI-001" 
});


// =============================================================================
// CONSULTA 2: Proyectos de un cliente que están en etapa de revisión
// Muestra los proyectos del cliente "CLI-001" que están esperando su aprobación.
// =============================================================================
db.proyectos3d.find({ 
  clienteId: "CLI-001",
  estadoProyecto: "REVISION_CLIENTE"
});


// =============================================================================
// CONSULTA 3: Proyectos de un cliente con saldo pendiente de pago
// Busca los proyectos de "CLI-001" donde aún no se ha completado el pago total.
// =============================================================================
db.proyectos3d.find({ 
  clienteId: "CLI-001",
  "presupuesto.pagadoTotalmente": false
});


// =============================================================================
// CONSULTA 4: Búsqueda de proyectos de un cliente por software de renderizado
// Filtra proyectos del cliente "CLI-002" trabajados en "Corona Renderer".
// =============================================================================
db.proyectos3d.find({ 
  clienteId: "CLI-002",
  "especificacionesTecnicas.motorRender": "Corona Renderer"
});


// =============================================================================
// CONSULTA 5: Proyección limpia del estado de proyectos por cliente
// Muestra únicamente el nombre del proyecto, estado, motor de render y el saldo
// total de proyectos pertenecientes al cliente "CLI-001" (ocultando el _id).
// =============================================================================
db.proyectos3d.find(
  { clienteId: "CLI-001" }, 
  { 
    _id: 0, 
    nombreProyecto: 1, 
    estadoProyecto: 1, 
    motorRender: "$especificacionesTecnicas.motorRender",
    montoTotalUSD: "$presupuesto.montoTotalUSD",
    pagadoTotalmente: "$presupuesto.pagadoTotalmente"
  }
);
