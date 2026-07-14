// 29. Validacion basica de documentos
// Solucion - jeshua-perez (nivel basico)
// Enfoque: schema validation introductorio

use campus_validacion_basica

db.dispositivos.drop()

// createCollection con $jsonSchema: valida la forma minima de cada documento al insertar/actualizar
db.createCollection("dispositivos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "tipo", "precio", "stock", "activo"],
      properties: {
        nombre: { bsonType: "string", description: "debe ser texto y es obligatorio" },
        tipo: {
          enum: ["laptop", "celular", "tablet", "accesorio"],
          description: "debe ser uno de los tipos permitidos"
        },
        precio: { bsonType: "number", minimum: 0, description: "debe ser un numero positivo" },
        stock: { bsonType: "int", minimum: 0, description: "debe ser un entero positivo" },
        activo: { bsonType: "bool", description: "debe ser verdadero o falso" }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
})

db.dispositivos.insertMany([
  { nombre: "Laptop Ultra 14", tipo: "laptop", precio: 3200000, stock: 12, activo: true },
  { nombre: "Celular Nova X", tipo: "celular", precio: 1800000, stock: 25, activo: true },
  { nombre: "Tablet Studio 10", tipo: "tablet", precio: 1500000, stock: 8, activo: true },
  { nombre: "Cargador Rapido 65W", tipo: "accesorio", precio: 80000, stock: 40, activo: true },
  { nombre: "Laptop Office 13", tipo: "laptop", precio: 2200000, stock: 0, activo: false }
])
