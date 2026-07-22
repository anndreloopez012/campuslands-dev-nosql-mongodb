// Ejercicio 29 - Validacion basica de documentos
// Autor: juan-lema
use("campus_validacion_basica");

// Crear coleccion con schema validation basico
db.createCollection("registros", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "categoria", "precio", "disponible", "especificaciones"],
      properties: {
        nombre: { bsonType: "string", description: "requerido, string" },
        categoria: {
          bsonType: "string",
          enum: ["laptop", "celular", "monitor", "accesorio"],
          description: "requerido, una de las categorias permitidas"
        },
        precio: { bsonType: ["double", "int"], minimum: 0, description: "requerido, numero >= 0" },
        disponible: { bsonType: "bool", description: "requerido, booleano" },
        etiquetas: { bsonType: "array", items: { bsonType: "string" } },
        especificaciones: {
          bsonType: "object",
          required: ["ram_gb"],
          properties: {
            ram_gb: { bsonType: "int", minimum: 1, description: "requerido, entero > 0" },
            almacenamiento_gb: { bsonType: "int", minimum: 0 }
          }
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});

// Insertar documentos validos (5)
db.registros.insertMany([
  {
    nombre: "Laptop Nimbus 14",
    categoria: "laptop",
    precio: 899.99,
    disponible: true,
    etiquetas: ["portatil", "trabajo"],
    especificaciones: { ram_gb: 16, almacenamiento_gb: 512 }
  },
  {
    nombre: "Celular Orion X",
    categoria: "celular",
    precio: 549.5,
    disponible: true,
    etiquetas: ["android", "gama-media"],
    especificaciones: { ram_gb: 8, almacenamiento_gb: 128 }
  },
  {
    nombre: "Monitor Vista 27",
    categoria: "monitor",
    precio: 210,
    disponible: false,
    etiquetas: ["144hz", "gaming"],
    especificaciones: { ram_gb: 1, almacenamiento_gb: 0 }
  },
  {
    nombre: "Teclado Mecanico Click",
    categoria: "accesorio",
    precio: 45.9,
    disponible: true,
    etiquetas: ["perifericos"],
    especificaciones: { ram_gb: 1 }
  },
  {
    nombre: "Laptop Corex Pro",
    categoria: "laptop",
    precio: 1299,
    disponible: false,
    etiquetas: ["portatil", "premium"],
    especificaciones: { ram_gb: 32, almacenamiento_gb: 1024 }
  }
]);

// Verificacion rapida de insercion
db.registros.countDocuments();
