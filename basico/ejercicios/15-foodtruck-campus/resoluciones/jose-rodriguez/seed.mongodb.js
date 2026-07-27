// Base de Datos de Comida y Pedidos - Script de Poblado (Seed)
use('comida_db');

// Limpieza de colecciones previas
db.clientes.drop();
db.restaurantes.drop();
db.pedidos.drop();

// 1. Inserción de Clientes (Colección: clientes)
db.clientes.insertMany([
  {
    _id: "CLI-001",
    nombre: "Carlos",
    apellido: "Mendoza",
    telefono: "+50255551234",
    email: "carlos.mendoza@email.com",
    direccionesFrecuentes: [
      { etiqueta: "Casa", direccion: "Calle Las Flores 123, Zona 10", ciudad: "Guatemala" },
      { etiqueta: "Oficina", direccion: "Av. Reforma 4-56, Zona 9", ciudad: "Guatemala" }
    ],
    nivelFidelidad: "GOLD"
  },
  {
    _id: "CLI-002",
    nombre: "Ana",
    apellido: "Lucía Martínez",
    telefono: "+50255555678",
    email: "ana.martinez@email.com",
    direccionesFrecuentes: [
      { etiqueta: "Casa", direccion: "Condominio El Bosque Casa 15, Zona 16", ciudad: "Guatemala" }
    ],
    nivelFidelidad: "SILVER"
  },
  {
    _id: "CLI-003",
    nombre: "Roberto",
    apellido: "Gómez",
    telefono: "+50255559012",
    email: "roberto.gomez@email.com",
    direccionesFrecuentes: [],
    nivelFidelidad: "BRONCE"
  }
]);

// 2. Inserción de Restaurantes (Colección: restaurantes)
// Modelado: Menú embebido como subdocumentos para consulta directa
db.restaurantes.insertMany([
  {
    _id: "RES-001",
    nombre: "Taquería El Pastor Sagrado",
    categoria: "Comida Mexicana",
    calificacionPromedio: 4.8,
    abierto: true,
    menu: [
      { platilloId: "PLA-101", nombre: "Tacos al Pastor (3 uds)", precioQ: 35.00, disponible: true },
      { platilloId: "PLA-102", nombre: "Gringa de Queso y Pastor", precioQ: 45.00, disponible: true },
      { platilloId: "PLA-103", nombre: "Horchata Artesanal 500ml", precioQ: 15.00, disponible: true }
    ]
  },
  {
    _id: "RES-002",
    nombre: "Bella Italia Pizzería",
    categoria: "Italiana",
    calificacionPromedio: 4.6,
    abierto: true,
    menu: [
      { platilloId: "PLA-201", nombre: "Pizza Pepperoni Familiar", precioQ: 95.00, disponible: true },
      { platilloId: "PLA-202", nombre: "Pasta Alfredo con Pollo", precioQ: 65.00, disponible: true },
      { platilloId: "PLA-203", nombre: "Tiramisú Tradicional", precioQ: 30.00, disponible: true }
    ]
  }
]);

// 3. Inserción de Pedidos Iniciales (Colección: pedidos)
// Modelado: Snapshots embebidos de productos comprados y dirección de entrega
db.pedidos.insertMany([
  {
    _id: "PED-001",
    clienteId: "CLI-001",
    restauranteId: "RES-001",
    estado: "RECIBIDO",
    metodoPago: "TARJETA_CREDITO",
    direccionEntrega: {
      direccionLinea: "Calle Las Flores 123, Zona 10",
      ciudad: "Guatemala",
      notas: "Tocar el timbre blanco"
    },
    items: [
      { platilloId: "PLA-101", nombre: "Tacos al Pastor (3 uds)", cantidad: 2, precioUnitarioQ: 35.00, subtotalQ: 70.00 },
      { platilloId: "PLA-103", nombre: "Horchata Artesanal 500ml", cantidad: 1, precioUnitarioQ: 15.00, subtotalQ: 15.00 }
    ],
    montoTotalQ: 85.00,
    costoEnvioQ: 15.00,
    granTotalQ: 100.00,
    historialEstados: [
      { estado: "RECIBIDO", fechaHora: ISODate("2026-07-26T18:00:00Z") }
    ],
    repartidor: null
  },
  {
    _id: "PED-002",
    clienteId: "CLI-002",
    restauranteId: "RES-002",
    estado: "EN_PREPARACION",
    metodoPago: "EFECTIVO",
    direccionEntrega: {
      direccionLinea: "Condominio El Bosque Casa 15, Zona 16",
      ciudad: "Guatemala",
      notas: "Dejar en garita de seguridad"
    },
    items: [
      { platilloId: "PLA-201", nombre: "Pizza Pepperoni Familiar", cantidad: 1, precioUnitarioQ: 95.00, subtotalQ: 95.00 }
    ],
    montoTotalQ: 95.00,
    costoEnvioQ: 20.00,
    granTotalQ: 115.00,
    historialEstados: [
      { estado: "RECIBIDO", fechaHora: ISODate("2026-07-26T18:10:00Z") },
      { estado: "EN_PREPARACION", fechaHora: ISODate("2026-07-26T18:15:00Z") }
    ],
    repartidor: null
  }
]);
