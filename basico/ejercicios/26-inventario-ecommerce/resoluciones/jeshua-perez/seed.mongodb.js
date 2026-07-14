// 26. Inventario ecommerce (autos y motos)
// Solucion - jeshua-perez (nivel basico)
// Enfoque: stock y alertas

use campus_inventario_ecommerce

db.productos.drop()

db.createCollection("productos")

db.productos.insertMany([
  { nombre: "Filtro de aceite universal", categoria: "auto", precio: 35000, stock: 40, stockMinimo: 10 },
  { nombre: "Kit de frenos delanteros", categoria: "auto", precio: 180000, stock: 6, stockMinimo: 8 },
  { nombre: "Cadena de transmision 428H", categoria: "moto", precio: 95000, stock: 15, stockMinimo: 5 },
  { nombre: "Bujia de alto rendimiento", categoria: "moto", precio: 22000, stock: 3, stockMinimo: 12 },
  { nombre: "Bateria 12V 45Ah", categoria: "auto", precio: 260000, stock: 9, stockMinimo: 6 },
  { nombre: "Casco Integral DOT", categoria: "moto", precio: 210000, stock: 18, stockMinimo: 5 }
])
