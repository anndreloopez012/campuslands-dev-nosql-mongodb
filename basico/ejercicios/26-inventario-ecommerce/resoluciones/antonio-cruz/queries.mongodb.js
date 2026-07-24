// Base de datos del ejercicio
use("campus_inventario_ecommerce");

// Mostrar todo el inventario
db.productos.find();

// Productos disponibles para venta
db.productos.find(
  { estado: "disponible" },
  {
    _id: 0,
    nombre: 1,
    stock: 1
  }
);

// Detectar productos con stock bajo
// Esta consulta sirve para generar alertas automáticas del ecommerce.
db.productos.find(
  {
    $expr: {
      $lte: ["$stock", "$stockMinimo"]
    }
  },
  {
    _id: 0,
    nombre: 1,
    stock: 1,
    stockMinimo: 1
  }
);

// Buscar productos de motos
db.productos.find(
  { categoria: "motos" },
  {
    _id: 0,
    nombre: 1,
    marca: 1
  }
);

// Reporte ordenado por precio mayor a menor
db.productos.find(
  {},
  {
    _id: 0,
    nombre: 1,
    precio: 1
  }
).sort({ precio: -1 });

// Reposición de inventario de un producto
db.productos.updateOne(
  { nombre: "Llanta Deportiva Moto" },
  {
    $set: {
      stock: 10,
      estado: "disponible"
    }
  }
);

// Validar actualización realizada
db.productos.find(
  { nombre: "Llanta Deportiva Moto" },
  {
    _id: 0,
    nombre: 1,
    stock: 1,
    estado: 1
  }
);