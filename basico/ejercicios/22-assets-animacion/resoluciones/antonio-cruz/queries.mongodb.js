// Base de datos del ejercicio
use("campus_assets_animacion");

// Mostrar todos los assets
db.assets.find();

// Assets que ya fueron aprobados
db.assets.find(
  { estado: "aprobado" },
  {
    _id: 0,
    nombre: 1,
    tipo: 1
  }
);

// Assets que siguen en revisión
db.assets.find(
  { estado: "revision" },
  {
    _id: 0,
    nombre: 1,
    autor: 1
  }
);

// Assets con formato FBX
db.assets.find(
  { formato: "FBX" },
  {
    _id: 0,
    nombre: 1,
    estado: 1
  }
);

// Reporte ordenado por tamaño
db.assets.find(
  {},
  {
    _id: 0,
    nombre: 1,
    pesoMB: 1
  }
).sort({ pesoMB: -1 });

// El asset terminó la revisión y fue aprobado
db.assets.updateOne(
  { nombre: "Casa Medieval" },
  {
    $set: {
      estado: "aprobado"
    }
  }
);

// Confirmar que el cambio quedó registrado
db.assets.find(
  { nombre: "Casa Medieval" },
  {
    _id: 0,
    nombre: 1,
    estado: 1
  }
);