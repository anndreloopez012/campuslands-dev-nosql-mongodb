// Seleccionar la base de datos del ejercicio
use("campus_taller_motos");

// Inserción de documentos de órdenes de taller
db.ordenes.insertMany([
  {
    numero_orden: "ORD-001",
    cliente: {
      nombre: "Carlos Gómez",
      telefono: "+573001234567"
    },
    moto: {
      marca: "Yamaha",
      modelo: "MT-07",
      placa: "XYZ-123",
      kilometraje: 15000
    },
    estado: "En proceso",
    mecanico_asignado: "Roberto Silva",
    servicios: [
      { descripcion: "Cambio de aceite y filtro", costo: 45.00 },
      { descripcion: "Ajuste de cadena", costo: 15.00 }
    ],
    total: 60.00,
    fechas: {
      ingreso: ISODate("2026-03-01T08:30:00Z"),
      estimada_entrega: ISODate("2026-03-02T17:00:00Z")
    }
  },
  {
    numero_orden: "ORD-002",
    cliente: {
      nombre: "Ana Martínez",
      telefono: "+573109876543"
    },
    moto: {
      marca: "Honda",
      modelo: "CB500X",
      placa: "ABC-789",
      kilometraje: 28000
    },
    estado: "En revisión",
    mecanico_asignado: "Luis Fernández",
    servicios: [
      { descripcion: "Diagnóstico del sistema eléctrico", costo: 30.00 }
    ],
    total: 30.00,
    fechas: {
      ingreso: ISODate("2026-03-02T09:15:00Z"),
      estimada_entrega: ISODate("2026-03-03T12:00:00Z")
    }
  },
  {
    numero_orden: "ORD-003",
    cliente: {
      nombre: "Diego López",
      telefono: "+573204567890"
    },
    moto: {
      marca: "Kawasaki",
      modelo: "Ninja 400",
      placa: "KWE-456",
      kilometraje: 8500
    },
    estado: "Completado",
    mecanico_asignado: "Roberto Silva",
    servicios: [
      { descripcion: "Mantenimiento preventivo general", costo: 120.00 },
      { descripcion: "Cambio de Pastillas de freno delanteras", costo: 40.00 }
    ],
    total: 160.00,
    fechas: {
      ingreso: ISODate("2026-02-28T10:00:00Z"),
      estimada_entrega: ISODate("2026-03-01T16:00:00Z")
    }
  },
  {
    numero_orden: "ORD-004",
    cliente: {
      nombre: "Laura Restrepo",
      telefono: "+573015554433"
    },
    moto: {
      marca: "KTM",
      modelo: "Duke 390",
      placa: "KTM-321",
      kilometraje: 12000
    },
    estado: "En proceso",
    mecanico_asignado: "Andrés Molina",
    servicios: [
      { descripcion: "Cambio de llanta trasera", costo: 85.00 }
    ],
    total: 85.00,
    fechas: {
      ingreso: ISODate("2026-03-02T11:00:00Z"),
      estimada_entrega: ISODate("2026-03-02T18:00:00Z")
    }
  },
  {
    numero_orden: "ORD-005",
    cliente: {
      nombre: "Sofia Ramirez",
      telefono: "+573152223344"
    },
    moto: {
      marca: "Suzuki",
      modelo: "GIXR 150",
      placa: "SUZ-654",
      kilometraje: 32000
    },
    estado: "Completado",
    mecanico_asignado: "Luis Fernández",
    servicios: [
      { descripcion: "Sincronización de motor", costo: 50.00 },
      { descripcion: "Limpieza de carburador", costo: 25.00 }
    ],
    total: 75.00,
    fechas: {
      ingreso: ISODate("2026-02-25T14:00:00Z"),
      estimada_entrega: ISODate("2026-02-26T17:00:00Z")
    }
  }
]);