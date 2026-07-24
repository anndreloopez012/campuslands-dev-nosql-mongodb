// Base de datos del ejercicio
use("campus_ropa_drop");

// Si vuelvo a correr el script prefiero partir desde cero
db.prendas.drop();

// Una sola colección es suficiente porque cada prenda vive con sus tallas.
// No tiene sentido separar las tallas en otra colección ya que siempre se
// consultan junto al producto.

db.prendas.insertMany([
  {
    nombre: "Oversize Black Tee",
    categoria: "camiseta",
    marca: "Urban Noise",
    color: "Negro",
    precio: 179,
    stock: 45,
    disponible: true,
    tallas: ["S", "M", "L", "XL"],
    lanzamiento: ISODate("2026-06-15")
  },
  {
    nombre: "Cargo Street Pants",
    categoria: "pantalon",
    marca: "District",
    color: "Gris",
    precio: 349,
    stock: 20,
    disponible: true,
    tallas: ["M", "L", "XL"],
    lanzamiento: ISODate("2026-06-18")
  },
  {
    nombre: "Classic Hoodie",
    categoria: "sudadera",
    marca: "Urban Noise",
    color: "Blanco",
    precio: 429,
    stock: 12,
    disponible: true,
    tallas: ["S", "M", "L"],
    lanzamiento: ISODate("2026-06-20")
  },
  {
    nombre: "Street Windbreaker",
    categoria: "chaqueta",
    marca: "Void",
    color: "Verde",
    precio: 599,
    stock: 8,
    disponible: true,
    tallas: ["M", "L"],
    lanzamiento: ISODate("2026-06-22")
  },
  {
    nombre: "Baggy Denim",
    categoria: "jeans",
    marca: "District",
    color: "Azul",
    precio: 389,
    stock: 0,
    disponible: false,
    tallas: ["S", "M", "L", "XL"],
    lanzamiento: ISODate("2026-06-25")
  }
]);