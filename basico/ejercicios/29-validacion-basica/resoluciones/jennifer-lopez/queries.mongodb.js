// Validación básica de documentos - Consultas y Operaciones
// Solución de Denise López - Ejercicio 29

use campus_validacion_basica

// 1. Consulta general requerida por la plantilla base
db.dispositivos.find({})

// 2. Consulta de equipos en estado "Operativo" con precio mayor a $1,000 USD
db.dispositivos.find(
  { estado: "Operativo", precio_usd: { $gt: 1000.00 } },
  { codigo_activo: 1, nombre_equipo: 1, categoria: 1, precio_usd: 1, _id: 0 }
)

// 3. Consulta por etiqueta de tecnología (Búsqueda en arreglos)
db.dispositivos.find(
  { etiquetas: "docker" },
  { nombre_equipo: 1, responsable: 1, sede_laboratorio: 1, etiquetas: 1, _id: 0 }
)

// 4. Reporte simple: Equipos por sede de laboratorio y estado
db.dispositivos.find(
  { estado: { $ne: "Retirado" } },
  { codigo_activo: 1, nombre_equipo: 1, sede_laboratorio: 1, estado: 1, _id: 0 }
)

// 5. Operación de actualización (Update): Pasar equipo de Mantenimiento a Operativo
db.dispositivos.updateOne(
  { codigo_activo: "DEV-NET-003" },
  {
    $set: {
      estado: "Operativo"
    }
  }
)

// 6. Inserción de un nuevo equipo válido en el laboratorio Semuc Champey
db.dispositivos.insertOne({
  codigo_activo: "DEV-LPT-006",
  nombre_equipo: "Laptop de Pruebas Docker y Git",
  categoria: "Laptop",
  responsable: "Xanthos Escandón",
  sede_laboratorio: "Laboratorio Semuc Champey",
  pais: "Guatemala",
  precio_usd: 1350.00,
  estado: "Operativo",
  especificaciones: {
    procesador: "Intel Core i7 13th Gen",
    ram_gb: 16
  },
  etiquetas: ["git", "docker", "testing"],
  fecha_alta: ISODate("2026-07-22T00:00:00Z")
})

// 7. Prueba de validación fallida (Comentada para referencia de pruebas)
// Intento de insertar un equipo con categoría inválida o precio negativo arrojará DocumentValidationFailure:
/*
db.dispositivos.insertOne({
  codigo_activo: "DEV-ERR-007",
  nombre_equipo: "Equipo Inválido",
  categoria: "Categoría Inexistente", // Error: no está en el enum
  responsable: "Tester",
  sede_laboratorio: "Sede Error",
  precio_usd: -50.00, // Error: mínimo es 0
  estado: "Operativo"
})
*/