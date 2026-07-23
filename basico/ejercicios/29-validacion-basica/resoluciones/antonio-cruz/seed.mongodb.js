// Base de datos del ejercicio
use("campus_validacion_basica");

// Eliminamos la colección para poder ejecutar nuevamente el script
db.dispositivos.drop();

// Se agrega validación básica para asegurar que los documentos mantengan
// una estructura mínima antes de ser almacenados.

db.createCollection("dispositivos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "nombre",
        "categoria",
        "marca",
        "precio",
        "activo"
      ],
      properties: {
        nombre: {
          bsonType: "string"
        },
        categoria: {
          bsonType: "string"
        },
        marca: {
          bsonType: "string"
        },
        precio: {
          bsonType: "number",
          minimum: 0
        },
        activo: {
          bsonType: "bool"
        }
      }
    }
  }
});

// Insertamos documentos que cumplen con la estructura definida

db.dispositivos.insertMany([
  {
    nombre: "Laptop Pro",
    categoria: "computadora",
    marca: "Lenovo",
    precio: 8500,
    activo: true
  },
  {
    nombre: "Smartphone X",
    categoria: "telefono",
    marca: "Samsung",
    precio: 4500,
    activo: true
  },
  {
    nombre: "Teclado Mecánico",
    categoria: "periferico",
    marca: "Logitech",
    precio: 700,
    activo: true
  },
  {
    nombre: "Monitor 27 pulgadas",
    categoria: "pantalla",
    marca: "LG",
    precio: 2200,
    activo: false
  },
  {
    nombre: "Mouse Gamer",
    categoria: "periferico",
    marca: "Razer",
    precio: 900,
    activo: true
  }
]);