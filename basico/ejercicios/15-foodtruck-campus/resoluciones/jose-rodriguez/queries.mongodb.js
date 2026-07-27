// Base de Datos de Comida - Consultas Nativas, Inserciones y Actualizaciones
use('comida_db');

// =============================================================================
// OPERACIÓN 1: Inserción Novedosa de un Nuevo Pedido (insertOne)
// Registra la orden "PED-003" creada por el cliente "CLI-003".
// =============================================================================
db.pedidos.insertOne({
  _id: "PED-003",
  clienteId: "CLI-003",
  restauranteId: "RES-001",
  estado: "RECIBIDO",
  metodoPago: "EFECTIVO",
  direccionEntrega: {
    direccionLinea: "Diagonal 6 10-01, Zona 10",
    ciudad: "Guatemala",
    notas: "Llamar al llegar"
  },
  items: [
    { platilloId: "PLA-102", nombre: "Gringa de Queso y Pastor", cantidad: 1, precioUnitarioQ: 45.00, subtotalQ: 45.00 }
  ],
  montoTotalQ: 45.00,
  costoEnvioQ: 15.00,
  granTotalQ: 60.00,
  historialEstados: [
    { estado: "RECIBIDO", fechaHora: ISODate("2026-07-26T19:00:00Z") }
  ],
  repartidor: null
});


// =============================================================================
// OPERACIÓN 2: Modificación de Pedido - Agregar Ítem y Recalcular Totales ($push, $inc)
// El cliente decide agregar una bebida a su pedido "PED-003" mientras está "RECIBIDO".
// =============================================================================
db.pedidos.updateOne(
  { _id: "PED-003", estado: "RECIBIDO" },
  {
    $push: {
      items: { platilloId: "PLA-103", nombre: "Horchata Artesanal 500ml", cantidad: 2, precioUnitarioQ: 15.00, subtotalQ: 30.00 }
    },
    $inc: {
      montoTotalQ: 30.00,
      granTotalQ: 30.00
    }
  }
);


// =============================================================================
// OPERACIÓN 3: Cambio de Estado de Pedido y Asignación de Repartidor ($set, $push)
// Transiciona "PED-001" de "RECIBIDO" a "EN_CAMINO", asignando repartidor y trazabilidad.
// =============================================================================
db.pedidos.updateOne(
  { _id: "PED-001" },
  {
    $set: {
      estado: "EN_CAMINO",
      repartidor: {
        nombre: "Mario López",
        telefono: "+50250001122",
        vehiculo: "Motocicleta Honda 125"
      }
    },
    $push: {
      historialEstados: { estado: "EN_CAMINO", fechaHora: ISODate("2026-07-26T18:30:00Z") }
    }
  }
);


// =============================================================================
// OPERACIÓN 4: Actualización Masiva de Estado ($updateMany)
// Pasa todos los pedidos en estado "EN_PREPARACION" a "LISTO_PARA_RECOGER".
// =============================================================================
db.pedidos.updateMany(
  { estado: "EN_PREPARACION" },
  {
    $set: { estado: "LISTO_PARA_RECOGER" },
    $push: {
      historialEstados: { estado: "LISTO_PARA_RECOGER", fechaHora: ISODate("2026-07-26T18:40:00Z") }
    }
  }
);


// =============================================================================
// CONSULTA 5: Búsqueda y Proyección de Pedidos Activos por Cliente
// Obtiene los pedidos del cliente "CLI-001" mostrando solo los ítems y el estado actual.
// =============================================================================
db.pedidos.find(
  { clienteId: "CLI-001" },
  {
    _id: 1,
    restauranteId: 1,
    estado: 1,
    granTotalQ: 1,
    "items.nombre": 1,
    "items.cantidad": 1,
    repartidor: 1
  }
);


// =============================================================================
// CONSULTA 6: Agregación Analítica - Resumen de Ventas y Total Cobrado por Restaurante
// Calculo del total facturado, comisiones de envío y cantidad de pedidos procesados.
// =============================================================================
db.pedidos.aggregate([
  {
    $group: {
      _id: "$restauranteId",
      totalPedidos: { $sum: 1 },
      montoTotalVentasQ: { $sum: "$montoTotalQ" },
      totalIngresoEnviosQ: { $sum: "$costoEnvioQ" },
      promedioTicketQ: { $avg: "$granTotalQ" }
    }
  },
  {
    $lookup: {
      from: "restaurantes",
      localField: "_id",
      foreignField: "_id",
      as: "infoRestaurante"
    }
  },
  { $unwind: "$infoRestaurante" },
  {
    $project: {
      _id: 0,
      restauranteId: "$_id",
      nombreRestaurante: "$infoRestaurante.nombre",
      categoria: "$infoRestaurante.categoria",
      totalPedidos: 1,
      montoTotalVentasQ: 1,
      promedioTicketQ: { $round: ["$promedioTicketQ", 2] }
    }
  },
  { $sort: { montoTotalVentasQ: -1 } }
]);
