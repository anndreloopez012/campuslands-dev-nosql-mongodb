// Pedidos foodtruck
// Solución de Denise López - Ejercicio 15

use campus_foodtruck_campus

// Limpiar la colección para garantizar la ejecución repetible del script
db.pedidos.drop()

// Crear la colección principal en minúsculas y plural
db.createCollection("pedidos")

// Insertar 5 pedidos con nombres de clientes poco comunes y menú variado
db.pedidos.insertMany([
  {
    cliente: "Azael Zevallos",
    num_mesa_o_ticket: 101,
    estado: "pendiente",
    items: [
      { producto: "Combo McMenú Big Mac", restaurante_estilo: "McDonald's", cantidad: 1, precio_unitario: 8.50 },
      { producto: "McFlurry Oreo", restaurante_estilo: "McDonald's", cantidad: 1, precio_unitario: 3.00 }
    ],
    total_usd: 11.50,
    metodo_pago: "tarjeta",
    para_llevar: false,
    fecha: new Date()
  },
  {
    cliente: "Cyrene Sterling",
    num_mesa_o_ticket: 102,
    estado: "en_preparacion",
    items: [
      { producto: "Crunchwrap Supreme", restaurante_estilo: "Taco Bell", cantidad: 2, precio_unitario: 4.50 },
      { producto: "Tacos Dorados de Carne", restaurante_estilo: "Taco Bell", cantidad: 3, precio_unitario: 2.00 }
    ],
    total_usd: 15.00,
    metodo_pago: "efectivo",
    para_llevar: true,
    fecha: new Date()
  },
  {
    cliente: "Kaelen Balthazar",
    num_mesa_o_ticket: 103,
    estado: "listo",
    items: [
      { producto: "Bucket de 8 piezas de Pollo", restaurante_estilo: "KFC", cantidad: 1, precio_unitario: 14.99 },
      { producto: "Puré de Papa Mediano", restaurante_estilo: "KFC", cantidad: 2, precio_unitario: 2.50 }
    ],
    total_usd: 19.99,
    metodo_pago: "tarjeta",
    para_llevar: true,
    fecha: new Date()
  },
  {
    cliente: "Thalía Vesper",
    num_mesa_o_ticket: 104,
    estado: "entregado",
    items: [
      { producto: "Whopper con Queso", restaurante_estilo: "Burger King", cantidad: 1, precio_unitario: 6.99 },
      { producto: "Papas Fritas Medianas", restaurante_estilo: "Burger King", cantidad: 1, precio_unitario: 2.50 }
    ],
    total_usd: 9.49,
    metodo_pago: "efectivo",
    para_llevar: false,
    fecha: new Date()
  },
  {
    cliente: "Zephyrine Oaktree",
    num_mesa_o_ticket: 105,
    estado: "pendiente",
    items: [
      { producto: "Sub de Pollo Teriyaki 30cm", restaurante_estilo: "Subway", cantidad: 1, precio_unitario: 8.99 },
      { producto: "Galleta Choco Chips", restaurante_estilo: "Subway", cantidad: 2, precio_unitario: 1.25 }
    ],
    total_usd: 11.49,
    metodo_pago: "tarjeta",
    para_llevar: true,
    fecha: new Date()
  }
])

// Índices para acelerar el monitoreo de cocina y caja
db.pedidos.createIndex({ estado: 1 })
db.pedidos.createIndex({ num_mesa_o_ticket: 1 })