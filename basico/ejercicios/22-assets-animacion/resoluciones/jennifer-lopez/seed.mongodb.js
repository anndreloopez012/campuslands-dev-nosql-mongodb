// Assets de animación 3D
// Solución de Denise López - Ejercicio 22

use campus_assets_animacion

// Crear la colección principal en minúsculas y plural
db.createCollection("assets")

// Insertar 5 assets 3D con estados de producción, nombres poco comunes y proyectos conocidos
db.assets.insertMany([
  {
    nombre_asset: "Nave Espacial Buzz Lightyear",
    modelador: "Orestes Vane",
    proyecto_pelicula: "Toy Story",
    lugar_ambientacion: "Cráter Azul",
    pais: "Guatemala",
    tipo: "Vehículo",
    poligonos_count: 45000,
    software: "Blender / Maya",
    estado_produccion: "aprobado",
    detalles_tecnicos: {
      texturizado: true,
      rigged: true,
      formato: "FBX"
    },
    version: 2.1,
    fecha_actualizacion: ISODate("2026-06-10T00:00:00Z")
  },
  {
    nombre_asset: "Casa en el Pantano de Shrek",
    modelador: "Cyrene Sterling",
    proyecto_pelicula: "Shrek",
    lugar_ambientacion: "Laguna Lachúa",
    pais: "Guatemala",
    tipo: "Escenario",
    poligonos_count: 120000,
    software: "ZBrush / Houdini",
    estado_produccion: "en_revision",
    detalles_tecnicos: {
      texturizado: true,
      rigged: false,
      formato: "OBJ"
    },
    version: 1.4,
    fecha_actualizacion: ISODate("2026-06-18T00:00:00Z")
  },
  {
    nombre_asset: "Báculo del Maestro Shifu",
    modelador: "Balthazar Nightshade",
    proyecto_pelicula: "Kung Fu Panda",
    lugar_ambientacion: "Quiriguá",
    pais: "Guatemala",
    tipo: "Prop / Utilería",
    poligonos_count: 15000,
    software: "Maya",
    estado_produccion: "modelado",
    detalles_tecnicos: {
      texturizado: false,
      rigged: false,
      formato: "FBX"
    },
    version: 1.0,
    fecha_actualizacion: ISODate("2026-07-01T00:00:00Z")
  },
  {
    nombre_asset: "Traje Estilizado de Miles Morales",
    modelador: "Melantho Frost",
    proyecto_pelicula: "Spider-Man: Into the Spider-Verse",
    lugar_ambientacion: "Cataratas del Todra",
    pais: "Marruecos",
    tipo: "Personaje",
    poligonos_count: 85000,
    software: "ZBrush / Marvelous Designer",
    estado_produccion: "texturizado",
    detalles_tecnicos: {
      texturizado: true,
      rigged: false,
      formato: "USD"
    },
    version: 1.8,
    fecha_actualizacion: ISODate("2026-07-12T00:00:00Z")
  },
  {
    nombre_asset: "Ikran (Banshee de las Montañas)",
    modelador: "Xanthos Escandón",
    proyecto_pelicula: "Avatar",
    lugar_ambientacion: "Semuc Champey",
    pais: "Guatemala",
    tipo: "Criatura",
    poligonos_count: 210000,
    software: "Unreal Engine / Maya",
    estado_produccion: "aprobado",
    detalles_tecnicos: {
      texturizado: true,
      rigged: true,
      formato: "USD"
    },
    version: 3.0,
    fecha_actualizacion: ISODate("2026-07-19T00:00:00Z")
  }
])

// Crear índices para optimizar búsquedas por estado de producción y tipo de asset

// Optimiza las búsquedas frecuentes por fase de trabajo.
// Sirve para que el equipo de animación consulte en milisegundos qué modelos ya están listos para usar sin escanear toda la colección.
db.assets.createIndex({ estado_produccion: 1 })

// Acelera los filtros por categoría de modelo (Personaje, Escenario, Prop, Criatura).
// Sirve para que los artistas 3D encuentren rápidamente sólo los elementos del tipo que necesitan integrar en sus escenas.
db.assets.createIndex({ tipo: 1 })

// Agiliza las consultas por el nombre del artista o modelador asignado.
// Sirve para auditorías de carga de trabajo por persona y para generar reportes del rendimiento de cada creador.
db.assets.createIndex({ modelador: 1 })