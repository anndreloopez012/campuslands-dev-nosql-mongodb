// Base de Datos de Estudio de Tatuajes - Script de Poblado (Seed)
use('estudio_tatuajes_db');

// Limpieza de colecciones previas
db.artistas.drop();
db.clientes.drop();
db.citas.drop();

// 1. Inserción de Artistas (Colección: artistas)
db.artistas.insertMany([
  {
    _id: "ART-001",
    nombre: "Carlos",
    apodo: "Kink",
    especialidades: ["Blackwork", "Realismo", "Sombras"],
    activo: true
  },
  {
    _id: "ART-002",
    nombre: "Lucía",
    apodo: "InkMendez",
    especialidades: ["Neotradicional", "Acuarela", "Línea Fina"],
    activo: true
  }
]);

// 2. Inserción de Clientes (Colección: clientes)
db.clientes.insertMany([
  {
    _id: "CLI-001",
    nombre: "Andrea Castillo",
    telefono: "+502 5555-1234",
    email: "andrea.castillo@email.com"
  },
  {
    _id: "CLI-002",
    nombre: "Javier López",
    telefono: "+502 5555-5678",
    email: "javier.lopez@email.com"
  }
]);

// 3. Inserción de Citas y Tatuajes (Colección: citas)
// Modelado: Subdocumentos para 'fechas', 'detallesTatuaje' y 'presupuesto'
db.citas.insertMany([
  {
    _id: "CIT-001",
    clienteId: "CLI-001",
    artistaId: "ART-001",
    estado: "COMPLETADO",
    fechas: {
      fechaReserva: ISODate("2026-06-01T10:00:00Z"),
      fechaCita: ISODate("2026-07-10T14:00:00Z"),
      fechaFinalizacion: ISODate("2026-07-10T18:00:00Z"),
      fechaRevisionCuracion: ISODate("2026-08-10T15:00:00Z")
    },
    detallesTatuaje: {
      zonaCuerpo: "Antebrazo Derecho",
      estilo: "Blackwork",
      tamanioCm: 15
    },
    presupuesto: {
      depositoUSD: 50.00,
      costoTotalUSD: 250.00,
      pagado: true
    },
    instruccionesCuracion: [
      "Lavar con jabón neutro 3 veces al día",
      "Aplicar crema cicatrizante en capa delgada",
      "Evitar piscinas y sol directo por 15 días"
    ]
  },
  {
    _id: "CIT-002",
    clienteId: "CLI-002",
    artistaId: "ART-002",
    estado: "CONFIRMADA",
    fechas: {
      fechaReserva: ISODate("2026-07-01T09:30:00Z"),
      fechaCita: ISODate("2026-08-15T11:00:00Z"),
      fechaFinalizacion: null,
      fechaRevisionCuracion: ISODate("2026-09-15T11:00:00Z")
    },
    detallesTatuaje: {
      zonaCuerpo: "Espalda",
      estilo: "Neotradicional",
      tamanioCm: 30
    },
    presupuesto: {
      depositoUSD: 100.00,
      costoTotalUSD: 500.00,
      pagado: false
    },
    instruccionesCuracion: []
  },
  {
    _id: "CIT-003",
    clienteId: "CLI-001",
    artistaId: "ART-002",
    estado: "PENDIENTE",
    fechas: {
      fechaReserva: ISODate("2026-07-20T16:00:00Z"),
      fechaCita: ISODate("2026-09-01T10:00:00Z"),
      fechaFinalizacion: null,
      fechaRevisionCuracion: null
    },
    detallesTatuaje: {
      zonaCuerpo: "Hombro",
      estilo: "Acuarela",
      tamanioCm: 10
    },
    presupuesto: {
      depositoUSD: 30.00,
      costoTotalUSD: 150.00,
      pagado: false
    },
    instruccionesCuracion: []
  },
  {
    _id: "CIT-004",
    clienteId: "CLI-002",
    artistaId: "ART-001",
    estado: "CANCELADO",
    fechas: {
      fechaReserva: ISODate("2026-05-10T12:00:00Z"),
      fechaCita: ISODate("2026-06-05T15:00:00Z"),
      fechaFinalizacion: null,
      fechaRevisionCuracion: null
    },
    detallesTatuaje: {
      zonaCuerpo: "Pantorrilla",
      estilo: "Realismo",
      tamanioCm: 20
    },
    presupuesto: {
      depositoUSD: 0.00,
      costoTotalUSD: 350.00,
      pagado: false
    },
    instruccionesCuracion: []
  }
]);
