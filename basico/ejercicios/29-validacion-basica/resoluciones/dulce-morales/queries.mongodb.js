use("campus_validacion_basica");

// 1. Consulta con filtro simple y proyección limpia (excluyendo _id)
db.registros.find(
  { activo: true, puntaje: { $gte: 90 } },
  { nombre: 1, categoria: 1, puntaje: 1, _id: 0 }
);

// 2. Búsqueda por coincidencia en un array de etiquetas
db.registros.find(
  { etiquetas: "cloud" },
  { nombre: 1, categoria: 1, etiquetas: 1, _id: 0 }
);

// 3. Operación de actualización atómica ($set y $push)
db.registros.updateOne(
  { nombre: "Pipeline de CI/CD Automation" },
  { 
    $set: { activo: true, puntaje: 82 },
    $push: { etiquetas: "optimizado" }
  }
);

// 4. Conteo de registros activos
db.registros.countDocuments({ activo: true });