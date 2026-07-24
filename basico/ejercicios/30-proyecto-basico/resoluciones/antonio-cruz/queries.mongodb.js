// Base de datos del ejercicio
use("campus_proyecto_basico");

// Mostrar todos los videojuegos registrados
db.videojuegos.find();

// Buscar videojuegos activos
db.videojuegos.find(
  {
    estado: "activo"
  },
  {
    _id: 0,
    titulo: 1,
    genero: 1
  }
);

// Buscar juegos disponibles para PC
db.videojuegos.find(
  {
    plataforma: "PC"
  },
  {
    _id: 0,
    titulo: 1,
    desarrollador: 1
  }
);

// Buscar juegos con más de 100 jugadores
db.videojuegos.find(
  {
    jugadores: {
      $gt: 100
    }
  },
  {
    _id: 0,
    titulo: 1,
    jugadores: 1
  }
);

// Reporte ordenado por cantidad de jugadores
db.videojuegos.find(
  {},
  {
    _id: 0,
    titulo: 1,
    jugadores: 1
  }
).sort({
  jugadores: -1
});


// Actualizar estado de un videojuego
db.videojuegos.updateOne(
  {
    titulo: "Campus Racing"
  },
  {
    $set: {
      estado: "activo"
    }
  }
);

// Validar actualización realizada
db.videojuegos.find(
  {
    titulo: "Campus Racing"
  },
  {
    _id: 0,
    titulo: 1,
    estado: 1
  }
);