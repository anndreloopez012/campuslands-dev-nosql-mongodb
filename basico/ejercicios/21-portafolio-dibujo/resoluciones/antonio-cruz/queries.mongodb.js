// Base de datos del ejercicio
use("campus_portafolio_dibujo");

// Mostrar todos los dibujos
db.dibujos.find();

// Dibujos publicados
db.dibujos.find(
  { publicado: true },
  {
    _id: 0,
    titulo: 1,
    tecnica: 1
  }
);

// Buscar dibujos con la etiqueta "fantasia"
db.dibujos.find(
  { etiquetas: "fantasia" },
  {
    _id: 0,
    titulo: 1,
    etiquetas: 1
  }
);

// Dibujos realizados en técnica digital
db.dibujos.find(
  { tecnica: "Digital" },
  {
    _id: 0,
    titulo: 1,
    autor: 1
  }
);

// Reporte ordenado por fecha de creación
db.dibujos.find(
  {},
  {
    _id: 0,
    titulo: 1,
    fecha: 1
  }
).sort({ fecha: -1 });

// El dibujo ya fue publicado
db.dibujos.updateOne(
  { titulo: "Dragón Oriental" },
  {
    $set: {
      publicado: true
    }
  }
);

// Confirmar la actualización
db.dibujos.find(
  { titulo: "Dragón Oriental" },
  {
    _id: 0,
    titulo: 1,
    publicado: 1
  }
);