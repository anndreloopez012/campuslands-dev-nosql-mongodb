// 29. Validacion basica de documentos
// Consultas - jeshua-perez

use campus_validacion_basica

// 1. Ver el catalogo completo
db.dispositivos.find({})

// 2. Confirmar que el validador quedo activo en la coleccion
db.getCollectionInfos({ name: "dispositivos" })

// 3. Insertar un documento valido (debe pasar el schema)
db.dispositivos.insertOne({
  nombre: "Accesorio Mouse Inalambrico",
  tipo: "accesorio",
  precio: 45000,
  stock: 30,
  activo: true
})

// 4. Intentar insertar un documento invalido: falta el campo "precio" (debe ser rechazado por el validador)
try {
  db.dispositivos.insertOne({
    nombre: "Celular Sin Precio",
    tipo: "celular",
    stock: 5,
    activo: true
  })
} catch (error) {
  print("Insercion rechazada por el schema: " + error.message)
}

// 5. Intentar insertar un tipo no permitido por el enum (debe ser rechazado)
try {
  db.dispositivos.insertOne({
    nombre: "Consola Retro",
    tipo: "consola",
    precio: 900000,
    stock: 4,
    activo: true
  })
} catch (error) {
  print("Insercion rechazada por el schema: " + error.message)
}

// 6. Actualizar un dispositivo dentro de las reglas del schema (sigue siendo valido)
db.dispositivos.updateOne(
  { nombre: "Laptop Office 13" },
  { $set: { stock: 5, activo: true } }
)
