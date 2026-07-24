// Rutas turísticas 
// Solución de Denise López - Ejercicio 18

use campus_rutas_turisticas

// Crear la colección principal en minúsculas y plural
db.rutas.createCollection("rutas")

// Insertar 5 rutas turísticas con datos geográficos embebidos
db.rutas.insertMany([
  {
    nombre_ruta: "Sendero de la Laguna Verde de Chiliques",
    guia_encargado: "Hesperio Valdivia",
    lugar_destacado: "Laguna Verde de Chiliques",
    region: "Antofagasta",
    pais: "Chile",
    dificultad: "moderada",
    duracion_horas: 6,
    precio_usd: 75.00,
    ubicacion: {
      type: "Point",
      coordinates: [-67.8725, -23.6392] // [Longitud, Latitud]
    },
    puntos_interes: ["Mirador del Volcán", "Aguas Termales", "Ecosistema de Flamingos"],
    activa: true
  },
  {
    nombre_ruta: "Travesía por el Cañón del Somoto",
    guia_encargado: "Cirene Mondragón",
    lugar_destacado: "Cañón de Somoto",
    region: "Madriz",
    pais: "Nicaragua",
    dificultad: "alta",
    duracion_horas: 5,
    precio_usd: 45.00,
    ubicacion: {
      type: "Point",
      coordinates: [-86.6114, 13.4312]
    },
    puntos_interes: ["Navegación en Neumático", "Salto de Rocas", "Cueva de Murciélagos"],
    activa: true
  },
  {
    nombre_ruta: "Ruta Arqueológica de las Cuevas de Batu",
    guia_encargado: "Amador Vane",
    lugar_destacado: "Cueva del Viento de Gunung Mulu",
    region: "Sarawak",
    pais: "Malasia",
    dificultad: "baja",
    duracion_horas: 4,
    precio_usd: 60.00,
    ubicacion: {
      type: "Point",
      coordinates: [114.8142, 4.0483]
    },
    puntos_interes: ["Río Subterráneo", "Estructuras de Estalactitas", "Paseo en Canoa"],
    activa: true
  },
  {
    nombre_ruta: "Caminata Ancestral de las Ruinas de Joya de Cerén",
    guia_encargado: "Tiberio Escandón",
    lugar_destacado: "Sitio Arqueológico Joya de Cerén",
    region: "La Libertad",
    pais: "El Salvador",
    dificultad: "baja",
    duracion_horas: 3,
    precio_usd: 30.00,
    ubicacion: {
      type: "Point",
      coordinates: [-89.3581, 13.8242]
    },
    puntos_interes: ["Estructuras Mayas Conservadas", "Centro de Interpretación", "Cultivos Antiguos"],
    activa: true
  },
  {
    nombre_ruta: "Expedición a las Gargantas del Todra",
    guia_encargado: "Kaelen Balthazar",
    lugar_destacado: "Gargantas del Todra",
    region: "Tinghir",
    pais: "Marruecos",
    dificultad: "alta",
    duracion_horas: 8,
    precio_usd: 110.00,
    ubicacion: {
      type: "Point",
      coordinates: [-5.6022, 31.5878]
    },
    puntos_interes: ["Desfiladero Rocoso", "Pueblos Berberes", "Escalada en Roca"],
    activa: false
  }
])

// Crear índice GeoSpatial 2dsphere para consultas geográficas y búsquedas por país
db.rutas.createIndex({ ubicacion: "2dsphere" })
db.rutas.createIndex({ pais: 1 })
db.rutas.createIndex({ dificultad: 1 })