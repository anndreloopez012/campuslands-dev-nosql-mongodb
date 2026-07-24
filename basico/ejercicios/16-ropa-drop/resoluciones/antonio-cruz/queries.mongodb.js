// Base de datos del ejercicio
use("campus_ropa_drop");

// Ver todas las prendas registradas
db.prendas.find();

// Productos que siguen disponibles
db.prendas.find(
  { disponible: true },
  {
    _id: 0,
    nombre: 1,
    precio: 1,
    stock: 1
  }
);

// Buscar prendas que tengan talla XL.
// MongoDB busca directamente dentro del array sin hacer nada extra.
db.prendas.find(
  { tallas: "XL" },
  {
    _id: 0,
    nombre: 1,
    tallas: 1
  }
);

// Camisetas con precio menor a Q200
db.prendas.find(
  {
    categoria: "camiseta",
    precio: { $lt: 200 }
  },
  {
    _id: 0,
    nombre: 1,
    precio: 1
  }
);

// Reporte sencillo ordenando de mayor a menor precio
db.prendas.find(
  {},
  {
    _id: 0,
    nombre: 1,
    categoria: 1,
    precio: 1
  }
).sort({ precio: -1 });

// El drop recibió una reposición de inventario
db.prendas.updateOne(
  { nombre: "Baggy Denim" },
  {
    $set: {
      stock: 18,
      disponible: true
    }
  }
);

// Validar que la actualización quedó aplicada
db.prendas.find(
  { nombre: "Baggy Denim" },
  {
    _id: 0,
    nombre: 1,
    stock: 1,
    disponible: 1
  }
);