use("campus_renders_arquitectura");

// Consulta 1: Filtrar renders activos por cliente específico
db.renders.find(
  { cliente: "Constructora Vértice S.A.", activo: true },
  { nombre: 1, categoria: 1, precio: 1, _id: 0 }
);

// Consulta 2: Búsqueda de renders que contengan la etiqueta "interior"
db.renders.find(
  { etiquetas: "interior" },
  { nombre: 1, cliente: 1, "detalles_tecnicos.software": 1, _id: 0 }
);

// Consulta 3: Actualización atómica ($set para precio y $push para nueva etiqueta)
db.renders.updateOne(
  { nombre: "Loft Minimalista Centro" },
  { 
    $set: { precio: 1400000 },
    $push: { etiquetas: "remodelacion" }
  }
);

// Consulta 4: Conteo total de renders activos en el sistema
db.renders.countDocuments({ activo: true });