// Pedidos foodtruck - Consultas y Operaciones
// Solución de Denise López - Ejercicio 15

use campus_foodtruck_campus

// 1. Consulta general requerida por la plantilla base
db.pedidos.find({})

// 2. Consulta de cocina: Ver todos los pedidos pendientes o en preparación
db.pedidos.find(
  { estado: { $in: ["pendiente", "en_preparacion"] } },
  { cliente: 1, num_mesa_o_ticket: 1, estado: 1, items: 1, _id: 0 }
)

// 3. Insertar un nuevo pedido entrante con cliente poco común (InsertOne)
db.pedidos.insertOne({
  cliente: "Elysia Pendelton",
  num_mesa_o_ticket: 106,
  estado: "pendiente",
  items: [
    { producto: "McNuggets 10 piezas", restaurante_estilo: "McDonald's", cantidad: 1, precio_unitario: 5.50 }
  ],
  total_usd: 5.50,
  metodo_pago: "efectivo",
  para_llevar: true,
  fecha: new Date()
})

// 4. Operación de actualización: Cambiar estado de ticket 101 a "en_preparacion"
db.pedidos.updateOne(
  { num_mesa_o_ticket: 101 },
  { $set: { estado: "en_preparacion" } }
)

// 5. Agregar un ítem extra a un pedido existente ($push e$inc)
db.pedidos.updateOne(
  { num_mesa_o_ticket: 102 },
  {
    $push: {
      items: { producto: "Bebida Grande Taco Bell", restaurante_estilo: "Taco Bell", cantidad: 1, precio_unitario: 2.50 }
    },
    $inc: { total_usd: 2.50 }
  }
)