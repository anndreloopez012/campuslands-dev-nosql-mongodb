// Viajes mochileros - Carga inicial de datos (Seed)
// Solución de Denise López - Ejercicio 17

use campus_viajes_mochileros

// Crear la colección principal en minúsculas y plural
db.createCollection("itinerarios")

// Insertar 5 itinerarios con viajeros con nombres poco comunes y países no tan populares
db.itinerarios.insertMany([
  {
    viajero: "Orestes Vane",
    destino_popular: "Lago Titicaca",
    pais: "Bolivia",
    continente: "América del Sur",
    presupuesto_usd: 650.00,
    gastos_estimados: {
      hospedaje: 200.00,
      transporte: 150.00,
      comida: 180.00
    },
    fecha_inicio: ISODate("2026-08-10T00:00:00Z"),
    fecha_fin: ISODate("2026-08-25T00:00:00Z"),
    duracion_dias: 15,
    etiquetas: ["lago", "cultura", "mochilero"]
  },
  {
    cliente: "Kassandra Solstice",
    viajero: "Kassandra Solstice",
    destino_popular: "Samarcanda",
    pais: "Uzbekistán",
    continente: "Asia Central",
    presupuesto_usd: 1200.00,
    gastos_estimados: {
      hospedaje: 350.00,
      transporte: 400.00,
      comida: 250.00
    },
    fecha_inicio: ISODate("2026-09-01T00:00:00Z"),
    fecha_fin: ISODate("2026-09-21T00:00:00Z"),
    duracion_dias: 20,
    etiquetas: ["ruta de la seda", "historia", "tren"]
  },
  {
    viajero: "Xanthos Sterling",
    destino_popular: "Monasterio de Taktsang (Nido del Tigre)",
    pais: "Bután",
    continente: "Asia",
    presupuesto_usd: 1800.00,
    gastos_estimados: {
      hospedaje: 600.00,
      transporte: 500.00,
      comida: 400.00
    },
    fecha_inicio: ISODate("2026-10-05T00:00:00Z"),
    fecha_fin: ISODate("2026-10-19T00:00:00Z"),
    duracion_dias: 14,
    etiquetas: ["montaña", "espiritual", "hiking"]
  },
  {
    viajero: "Melantho Frost",
    destino_popular: "Bosque de Baobabs",
    pais: "Madagascar",
    continente: "África",
    presupuesto_usd: 950.00,
    gastos_estimados: {
      hospedaje: 300.00,
      transporte: 350.00,
      comida: 180.00
    },
    fecha_inicio: ISODate("2026-11-01T00:00:00Z"),
    fecha_fin: ISODate("2026-11-18T00:00:00Z"),
    duracion_dias: 17,
    etiquetas: ["naturaleza", "fotografia", "fauna"]
  },
  {
    viajero: "Balthazar Nightshade",
    destino_popular: "Cataratas Victoria",
    pais: "Zambia",
    continente: "África",
    presupuesto_usd: 800.00,
    gastos_estimados: {
      hospedaje: 250.00,
      transporte: 250.00,
      comida: 200.00
    },
    fecha_inicio: ISODate("2026-12-01T00:00:00Z"),
    fecha_fin: ISODate("2026-12-12T00:00:00Z"),
    duracion_dias: 11,
    etiquetas: ["cataratas", "aventura", "camping"]
  }
])

// Índices para acelerar filtros por fechas y presupuestos
db.itinerarios.createIndex({ fecha_inicio: 1 })
db.itinerarios.createIndex({ presupuesto_usd: 1 })
db.itinerarios.createIndex({ pais: 1 })