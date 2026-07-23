// Base de datos del ejercicio
use("campus_validacion_basica");

// Mostrar todos los documentos almacenados
db.dispositivos.find();

// Consultar dispositivos activos
db.dispositivos.find(
  {
    activo: true
  },
  {
    _id: 0,
    nombre: 1,
    marca: 1
  }
);

// Buscar dispositivos de una categoría específica
db.dispositivos.find(
  {
    categoria: "periferico"
  },
  {
    _id: 0,
    nombre: 1,
    precio: 1
  }
);

// Buscar productos con precio mayor a Q2000
db.dispositivos.find(
  {
    precio: {
      $gt: 2000
    }
  },
  {
    _id: 0,
    nombre: 1,
    precio: 1
  }
);

// Reporte ordenado por precio
db.dispositivos.find(
  {},
  {
    _id: 0,
    nombre: 1,
    precio: 1
  }
).sort({
  precio: -1
});


// Actualización de estado del dispositivo
db.dispositivos.updateOne(
  {
    nombre: "Monitor 27 pulgadas"
  },
  {
    $set: {
      activo: true
    }
  }
);

// Validar actualización
db.dispositivos.find(
  {
    nombre: "Monitor 27 pulgadas"
  },
  {
    _id: 0,
    nombre: 1,
    activo: 1
  }
);