// Base de datos del ejercicio
use("campus_usuarios_streaming");

// Mostrar todos los usuarios
db.usuarios.find();

// Usuarios con plan premium
db.usuarios.find(
  { plan: "premium" },
  {
    _id: 0,
    nombre: 1,
    correo: 1
  }
);

// Usuarios activos del servicio
db.usuarios.find(
  { estado: "activo" },
  {
    _id: 0,
    nombre: 1,
    plan: 1
  }
);

// Buscar usuarios que tengan preferencia musical rock
db.usuarios.find(
  {
    "preferencias.generoMusica": "rock"
  },
  {
    _id: 0,
    nombre: 1,
    preferencias: 1
  }
);

// Reporte ordenado por fecha de registro
db.usuarios.find(
  {},
  {
    _id: 0,
    nombre: 1,
    fechaRegistro: 1
  }
).sort({ fechaRegistro: 1 });

// Cambiar usuario inactivo a activo
db.usuarios.updateOne(
  { nombre: "María García" },
  {
    $set: {
      estado: "activo"
    }
  }
);

// Validar actualización
db.usuarios.find(
  { nombre: "María García" },
  {
    _id: 0,
    nombre: 1,
    estado: 1
  }
);