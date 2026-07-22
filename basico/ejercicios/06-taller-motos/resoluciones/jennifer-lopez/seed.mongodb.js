// Órdenes de taller de motos
// Solución de Denise López - Ejercicio 06

use campus_taller_motos

// Crear la colección explícitamente en minúsculas y plural
db.createCollection("ordenes")

// Insertar 5 órdenes de servicio con subdocumentos y arrays
db.ordenes.insertMany([
  {
    codigo_orden: "ORD-101",
    cliente: "Carlos Pérez",
    estado: "En Proceso",
    costo_total: 150000,
    moto: {
      placa: "XYZ123",
      marca: "Yamaha",
      modelo: "MT-03",
      cilindraje: 321
    },
    servicios_realizados: ["Cambio de aceite", "Ajuste de cadena"],
    repuestos: ["Filtro de aceite", "Aceite Yamalube"]
  },
  {
    codigo_orden: "ORD-102",
    cliente: "María Gómez",
    estado: "Pendiente",
    costo_total: 80000,
    moto: {
      placa: "ABC456",
      marca: "Honda",
      modelo: "CB 190R",
      cilindraje: 184
    },
    servicios_realizados: ["Revisión de frenos"],
    repuestos: ["Pastillas de freno delanteras"]
  },
  {
    codigo_orden: "ORD-103",
    cliente: "Andrés Silva",
    estado: "Completado",
    costo_total: 320000,
    moto: {
      placa: "DEF789",
      marca: "KTM",
      modelo: "Duke 390",
      cilindraje: 373
    },
    servicios_realizados: ["Mantenimiento general", "Sincronización"],
    repuestos: ["Bujía Iridium", "Filtro de aire"]
  },
  {
    codigo_orden: "ORD-104",
    cliente: "Laura Martinez",
    estado: "En Proceso",
    costo_total: 120000,
    moto: {
      placa: "GHI101",
      marca: "Suzuki",
      modelo: "Gixxer 150",
      cilindraje: 155
    },
    servicios_realizados: ["Cambio de llanta trasera"],
    repuestos: ["Llanta Michelin 130/70"]
  },
  {
    codigo_orden: "ORD-105",
    cliente: "Felipe Rojas",
    estado: "Pendiente",
    costo_total: 45000,
    moto: {
      placa: "JKL202",
      marca: "Bajaj",
      modelo: "Pulsar NS 200",
      cilindraje: 199
    },
    servicios_realizados: ["Tensión de guaya de clutche"],
    repuestos: ["Guaya de clutche"]
  }
])

// Índices para acelerar búsquedas por código de orden y por estado de reparación
db.ordenes.createIndex({ codigo_orden: 1 }, { unique: true })
db.ordenes.createIndex({ estado: 1, "moto.placa": 1 })