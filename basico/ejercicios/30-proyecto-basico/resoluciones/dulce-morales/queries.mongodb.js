use("campus_proyecto_basico");

// Consulta 1: Proyectos activos con puntaje mayor o igual a 90
db.proyectos.find(
  { activo: true, puntaje: { $gte: 90 } },
  { nombre: 1, categoria: 1, puntaje: 1, _id: 0 }
);

// Consulta 2: Búsqueda de proyectos que incluyan la etiqueta "campus"
db.proyectos.find(
  { etiquetas: "campus" },
  { nombre: 1, "detalles_campus.sede": 1, etiquetas: 1, _id: 0 }
);

// Consulta 3: Actualización de un proyecto ($set y $push)
db.proyectos.updateOne(
  { nombre: "Quantum Physics Lab Simulator" },
  { 
    $set: { activo: true, puntaje: 80 },
    $push: { etiquetas: "actualizado" }
  }
);

// Consulta 4: Reporte de conteo total de proyectos activos
db.proyectos.countDocuments({ activo: true });