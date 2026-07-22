// Ejercicio 29 - Validacion basica de documentos
// Autor: juan-lema
use("campus_validacion_basica");

// 1) Find all
db.registros.find({});

// 2) Find filtrado: disponibles ordenados por precio
db.registros.find(
  { disponible: true },
  { _id: 0, nombre: 1, categoria: 1, precio: 1 }
).sort({ precio: 1 });

// 3) UpdateOne: marcar Monitor Vista 27 como disponible
db.registros.updateOne(
  { nombre: "Monitor Vista 27" },
  { $set: { disponible: true } }
);
db.registros.findOne({ nombre: "Monitor Vista 27" }, { disponible: 1, _id: 0 });

// 4) DeleteOne: eliminar el accesorio "Teclado Mecanico Click"
db.registros.deleteOne({ nombre: "Teclado Mecanico Click" });
db.registros.countDocuments();

// 5) Prueba del validator: intento de insert invalido (categoria fuera de enum)
// Se espera un error de tipo DocumentValidationFailure; manejado con try/catch.
try {
  db.registros.insertOne({
    nombre: "Producto Invalido",
    categoria: "tablet", // no esta en el enum permitido
    precio: 100,
    disponible: true,
    especificaciones: { ram_gb: 4 }
  });
} catch (err) {
  print("Insert rechazado por el validator: " + err.message);
}
