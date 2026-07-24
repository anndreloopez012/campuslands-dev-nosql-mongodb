// Selecciona la base de datos de trabajo
use("campus_viajes_mochileros");

// Consulta 1: Filtrar viajes con presupuesto menor a 3,500,000 COP usando proyecciones limpias
db.viajes.find(
  { "presupuesto.estimado_cop": { $lt: 3500000 } },
  { destino_principal: 1, paises: 1, "presupuesto.estimado_cop": 1, _id: 0 }
);

// Consulta 2: Buscar viajes que incluyan la actividad clave "hostales" en su array
db.viajes.find(
  { actividades_clave: "hostales" },
  { destino_principal: 1, duracion_dias: 1, actividades_clave: 1, _id: 0 }
);

// Consulta 3: Actualización para añadir una nueva actividad y actualizar presupuesto
db.viajes.updateOne(
  { destino_principal: "Ruta Centroamericana" },
  { 
    $push: { actividades_clave: "lagos" },
    $set: { "presupuesto.estimado_cop": 1950000 }
  }
);

// Consulta 4: Reporte de conteo total de viajes activos
db.viajes.countDocuments({ activo: true });