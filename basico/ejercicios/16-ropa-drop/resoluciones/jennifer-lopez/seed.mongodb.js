// Drop de ropa urbana
// Solución de Denise López - Ejercicio 16

use campus_ropa_drop

// Crear la colección principal en minúsculas y plural
db.createCollection("productos")

// Insertar 5 prendas de streetwear con marcas reconocidas y arrays de tallas
db.productos.insertMany([
  {
    prenda: "Box Logo Oversized Hoodie",
    marca: "Supreme",
    categoria: "Hoodies",
    precio_usd: 178.00,
    coleccion_drop: "Fall/Winter 2026",
    tallas_disponibles: ["S", "M", "L", "XL"],
    colores: ["Negro", "Gris", "Rojo"],
    stock_total: 45,
    agotado: false
  },
  {
    prenda: "World Tour Pigment Dyed Tee",
    marca: "Stüssy",
    categoria: "Camisetas",
    precio_usd: 55.00,
    coleccion_drop: "Summer Drop",
    tallas_disponibles: ["M", "L", "XL"],
    colores: ["Blanco", "Verde Oliva"],
    stock_total: 30,
    agotado: false
  },
  {
    prenda: "Air Jordan 1 Retro High OG",
    marca: "Nike",
    categoria: "Sneakers",
    precio_usd: 180.00,
    coleccion_drop: "Heritage Drop",
    tallas_disponibles: ["40", "41", "42", "43", "44"],
    colores: ["Chicago Red", "Black"],
    stock_total: 12,
    agotado: false
  },
  {
    prenda: "Caravaggio Arrow Oversized T-Shirt",
    marca: "Off-White",
    categoria: "Camisetas",
    precio_usd: 340.00,
    coleccion_drop: "Capsule Collection",
    tallas_disponibles: ["XS", "S"],
    colores: ["Negro"],
    stock_total: 5,
    agotado: false
  },
  {
    prenda: "Essentials Fleece Jogger Pants",
    marca: "Fear of God",
    categoria: "Pantalones",
    precio_usd: 90.00,
    coleccion_drop: "Core Collection",
    tallas_disponibles: ["S", "M", "L"],
    colores: ["Beige", "Gris Melange"],
    stock_total: 0,
    agotado: true
  }
])

// Índices para acelerar filtros por marca, tallas y prendas disponibles
db.productos.createIndex({ marca: 1 })
db.productos.createIndex({ tallas_disponibles: 1 })
db.productos.createIndex({ agotado: 1 })