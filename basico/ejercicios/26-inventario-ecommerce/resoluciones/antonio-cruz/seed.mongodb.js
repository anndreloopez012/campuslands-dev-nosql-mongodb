// Base de datos del ejercicio
use("campus_inventario_ecommerce");

// Limpio la colección para que la carga inicial sea repetible
db.productos.drop();

// Cada documento representa un producto del inventario.
// Los datos de stock se mantienen junto al producto porque normalmente se
// consultan juntos para generar alertas de disponibilidad.

db.productos.insertMany([
  {
    nombre: "Moto Freedom FXR150",
    categoria: "motos",
    marca: "Freedom",
    modelo: "FXR150",
    precio: 18500,
    stock: 8,
    stockMinimo: 3,
    estado: "disponible"
  },
  {
    nombre: "Casco Integral Deportivo",
    categoria: "accesorios",
    marca: "LS2",
    modelo: "Rapid",
    precio: 950,
    stock: 2,
    stockMinimo: 5,
    estado: "alerta_stock"
  },
  {
    nombre: "Aceite Sintético 10W40",
    categoria: "repuestos",
    marca: "Motul",
    modelo: "7100",
    precio: 180,
    stock: 15,
    stockMinimo: 5,
    estado: "disponible"
  },
  {
    nombre: "Pickup Toyota Hilux",
    categoria: "autos",
    marca: "Toyota",
    modelo: "Hilux",
    precio: 245000,
    stock: 4,
    stockMinimo: 2,
    estado: "disponible"
  },
  {
    nombre: "Llanta Deportiva Moto",
    categoria: "repuestos",
    marca: "Michelin",
    modelo: "Pilot Street",
    precio: 750,
    stock: 1,
    stockMinimo: 4,
    estado: "alerta_stock"
  }
]);