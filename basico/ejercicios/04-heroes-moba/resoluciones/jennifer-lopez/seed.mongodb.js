// Héroes MOBA por rol 
// Solución de Denise López - Ejercicio 04

use campus_heroes_moba

// Limpiar la colección si existe para garantizar la repetibilidad del script
db.heroes.drop()

// Crear la colección de forma explícita en minúsculas y plural
db.createCollection("heroes")

// Insertar 5 héroes con subdocumentos y arrays
db.heroes.insertMany([
  {
    nombre: "Astra",
    rol: "Mago",
    dificultad: "Alta",
    activo_en_meta: true,
    estadisticas_base: {
      vida: 550,
      ataque: 52,
      defensa: 28,
      velocidad_movimiento: 330
    },
    habilidades: ["Explosión Estelar", "Escudo Cósmico", "Súper Nova"],
    lineas: ["Mid"]
  },
  {
    nombre: "Kratos",
    rol: "Tanque",
    dificultad: "Baja",
    activo_en_meta: true,
    estadisticas_base: {
      vida: 720,
      ataque: 68,
      defensa: 55,
      velocidad_movimiento: 345
    },
    habilidades: ["Placaje de Hierro", "Grito de Provocación", "Escudo Inquebrantable"],
    lineas: ["Top", "Support"]
  },
  {
    nombre: "Viper",
    rol: "Asesino",
    dificultad: "Alta",
    activo_en_meta: true,
    estadisticas_base: {
      vida: 490,
      ataque: 78,
      defensa: 22,
      velocidad_movimiento: 355
    },
    habilidades: ["Paso Sombra", "Daga Venenosa", "Ejecución Silenciosa"],
    lineas: ["Jungle"]
  },
  {
    nombre: "Solaria",
    rol: "Soporte",
    dificultad: "Media",
    activo_en_meta: false,
    estadisticas_base: {
      vida: 510,
      ataque: 45,
      defensa: 30,
      velocidad_movimiento: 335
    },
    habilidades: ["Luz Curativa", "Prisma de Inmovilización", "Aura Bendita"],
    lineas: ["Support"]
  },
  {
    nombre: "Hawkeye",
    rol: "Tirador",
    dificultad: "Media",
    activo_en_meta: true,
    estadisticas_base: {
      vida: 530,
      ataque: 82,
      defensa: 25,
      velocidad_movimiento: 325
    },
    habilidades: ["Flecha Perforante", "Salto Evasivo", "Lluvia de Proyectiles"],
    lineas: ["Bot"]
  }
])

// Creación de índices optimizadores para búsquedas frecuentes
db.heroes.createIndex({ nombre: 1 })
db.heroes.createIndex({ rol: 1, activo_en_meta: 1 })