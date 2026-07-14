// 22. Assets de animacion 3D
// Solucion - jeshua-perez (nivel basico)
// Enfoque: documentos con estado

use campus_assets_animacion

db.assets.drop()

db.createCollection("assets")

db.assets.insertMany([
  { nombre: "Personaje_Heroe_Rig", tipo: "rig", proyecto: "Cortometraje Aurora", version: 3, estado: "aprobado" },
  { nombre: "Textura_Piel_Base", tipo: "textura", proyecto: "Cortometraje Aurora", version: 2, estado: "revision" },
  { nombre: "Modelo_Nave_Principal", tipo: "modelo", proyecto: "Serie Orbita", version: 1, estado: "borrador" },
  { nombre: "Rig_Criatura_Alada", tipo: "rig", proyecto: "Serie Orbita", version: 4, estado: "aprobado" },
  { nombre: "Textura_Metal_Nave", tipo: "textura", proyecto: "Serie Orbita", version: 1, estado: "borrador" },
  { nombre: "Modelo_Escenario_Ciudad", tipo: "modelo", proyecto: "Cortometraje Aurora", version: 2, estado: "revision" }
])
