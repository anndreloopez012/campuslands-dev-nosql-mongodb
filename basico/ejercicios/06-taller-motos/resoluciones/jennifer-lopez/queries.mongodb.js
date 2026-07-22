// Órdenes de taller de motos - Consultas y Operaciones
// Solución de Denise López - Ejercicio 06

use campus_taller_motos

// 1. Consulta general para obtener todos los registros (requerido por la plantilla base)
db.ordenes.find({})

// 2. Consulta con proyección: Mostrar código de orden, cliente, placa y estado
db.ordenes.find(
  { estado: "En Proceso" },
  { codigo_orden: 1, cliente: 1, "moto.placa": 1, estado: 1, _id: 0 }
)

// 3. Consulta en subdocumentos: Buscar órdenes asociadas a motos de marca "Yamaha"
db.ordenes.find(
  { "moto.marca": "Yamaha" },
  { codigo_orden: 1, cliente: 1, "moto.modelo": 1, _id: 0 }
)

// 4. Consulta en arrays: Buscar órdenes que incluyan el repuesto "Filtro de aceite"
db.ordenes.find(
  { repuestos: "Filtro de aceite" },
  { codigo_orden: 1, cliente: 1, repuestos: 1, _id: 0 }
)

// 5. Operación de actualización (Update): Cambiar estado a "Completado", sumar costo y agregar un nuevo servicio
db.ordenes.updateOne(
  { codigo_orden: "ORD-101" },
  { 
    $set: { estado: "Completado" },
    $inc: { costo_total: 25000 },$push: { servicios_realizados: "Lavado general" }
  }
)