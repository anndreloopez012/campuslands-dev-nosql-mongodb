// Ejercicio 15 - Pedidos foodtruck
// Autor: juan-lema
use campus_foodtruck_campus;

// 1. Listar todos los pedidos
db.registros.find({});

// 2. Filtrar pedidos pendientes de un foodtruck especifico
db.registros.find(
  { estado: "pendiente", "foodtruck.nombre": "Tacos Al Vapor" },
  { cliente: 1, items: 1, total: 1, _id: 0 }
);

// 3. Insertar un nuevo pedido
db.registros.insertOne({
  cliente: { nombre: "Valentina Rios", telefono: "3167891234" },
  foodtruck: { nombre: "Burger Express", ubicacion: "Plazoleta Central" },
  items: [{ producto: "Combo sencillo", cantidad: 1, precioUnitario: 20000 }],
  total: 20000,
  estado: "pendiente",
  metodoPago: "efectivo",
  fechaPedido: new Date("2026-07-15T13:40:00"),
  notas: ""
});

// 4. Actualizar el estado de un pedido (avanza de preparacion a listo)
db.registros.updateOne(
  { "cliente.nombre": "Carlos Ruiz", estado: "en_preparacion" },
  { $set: { estado: "listo" } }
);

// 5. Verificar la actualizacion
db.registros.find({ "cliente.nombre": "Carlos Ruiz" }, { estado: 1, _id: 0 });

// 6. Eliminar un pedido cancelado
db.registros.deleteOne({ estado: "cancelado" });

// 7. Verificar la eliminacion
db.registros.find({ estado: "cancelado" });

// 8. Total de ventas agrupado por foodtruck (excluye cancelados)
db.registros.aggregate([
  { $match: { estado: { $ne: "cancelado" } } },
  { $group: { _id: "$foodtruck.nombre", ventasTotales: { $sum: "$total" }, pedidos: { $sum: 1 } } },
  { $sort: { ventasTotales: -1 } }
]);
