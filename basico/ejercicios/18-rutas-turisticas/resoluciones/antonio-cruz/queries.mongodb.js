// Base de datos del ejercicio
use("campus_rutas_turisticas");

// Mostrar todas las rutas
db.rutas.find();

// Rutas que actualmente están disponibles
db.rutas.find(
  { activa: true },
  {
    _id: 0,
    nombre: 1,
    departamento: 1
  }
);

// Rutas con dificultad alta
db.rutas.find(
  { dificultad: "Alta" },
  {
    _id: 0,
    nombre: 1,
    distanciaKm: 1
  }
);

// Recorridos menores o iguales a 10 kilómetros
db.rutas.find(
  {
    distanciaKm: { $lte: 10 }
  },
  {
    _id: 0,
    nombre: 1,
    distanciaKm: 1
  }
);

// Reporte ordenado por duración
db.rutas.find(
  {},
  {
    _id: 0,
    nombre: 1,
    duracionHoras: 1
  }
).sort({ duracionHoras: -1 });

// La ruta de Xela vuelve a estar habilitada
db.rutas.updateOne(
  { nombre: "Miradores de Xela" },
  {
    $set: {
      activa: true
    }
  }
);

// Verificar el cambio
db.rutas.find(
  { nombre: "Miradores de Xela" },
  {
    _id: 0,
    nombre: 1,
    activa: 1
  }
);