// Selección de la base de datos
use("campus_ordenes_soldadura");

// Consulta 1: Órdenes con inspección pendiente o en proceso con proyección limpia
db.ordenes.find(
  { estado_inspeccion: { $in: ["pendiente", "en_proceso"] } },
  { codigo_orden: 1, cliente: 1, proceso_soldadura: 1, estado_inspeccion: 1, _id: 0 }
);

// Consulta 2: Búsqueda sobre el array de etiquetas 
db.ordenes.find(
  { etiquetas: "estructural" },
  { codigo_orden: 1, material: 1, "soldador.nombre": 1, _id: 0 }
);

// Consulta 3: Actualización para cambiar estado de inspección y puntaje de calidad
db.ordenes.updateOne(
  { codigo_orden: "ORD-001" },
  { 
    $set: { 
      estado_inspeccion: "aprobado", 
      puntaje_calidad: 92 
    } 
  }
);

// Consulta 4: Reporte de conteo total de órdenes aprobadas
db.ordenes.countDocuments({ estado_inspeccion: "aprobado" });