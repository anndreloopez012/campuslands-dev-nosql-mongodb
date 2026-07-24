// 16 - Drop de ropa urbana | juan-lema
// Seed: crea la BD/coleccion e inserta documentos originales
use campus_ropa_drop

db.registros.drop() // idempotente: limpia antes de sembrar

try {
  db.registros.insertMany([
    {
      nombre: "Hoodie Oversize Negro",
      categoria: "hoodie",
      precio: 189000,
      activo: true,
      tallas: [
        { talla: "S", stock: 4 },
        { talla: "M", stock: 10 },
        { talla: "L", stock: 6 },
        { talla: "XL", stock: 0 }
      ],
      etiquetas: ["streetwear", "unisex", "algodon"]
    },
    {
      nombre: "Jean Baggy Azul",
      categoria: "jean",
      precio: 145000,
      activo: true,
      tallas: [
        { talla: "28", stock: 3 },
        { talla: "30", stock: 8 },
        { talla: "32", stock: 5 }
      ],
      etiquetas: ["denim", "baggy"]
    },
    {
      nombre: "Camiseta Grafica Blanca",
      categoria: "camiseta",
      precio: 69000,
      activo: true,
      tallas: [
        { talla: "S", stock: 12 },
        { talla: "M", stock: 0 },
        { talla: "L", stock: 7 }
      ],
      etiquetas: ["basico", "print"]
    },
    {
      nombre: "Gorra Corduroy Verde",
      categoria: "gorra",
      precio: 55000,
      activo: false,
      tallas: [
        { talla: "unica", stock: 0 }
      ],
      etiquetas: ["accesorio", "descontinuado"]
    },
    {
      nombre: "Chaqueta Bomber Cafe",
      categoria: "chaqueta",
      precio: 259000,
      activo: true,
      tallas: [
        { talla: "M", stock: 2 },
        { talla: "L", stock: 5 },
        { talla: "XL", stock: 3 }
      ],
      etiquetas: ["invierno", "streetwear"]
    },
    {
      nombre: "Camiseta Grafica Negra",
      categoria: "camiseta",
      precio: 69000,
      activo: true,
      tallas: [
        { talla: "S", stock: 5 },
        { talla: "M", stock: 9 },
        { talla: "L", stock: 0 }
      ],
      etiquetas: ["basico", "print"]
    }
  ])
  print("Seed OK: 6 documentos insertados en registros")
} catch (e) {
  print("Error al sembrar datos: " + e.message)
}
