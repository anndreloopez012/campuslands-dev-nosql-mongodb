// Base de Datos de Viajes - Script de Poblado (Seed)
use('agencia_viajes_db');

// Limpieza de colecciones previas
db.pasajeros.drop();
db.destinos.drop();
db.viajes.drop();

// 1. Inserción de Pasajeros (Colección: pasajeros)
db.pasajeros.insertMany([
  {
    _id: "PAS-001",
    nombre: "Sofía",
    apellido: "Ramírez",
    email: "sofia.ramirez@email.com",
    nacionalidad: "Guatemalteca",
    categoriaPasajero: "PREMIUM"
  },
  {
    _id: "PAS-002",
    nombre: "Mateo",
    apellido: "Morales",
    email: "mateo.morales@email.com",
    nacionalidad: "Mexicana",
    categoriaPasajero: "ESTANDAR"
  },
  {
    _id: "PAS-003",
    nombre: "Elena",
    apellido: "Rostova",
    email: "elena.rostova@email.com",
    nacionalidad: "Española",
    categoriaPasajero: "VIP"
  }
]);

// 2. Inserción de Destinos (Colección: destinos)
db.destinos.insertMany([
  {
    _id: "DEST-001",
    ciudad: "Kyoto",
    pais: "Japón",
    continente: "Asia",
    climaPredominante: "Templado",
    costoPromedioDiarioUSD: 180.00
  },
  {
    _id: "DEST-002",
    ciudad: "Cusco",
    pais: "Perú",
    continente: "América del Sur",
    climaPredominante: "Subalpino",
    costoPromedioDiarioUSD: 85.00
  },
  {
    _id: "DEST-003",
    ciudad: "Reikiavik",
    pais: "Islandia",
    continente: "Europa",
    climaPredominante: "Subártico",
    costoPromedioDiarioUSD: 240.00
  }
]);

// 3. Inserción de Viajes (Colección: viajes)
// Modelado: Subdocumentos para 'fechas' y 'presupuesto'; Array de subdocumentos para 'desgloseActividades'
db.viajes.insertMany([
  {
    _id: "VIA-001",
    pasajeroId: "PAS-001",
    destinoId: "DEST-001",
    nombrePaquete: "Aventura de Otoño en Japón",
    estadoReserva: "CONFIRMADA",
    fechas: {
      fechaInicio: ISODate("2026-09-10T00:00:00Z"),
      fechaFin: ISODate("2026-09-22T00:00:00Z"),
      duracionDias: 12
    },
    presupuesto: {
      presupuestoMaximoUSD: 4500.00,
      costoVueloUSD: 1400.00,
      costoHospedajeUSD: 1500.00,
      gastosEstimadosDiariosUSD: 1000.00,
      totalGastosUSD: 3900.00
    },
    desgloseActividades: [
      { actividad: "Pase en Tren Bala Shinkansen", fecha: ISODate("2026-09-12T00:00:00Z"), costoUSD: 280.00, pagado: true },
      { actividad: "Tour de Templos y Ceremonia del Té", fecha: ISODate("2026-09-15T00:00:00Z"), costoUSD: 120.00, pagado: true },
      { actividad: "Excursión a Arashiyama", fecha: ISODate("2026-09-18T00:00:00Z"), costoUSD: 90.00, pagado: false }
    ],
    etiquetas: ["Cultura", "Trenes", "Gastronomía"]
  },
  {
    _id: "VIA-002",
    pasajeroId: "PAS-002",
    destinoId: "DEST-002",
    nombrePaquete: "Ruta Inca a Machu Picchu",
    estadoReserva: "COMPLETADA",
    fechas: {
      fechaInicio: ISODate("2026-05-01T00:00:00Z"),
      fechaFin: ISODate("2026-05-08T00:00:00Z"),
      duracionDias: 7
    },
    presupuesto: {
      presupuestoMaximoUSD: 1800.00,
      costoVueloUSD: 550.00,
      costoHospedajeUSD: 450.00,
      gastosEstimadosDiariosUSD: 400.00,
      totalGastosUSD: 1400.00
    },
    desgloseActividades: [
      { actividad: "Boleto Turístico Cusco + Entrada Machu Picchu", fecha: ISODate("2026-05-03T00:00:00Z"), costoUSD: 200.00, pagado: true },
      { actividad: "Guía Privado Valle Sagrado", fecha: ISODate("2026-05-05T00:00:00Z"), costoUSD: 110.00, pagado: true }
    ],
    etiquetas: ["Trekking", "Historia", "Naturaleza"]
  },
  {
    _id: "VIA-003",
    pasajeroId: "PAS-003",
    destinoId: "DEST-003",
    nombrePaquete: "Cazadores de Auroras Boreales",
    estadoReserva: "CONFIRMADA",
    fechas: {
      fechaInicio: ISODate("2026-11-15T00:00:00Z"),
      fechaFin: ISODate("2026-11-25T00:00:00Z"),
      duracionDias: 10
    },
    presupuesto: {
      presupuestoMaximoUSD: 5000.00,
      costoVueloUSD: 1100.00,
      costoHospedajeUSD: 2200.00,
      gastosEstimadosDiariosUSD: 1200.00,
      totalGastosUSD: 4500.00
    },
    desgloseActividades: [
      { actividad: "Tour Círculo Dorado y Glaciar", fecha: ISODate("2026-11-17T00:00:00Z"), costoUSD: 250.00, pagado: true },
      { actividad: "Entrada Laguna Azul Premium", fecha: ISODate("2026-11-20T00:00:00Z"), costoUSD: 140.00, pagado: true }
    ],
    etiquetas: ["Nieve", "Auroras", "Relax"]
  },
  {
    _id: "VIA-004",
    pasajeroId: "PAS-001",
    destinoId: "DEST-002",
    nombrePaquete: "Escapada Rápida Andina",
    estadoReserva: "PLANIFICACION",
    fechas: {
      fechaInicio: ISODate("2026-12-01T00:00:00Z"),
      fechaFin: ISODate("2026-12-06T00:00:00Z"),
      duracionDias: 5
    },
    presupuesto: {
      presupuestoMaximoUSD: 1200.00,
      costoVueloUSD: 480.00,
      costoHospedajeUSD: 300.00,
      gastosEstimadosDiariosUSD: 250.00,
      totalGastosUSD: 1030.00
    },
    desgloseActividades: [],
    etiquetas: ["Express", "Historia"]
  }
]);
