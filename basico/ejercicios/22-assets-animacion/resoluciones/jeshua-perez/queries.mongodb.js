// 22. Assets de animacion 3D
// Consultas - jeshua-perez

use campus_assets_animacion

// 1. Assets en borrador, pendientes de iniciar revision
db.assets.find({ estado: "borrador" })

// 2. Assets aprobados de un proyecto especifico
db.assets.find({ proyecto: "Serie Orbita", estado: "aprobado" })

// 3. Assets en revision, mostrando nombre y version
db.assets.find(
  { estado: "revision" },
  { nombre: 1, version: 1, _id: 0 }
)

// 4. Pasar un asset de borrador a revision
db.assets.updateOne(
  { nombre: "Modelo_Nave_Principal" },
  { $set: { estado: "revision" }, $inc: { version: 1 } }
)

// 5. Aprobar un asset que ya paso revision
db.assets.updateOne(
  { nombre: "Textura_Piel_Base" },
  { $set: { estado: "aprobado" } }
)

// 6. Reporte de assets por estado
db.assets.aggregate([
  { $group: { _id: "$estado", total: { $sum: 1 } } }
])
