// Seleccionar la base de datos de trabajo
use("campus_portafolio_dibujo");

// CONSULTA 1: Filtrar dibujos publicados y proyectar campos limpios
db.dibujos.find(
  { estado: "publicado" },
  { titulo: 1, categoria: 1, likes: 1, _id: 0 }
);

// CONSULTA 2: Búsqueda por coincidencia en array de etiquetas (tags)
db.dibujos.find(
  { etiquetas: "realismo" },
  { titulo: 1, "detalles.tecnica": 1, etiquetas: 1, _id: 0 }
);

// CONSULTA 3: Actualización 
db.dibujos.updateOne(
  { titulo: "Cyberpunk Samurai" },
  { 
    $push: { etiquetas: "neon" },
    $inc: { likes: 15 }
  }
);

// CONSULTA 4: Conteo de registros según estado activo/publicado
db.dibujos.countDocuments({ estado: "publicado" });