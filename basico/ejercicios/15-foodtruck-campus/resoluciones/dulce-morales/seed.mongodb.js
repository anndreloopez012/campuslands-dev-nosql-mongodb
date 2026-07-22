// Seleccionar / Crear la base de datos del ejercicio
use('campus_foodtruck_campus');

// Inserción de documentos coherentes de pedidos
db.pedidos.insertMany([
  {
    numero_pedido: "ORD-001",
    fecha: new Date("2026-03-10T12:30:00Z"),
    cliente: {
      nombre: "Carlos Mendoza",
      telefono: "+573001234567"
    },
    items: [
      { producto: "Hamburguesa Doble Queso", cantidad: 2, precio_unitario: 18000 },
      { producto: "Papas Agridulces", cantidad: 1, precio_unitario: 7000 }
    ],
    metodo_pago: "Efectivo",
    total: 43000,
    estado: "completado",
    notas: "Sin cebolla en las hamburguesas"
  },
  {
    numero_pedido: "ORD-002",
    fecha: new Date("2026-03-10T12:35:00Z"),
    cliente: {
      nombre: "Ana Gómez",
      telefono: "+573109876543"
    },
    items: [
      { producto: "Tacos de Cerdo al Pastor", cantidad: 3, precio_unitario: 12000 },
      { producto: "Gaseosa 500ml", cantidad: 1, precio_unitario: 4000 }
    ],
    metodo_pago: "Transferencia",
    total: 40000,
    estado: "en_preparacion",
    notas: "Salsa picante por separado"
  },
  {
    numero_pedido: "ORD-003",
    fecha: new Date("2026-03-10T12:40:00Z"),
    cliente: {
      nombre: "Luis Fernández",
      telefono: "+573155554433"
    },
    items: [
      { producto: "Perro Caliente Especial", cantidad: 1, precio_unitario: 15000 },
      { producto: "Jugo Natural de Mango", cantidad: 1, precio_unitario: 6000 }
    ],
    metodo_pago: "Efectivo",
    total: 21000,
    estado: "pendiente",
    notas: ""
  },
  {
    numero_pedido: "ORD-004",
    fecha: new Date("2026-03-10T12:50:00Z"),
    cliente: {
      nombre: "Sofia Ramírez",
      telefono: "+573201112233"
    },
    items: [
      { producto: "Hamburguesa Doble Queso", cantidad: 1, precio_unitario: 18000 },
      { producto: "Malteada de Chocolate", cantidad: 1, precio_unitario: 9000 }
    ],
    metodo_pago: "Tarjeta",
    total: 27000,
    estado: "pendiente",
    notas: "Bien cocida la carne"
  },
  {
    numero_pedido: "ORD-005",
    fecha: new Date("2026-03-10T13:00:00Z"),
    cliente: {
      nombre: "Diego Morales",
      telefono: "+573014449988"
    },
    items: [
      { producto: "Burrito Mixto", cantidad: 2, precio_unitario: 22000 },
      { producto: "Papas Agridulces", cantidad: 2, precio_unitario: 7000 },
      { producto: "Gaseosa 500ml", cantidad: 2, precio_unitario: 4000 }
    ],
    metodo_pago: "Transferencia",
    total: 66000,
    estado: "completado",
    notas: "Para llevar"
  }
]);