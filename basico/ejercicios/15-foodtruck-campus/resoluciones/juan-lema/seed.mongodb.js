// Ejercicio 15 - Pedidos foodtruck
// Autor: juan-lema
use campus_foodtruck_campus;

db.registros.drop();

db.registros.insertMany([
  {
    cliente: { nombre: "Ana Martinez", telefono: "3011234567" },
    foodtruck: { nombre: "Tacos Al Vapor", ubicacion: "Zona Norte" },
    items: [
      { producto: "Taco de asada", cantidad: 3, precioUnitario: 6000 },
      { producto: "Limonada", cantidad: 1, precioUnitario: 4000 }
    ],
    total: 22000,
    estado: "pendiente",
    metodoPago: "efectivo",
    fechaPedido: new Date("2026-07-15T12:10:00"),
    notas: "Sin cebolla"
  },
  {
    cliente: { nombre: "Carlos Ruiz", telefono: "3129876543" },
    foodtruck: { nombre: "Burger Express", ubicacion: "Plazoleta Central" },
    items: [
      { producto: "Hamburguesa doble", cantidad: 2, precioUnitario: 15000 }
    ],
    total: 30000,
    estado: "en_preparacion",
    metodoPago: "tarjeta",
    fechaPedido: new Date("2026-07-15T12:20:00"),
    notas: ""
  },
  {
    cliente: { nombre: "Laura Gomez", telefono: "3007654321" },
    foodtruck: { nombre: "Tacos Al Vapor", ubicacion: "Zona Norte" },
    items: [
      { producto: "Taco de pollo", cantidad: 4, precioUnitario: 5500 },
      { producto: "Gaseosa", cantidad: 2, precioUnitario: 3500 }
    ],
    total: 29000,
    estado: "listo",
    metodoPago: "app",
    fechaPedido: new Date("2026-07-15T12:35:00"),
    notas: "Recoger en ventanilla"
  },
  {
    cliente: { nombre: "Pedro Sanchez", telefono: "3154561234" },
    foodtruck: { nombre: "Pizza Rodante", ubicacion: "Parque Sur" },
    items: [
      { producto: "Pizza personal", cantidad: 1, precioUnitario: 18000 },
      { producto: "Malteada", cantidad: 1, precioUnitario: 7000 }
    ],
    total: 25000,
    estado: "entregado",
    metodoPago: "tarjeta",
    fechaPedido: new Date("2026-07-15T13:00:00"),
    notas: ""
  },
  {
    cliente: { nombre: "Sofia Herrera", telefono: "3186783456" },
    foodtruck: { nombre: "Burger Express", ubicacion: "Plazoleta Central" },
    items: [
      { producto: "Papas fritas", cantidad: 2, precioUnitario: 6000 }
    ],
    total: 12000,
    estado: "cancelado",
    metodoPago: "efectivo",
    fechaPedido: new Date("2026-07-15T13:10:00"),
    notas: "Cliente no llego"
  },
  {
    cliente: { nombre: "Miguel Torres", telefono: "3201239876" },
    foodtruck: { nombre: "Pizza Rodante", ubicacion: "Parque Sur" },
    items: [
      { producto: "Pizza familiar", cantidad: 1, precioUnitario: 32000 }
    ],
    total: 32000,
    estado: "pendiente",
    metodoPago: "app",
    fechaPedido: new Date("2026-07-15T13:25:00"),
    notas: "Extra queso"
  }
]);

db.registros.createIndex({ estado: 1 });
