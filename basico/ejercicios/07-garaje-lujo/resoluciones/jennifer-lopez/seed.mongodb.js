// Garaje de autos de lujo
// Solución de Denise López - Ejercicio 07

use campus_garaje_lujo

// Crear la colección en minúsculas y plural
db.createCollection("autos")

// Insertar 5 autos de lujo con subdocumentos y arrays
db.autos.insertMany([
  {
    marca: "Ferrari",
    modelo: "SF90 Stradale",
    anio: 2023,
    precio_usd: 524000,
    disponible: true,
    especificaciones: {
      potencia_hp: 986,
      velocidad_max_kmh: 340,
      aceleracion_0_100: 2.5
    },
    equipamiento: ["Frenos cerámicos", "Tracción integral", "Modo eDrive"],
    colores_disponibles: ["Rojo Corsa", "Negro Daytona"]
  },
  {
    marca: "Lamborghini",
    modelo: "Aventador SVJ",
    anio: 2022,
    precio_usd: 517700,
    disponible: false,
    especificaciones: {
      potencia_hp: 770,
      velocidad_max_kmh: 351,
      aceleracion_0_100: 2.8
    },
    equipamiento: ["Aerodinámica ALA 2.0", "Escape de titanio", "Suspensión magneto-reológica"],
    colores_disponibles: ["Verde Alceo", "Amarillo Orion"]
  },
  {
    marca: "Porsche",
    modelo: "911 GT3 RS",
    anio: 2024,
    precio_usd: 241300,
    disponible: true,
    especificaciones: {
      potencia_hp: 518,
      velocidad_max_kmh: 296,
      aceleracion_0_100: 3.2
    },
    equipamiento: ["Paquete Weissach", "Alerón DRS activo", "Jaula antivuelco"],
    colores_disponibles: ["Blanco GT", "Azul Shark"]
  },
  {
    marca: "McLaren",
    modelo: "720S",
    anio: 2021,
    precio_usd: 299000,
    disponible: true,
    especificaciones: {
      potencia_hp: 710,
      velocidad_max_kmh: 341,
      aceleracion_0_100: 2.9
    },
    equipamiento: ["Chasis Monocage II", "Puertas diédricas", "Proactive Chassis Control"],
    colores_disponibles: ["Naranja Azores", "Gris Silicon"]
  },
  {
    marca: "Aston Martin",
    modelo: "DBS Superleggera",
    anio: 2022,
    precio_usd: 316500,
    disponible: false,
    especificaciones: {
      potencia_hp: 715,
      velocidad_max_kmh: 340,
      aceleracion_0_100: 3.4
    },
    equipamiento: ["Interior en cuero Caithness", "Sistema Bang & Olufsen", "Difusor de carbono"],
    colores_disponibles: ["Verde Racing", "Plata Xenon"]
  }
])

// Índices optimizadores para búsquedas por precio y especificaciones de potencia
db.autos.createIndex({ marca: 1, modelo: 1 })
db.autos.createIndex({ precio_usd: -1 })
db.autos.createIndex({ "especificaciones.potencia_hp": -1 })