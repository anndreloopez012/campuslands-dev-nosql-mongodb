// Ejercicio 26 - Inventario ecommerce (autos y motos)
// Autor: juan-lema
// Seed de datos originales para la coleccion "registros"

use campus_inventario_ecommerce;

try {
  db.createCollection("registros");
} catch (e) {
  print("Coleccion ya existe, continuando...");
}

db.registros.insertMany([
  {
    nombre: "Casco Integral MT Thunder",
    categoria: "moto",
    marca: "MT Helmets",
    precio_base: 320000,
    stock_total: 18,
    alerta_stock_bajo: false,
    activo: true,
    variantes: [
      { talla: "M", color: "negro-mate", stock: 8, precio: 320000 },
      { talla: "L", color: "rojo", stock: 10, precio: 330000 }
    ],
    etiquetas: ["seguridad", "moto", "accesorio"],
    creado_en: new Date("2026-01-10")
  },
  {
    nombre: "Bateria 12V Auto Sedan",
    categoria: "auto",
    marca: "PowerCell",
    precio_base: 480000,
    stock_total: 4,
    alerta_stock_bajo: true,
    activo: true,
    variantes: [
      { modelo_compatible: "sedan-1.6L", stock: 4, precio: 480000 }
    ],
    etiquetas: ["repuesto", "electrico", "critico"],
    creado_en: new Date("2026-02-03")
  },
  {
    nombre: "Kit Frenos Delanteros Moto",
    categoria: "repuesto",
    marca: "BrakePro",
    precio_base: 145000,
    stock_total: 25,
    alerta_stock_bajo: false,
    activo: true,
    variantes: [
      { tipo: "disco", stock: 15, precio: 145000 },
      { tipo: "tambor", stock: 10, precio: 130000 }
    ],
    etiquetas: ["frenos", "moto", "repuesto"],
    creado_en: new Date("2026-02-20")
  },
  {
    nombre: "Llanta Aro 15 Auto",
    categoria: "auto",
    marca: "RoadGrip",
    precio_base: 390000,
    stock_total: 2,
    alerta_stock_bajo: true,
    activo: true,
    variantes: [
      { medida: "195/65R15", stock: 2, precio: 390000 }
    ],
    etiquetas: ["llanta", "auto", "critico"],
    creado_en: new Date("2026-03-01")
  },
  {
    nombre: "Aceite Sintetico 4T Moto",
    categoria: "moto",
    marca: "LubMax",
    precio_base: 85000,
    stock_total: 40,
    alerta_stock_bajo: false,
    activo: true,
    variantes: [
      { presentacion: "1L", stock: 30, precio: 85000 },
      { presentacion: "4L", stock: 10, precio: 300000 }
    ],
    etiquetas: ["lubricante", "moto", "mantenimiento"],
    creado_en: new Date("2026-03-15")
  },
  {
    nombre: "Espejo Retrovisor Auto Universal",
    categoria: "repuesto",
    marca: "VisionFit",
    precio_base: 60000,
    stock_total: 0,
    alerta_stock_bajo: true,
    activo: false,
    variantes: [
      { lado: "izquierdo", stock: 0, precio: 60000 },
      { lado: "derecho", stock: 0, precio: 60000 }
    ],
    etiquetas: ["espejo", "auto", "agotado"],
    creado_en: new Date("2026-03-22")
  }
]);

print("Seed insertado: " + db.registros.countDocuments({}) + " documentos.");
