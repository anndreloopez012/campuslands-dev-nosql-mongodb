// Conectarse a la base de datos
use("campus_assets_animacion");

// Consulta 1: Filtrar assets aprobados y con rigging disponible
db.assets.find(
  { estado: "aprobado", "especificaciones.rigged": true },
  { nombre: 1, categoria: 1, "especificaciones.formato": 1, precio: 1, _id: 0 }
);

// Consulta 2: Búsqueda de assets que contengan la etiqueta "props"
db.assets.find(
  { etiquetas: "props" },
  { nombre: 1, categoria: 1, estado: 1, _id: 0 }
);

// Consulta 3: Actualización cambiar estado a "aprobado" y ajustar precio
db.assets.updateOne(
  { nombre: "Espada Medieval Texturizada" },
  { 
    $set: { estado: "aprobado" },
    $inc: { precio: 15000 }
  }
);

// Consulta 4: Conteo total de assets aprobados en la plataforma
db.assets.countDocuments({ estado: "aprobado" });