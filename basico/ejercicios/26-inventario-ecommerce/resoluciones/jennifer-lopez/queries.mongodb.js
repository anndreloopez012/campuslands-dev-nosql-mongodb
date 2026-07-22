// Inventario ecommerce - Consultas y Operaciones
// Solución de Denise López - Ejercicio 26

use campus_inventario_ecommerce

// 1. Consulta general requerida por la plantilla base
db.vehiculos.find({})

// 2. Consulta de alertas: Buscar productos donde el stock actual sea menor o igual al stock mínimo
db.vehiculos.find(
  { $expr: {$lte: ["$inventario.stock_actual", "$inventario.stock_minimo"] } },
  { codigo_sku: 1, nombre_modelo: 1, "inventario.stock_actual": 1, "inventario.stock_minimo": 1, _id: 0 }
)

// 3. Consulta por tipo de vehículo y precio máximo
db.vehiculos.find(
  { tipo_vehiculo: "Moto", precio_usd: { $lte: 50000.0 } },
  { codigo_sku: 1, nombre_modelo: 1, precio_usd: 1, sede_almacen: 1, _id: 0 }
)

// 4. Reporte simple: Filtrar vehículos que requieren alerta de reorden
db.vehiculos.find(
  { "inventario.alerta_reorden": true },
  { codigo_sku: 1, nombre_modelo: 1, encargado_inventario: 1, sede_almacen: 1, _id: 0 }
)

// 5. Operación de actualización (Update): Reabastecer stock y desactivar la alerta en el DeLorean
db.vehiculos.updateOne(
  { codigo_sku: "AUTO-DMC-003" },
  {
    $inc: { "inventario.stock_actual": 5 },
    $set: {
      "inventario.alerta_reorden": false,
      "inventario.nivel_alerta": "Normal"
    }
  }
)

// 6. Inserción de un nuevo vehículo registrado en Semuc Champey, Guatemala
db.vehiculos.insertOne({
  codigo_sku: "AUTO-M50-006",
  nombre_modelo: "Mach 5 de Carreras Meteoro",
  tipo_vehiculo: "Auto",
  marca: "Mifune Motors",
  referencia_popular: "Speed Racer",
  encargado_inventario: "Zephyrine Valdivia",
  sede_almacen: "Sede Semuc Champey",
  pais: "Guatemala",
  precio_usd: 95000.0,
  inventario: {
    stock_actual: 4,
    stock_minimo: 2,
    alerta_reorden: false,
    nivel_alerta: "Normal"
  },
  especificaciones: {
    motor: "V12 Modificado",
    combustible: "Gasolina de Alto Octanaje",
    transmision: "Manual 6 velocidades"
  },
  fecha_ingreso: ISODate("2026-07-22T00:00:00Z")
})