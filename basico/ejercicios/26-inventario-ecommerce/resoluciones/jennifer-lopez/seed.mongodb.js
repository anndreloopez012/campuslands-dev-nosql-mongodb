// Inventario ecommerce 
// Solución de Denise López - Ejercicio 26

use campus_inventario_ecommerce

// Crear la colección principal en minúsculas y plural
db.createCollection("vehiculos")

// Insertar 5 vehículos icónicos enfocado en stock, alertas de reabastecimiento y sedes
db.vehiculos.insertMany([
  {
    codigo_sku: "AUTO-ECTO-001",
    nombre_modelo: "Ecto-1 Cazafantasmas Edition",
    tipo_vehiculo: "Auto",
    marca: "Miller-Meteor",
    referencia_popular: "Ghostbusters",
    encargado_inventario: "Orestes Vane",
    sede_almacen: "Sede Cráter Azul",
    pais: "Guatemala",
    precio_usd: 85000.0,
    inventario: {
      stock_actual: 2,
      stock_minimo: 5,
      alerta_reorden: true,
      nivel_alerta: "Critico"
    },
    especificaciones: {
      motor: "V8 6.4L",
      combustible: "Gasolina / Capturador de Fotones",
      transmision: "Automática"
    },
    fecha_ingreso: ISODate("2026-02-15T00:00:00Z")
  },
  {
    codigo_sku: "MOTO-KND-002",
    nombre_modelo: "Moto Ciberpunk Kaneda Specs",
    tipo_vehiculo: "Moto",
    marca: "Yamaha-NeoTokyo",
    referencia_popular: "Akira",
    encargado_inventario: "Cyrene Sterling",
    sede_almacen: "Sede Laguna Lachúa",
    pais: "Guatemala",
    precio_usd: 42000.0,
    inventario: {
      stock_actual: 12,
      stock_minimo: 4,
      alerta_reorden: false,
      nivel_alerta: "Normal"
    },
    especificaciones: {
      motor: "Eléctrico de Tracción Doble",
      combustible: "Batería de Boro-Litio",
      transmision: "Secuencial"
    },
    fecha_ingreso: ISODate("2026-03-20T00:00:00Z")
  },
  {
    codigo_sku: "AUTO-DMC-003",
    nombre_modelo: "DeLorean DMC-12 Flujo Temporal",
    tipo_vehiculo: "Auto",
    marca: "DeLorean",
    referencia_popular: "Volver al Futuro",
    encargado_inventario: "Balthazar Nightshade",
    sede_almacen: "Sede Quiriguá",
    pais: "Guatemala",
    precio_usd: 120000.0,
    inventario: {
      stock_actual: 1,
      stock_minimo: 3,
      alerta_reorden: true,
      nivel_alerta: "Critico"
    },
    especificaciones: {
      motor: "PRV V6 con Condensador de Flujo",
      combustible: "Plutonio / Mr. Fusion",
      transmision: "Manual 5 velocidades"
    },
    fecha_ingreso: ISODate("2026-04-10T00:00:00Z")
  },
  {
    codigo_sku: "MOTO-TRN-004",
    nombre_modelo: "Light Cycle de 5ta Generación",
    tipo_vehiculo: "Moto",
    marca: "Grid Dynamics",
    referencia_popular: "TRON Legacy",
    encargado_inventario: "Melantho Frost",
    sede_almacen: "Sede Semuc Champey",
    pais: "Guatemala",
    precio_usd: 65000.0,
    inventario: {
      stock_actual: 8,
      stock_minimo: 3,
      alerta_reorden: false,
      nivel_alerta: "Normal"
    },
    especificaciones: {
      motor: "Núcleo de Luz Digital",
      combustible: "Energía de la Red",
      transmision: "Directa Monomarcha"
    },
    fecha_ingreso: ISODate("2026-05-18T00:00:00Z")
  },
  {
    codigo_sku: "AUTO-TMB-005",
    nombre_modelo: "Batimóvil Tumbler blindado",
    tipo_vehiculo: "Auto",
    marca: "Wayne Enterprises",
    referencia_popular: "Batman - El Caballero de la Noche",
    encargado_inventario: "Xanthos Escandón",
    sede_almacen: "Sede Tikal",
    pais: "Guatemala",
    precio_usd: 350000.0,
    inventario: {
      stock_actual: 3,
      stock_minimo: 2,
      alerta_reorden: false,
      nivel_alerta: "Bajo",
    },
    especificaciones: {
      motor: "V8 5.7L con Turbina Jet",
      combustible: "Diésel / Combustible de Aviación",
      transmision: "Automática Pesada"
    },
    fecha_ingreso: ISODate("2026-06-01T00:00:00Z")
  }
])

// creación de índices para optimizar consultas frecuentes

// Sirve para encontrar de golpe los productos que necesitan reabastecimiento urgente.
db.vehiculos.createIndex({ "inventario.alerta_reorden": 1 })

// Sirve para buscar y filtrar rápidamente por tipo de vehículo (Auto o Moto).
db.vehiculos.createIndex({ tipo_vehiculo: 1 })

// Sirve para ubicar al instante los vehículos guardados en una sede específica.
db.vehiculos.createIndex({ sede_almacen: 1 })