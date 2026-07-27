// Base de Datos de Tecnología y Hardware - Script de Poblado (Seed) con Schema Validation
use('tecnologia_db');

// Limpieza de colecciones previas
db.categorias.drop();
db.productos_tech.drop();

// 1. Inserción de Categorías de Referencia (Colección: categorias)
db.categorias.insertMany([
  { _id: "CAT-COMP", nombre: "Cómputo y Laptops", descripcion: "Equipos portátiles y de escritorio" },
  { _id: "CAT-MOBI", nombre: "Dispositivos Móviles", descripcion: "Smartphones y Tablets" },
  { _id: "CAT-SERVI", nombre: "Servidores e Infraestructura", descripcion: "Equipos de Data Center y Redes" }
]);

// 2. Creación de Colección 'productos_tech' con VALIDACIÓN DE ESQUEMA ($jsonSchema)
db.createCollection("productos_tech", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "sku", "nombre", "categoriaId", "precioUSD", "especificacionesTecnicas", "etiquetas", "stock"],
      properties: {
        _id: {
          bsonType: "string",
          description: "El ID debe ser un string identificador único (ej. PRD-001)"
        },
        sku: {
          bsonType: "string",
          pattern: "^[A-Z]{3}-[0-9]{4}$",
          description: "El SKU debe cumplir el patrón de 3 letras mayúsculas, guion y 4 números (ej. LAP-2026)"
        },
        nombre: {
          bsonType: "string",
          description: "Nombre del producto es obligatorio y de tipo string"
        },
        categoriaId: {
          bsonType: "string",
          description: "Referencia a la categoría"
        },
        precioUSD: {
          bsonType: ["double", "int", "number"],
          minimum: 0.01,
          description: "El precio debe ser un número mayor a 0"
        },
        especificacionesTecnicas: {
          bsonType: "object",
          required: ["procesador", "ramGB", "almacenamientoGB"],
          properties: {
            procesador: { bsonType: "string" },
            ramGB: { bsonType: "int", minimum: 1 },
            almacenamientoGB: { bsonType: "int", minimum: 8 },
            garantiaMeses: { bsonType: "int" }
          }
        },
        etiquetas: {
          bsonType: "array",
          items: { bsonType: "string" },
          description: "Array de etiquetas o características clave"
        },
        stock: {
          bsonType: "object",
          required: ["actual", "disponible"],
          properties: {
            actual: { bsonType: "int", minimum: 0 },
            disponible: { bsonType: "bool" }
          }
        }
      }
    }
  },
  validationAction: "error", // Bloquea cualquier inserción que viole el esquema
  validationLevel: "strict"
});

// 3. Inserción de Documentos Válidos (Colección: productos_tech)
db.productos_tech.insertMany([
  {
    _id: "PRD-101",
    sku: "LAP-2026",
    nombre: "Workstation Pro X16",
    categoriaId: "CAT-COMP",
    precioUSD: 2499.99,
    especificacionesTecnicas: {
      procesador: "Intel Core i9 14th Gen",
      ramGB: NumberInt(64),
      almacenamientoGB: NumberInt(2048),
      garantiaMeses: NumberInt(36)
    },
    etiquetas: ["High-Performance", "DDR5", "OLED 4K", "NVMe"],
    stock: {
      actual: NumberInt(12),
      disponible: true
    },
    fechaLanzamiento: ISODate("2026-01-15T00:00:00Z")
  },
  {
    _id: "PRD-102",
    sku: "LAP-1010",
    nombre: "Ultrabook Slim 14",
    categoriaId: "CAT-COMP",
    precioUSD: 1150.00,
    especificacionesTecnicas: {
      procesador: "AMD Ryzen 7 8840U",
      ramGB: NumberInt(16),
      almacenamientoGB: NumberInt(512),
      garantiaMeses: NumberInt(12)
    },
    etiquetas: ["Ultraligera", "Batería 18h", "DDR5"],
    stock: {
      actual: NumberInt(25),
      disponible: true
    },
    fechaLanzamiento: ISODate("2026-03-01T00:00:00Z")
  },
  {
    _id: "PRD-103",
    sku: "PHN-5050",
    nombre: "Smartphone Nova Pro 5G",
    categoriaId: "CAT-MOBI",
    precioUSD: 899.50,
    especificacionesTecnicas: {
      procesador: "Snapdragon 8 Gen 3",
      ramGB: NumberInt(12),
      almacenamientoGB: NumberInt(256),
      garantiaMeses: NumberInt(12)
    },
    etiquetas: ["5G", "Camara 108MP", "Carga Rapida"],
    stock: {
      actual: NumberInt(40),
      disponible: true
    },
    fechaLanzamiento: ISODate("2026-04-10T00:00:00Z")
  },
  {
    _id: "PRD-104",
    sku: "SRV-9001",
    nombre: "Enterprise Rack Server R760",
    categoriaId: "CAT-SERVI",
    precioUSD: 5800.00,
    especificacionesTecnicas: {
      procesador: "Dual Xeon Platinum 8480+",
      ramGB: NumberInt(128),
      almacenamientoGB: NumberInt(8192),
      garantiaMeses: NumberInt(60)
    },
    etiquetas: ["Rack 2U", "Redundancia SAS", "Virtualizacion"],
    stock: {
      actual: NumberInt(4),
      disponible: true
    },
    fechaLanzamiento: ISODate("2026-02-20T00:00:00Z")
  }
]);
