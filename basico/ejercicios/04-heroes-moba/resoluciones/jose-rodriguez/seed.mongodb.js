// 1. Crear y seleccionar la base de datos para el ecosistema MOBA

use('campus_heroes_moba');

// 2. Insertar 5 documentos coherentes y realistas con datos estructurados
db.heroes.insertMany([
  {
    nombre: "Vanguard",
    rol: "Tanque",
    dificultad: "Baja",
    costo_esencia: 450,
    activo: true,
    habilidades: ["Golpe Sísmico", "Escudo Inquebrantable", "Carga Heroica", "Fisura Terrestre"],
    estadisticas_base: { vida_inicial: 620, ataque_base: 58, velocidad_movimiento: 345 }
  },
  {
    nombre: "ShadowBlade",
    rol: "Asesino",
    dificultad: "Alta",
    costo_esencia: 6300,
    activo: true,
    habilidades: ["Daga Envenenada", "Paso Sombrío", "Filo Invisible", "Ejecución Nocturna"],
    estadisticas_base: { vida_inicial: 530, ataque_base: 65, velocidad_movimiento: 350 }
  },
  {
    nombre: "Aria",
    rol: "Mago",
    dificultad: "Media",
    costo_esencia: 3150,
    activo: true,
    habilidades: ["Chispa Arcana", "Barrera de Luz", "Destello Distorsionado", "Tormenta Elemental"],
    estadisticas_base: { vida_inicial: 510, ataque_base: 52, velocidad_movimiento: 330 }
  },
  {
    nombre: "SilverBolt",
    rol: "Tirador",
    dificultad: "Media",
    costo_esencia: 4800,
    activo: true,
    habilidades: ["Flecha Veloz", "Voltereta Evasiva", "Mira Enfocada", "Lluvia de Flechas"],
    estadisticas_base: { vida_inicial: 550, ataque_base: 62, velocidad_movimiento: 335 }
  },
  {
    nombre: "Zephyr",
    rol: "Soporte",
    dificultad: "Alta",
    costo_esencia: 6300,
    activo: false,
    habilidades: ["Brisa Curativa", "Escudo de Viento", "Tornado de Control", "Sinfonía Celestial"],
    estadisticas_base: { vida_inicial: 500, ataque_base: 48, velocidad_movimiento: 340 }
  }
]);