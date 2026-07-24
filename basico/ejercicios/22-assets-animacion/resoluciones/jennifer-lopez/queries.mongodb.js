// Assets de animación 3D - Consultas y Operaciones
// Solución de Denise López - Ejercicio 22

use campus_assets_animacion

// 1. Consulta general requerida por la plantilla base
db.assets.find({})

// 2. Consulta por estado de producción: Assets aprobados listos para integración
db.assets.find(
  { estado_produccion: "aprobado" },
  { nombre_asset: 1, proyecto_pelicula: 1, modelador: 1, "detalles_tecnicos.formato": 1, _id: 0 }
)

// 3. Consulta de assets en desarrollo pendíentes de rigging o aprobación
db.assets.find(
  { estado_produccion: { $in: ["en_revision", "modelado", "texturizado"] } },
  { nombre_asset: 1, tipo: 1, estado_produccion: 1, poligonos_count: 1, _id: 0 }
)

// 4. Filtro por complejidad técnica: Assets con más de 80,000 polígonos
db.assets.find(
  { poligonos_count: { $gt: 80000 } },
  { nombre_asset: 1, proyecto_pelicula: 1, poligonos_count: 1, software: 1, _id: 0 }
)

// 5. Operación de actualización (Update): Promover el asset de Shrek a "aprobado" y completar rigging
db.assets.updateOne(
  { nombre_asset: "Casa en el Pantano de Shrek" },
  { 
    $set: { 
      estado_produccion: "aprobado",
      "detalles_tecnicos.rigged": true,
      fecha_actualizacion: ISODate("2026-07-22T00:00:00Z")
    },
    $inc: { version: 0.1 }
  }
)

// 6. Inserción de un nuevo asset registrado para el proyecto en Guatemala
db.assets.insertOne({
  nombre_asset: "Amuleto de Jade Maya",
  modelador: "Zephyrine Valdivia",
  proyecto_pelicula: "El Dorado",
  lugar_ambientacion: "Tikal",
  pais: "Guatemala",
  tipo: "Prop / Utilería",
  poligonos_count: 12000,
  software: "Blender",
  estado_produccion: "aprobado",
  detalles_tecnicos: {
    texturizado: true,
    rigged: false,
    formato: "FBX"
  },
  version: 1.0,
  fecha_actualizacion: ISODate("2026-07-22T00:00:00Z")
})