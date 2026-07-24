// Assets de animacion 3D — queries
// Autor: juan-lema
use("campus_assets_animacion");

// 1. Listar todos los assets
db.assets_animacion.find({});

// 2. Filtrar: assets activos de tipo "animacion"
db.assets_animacion.find(
  { tipo: "animacion", activo: true },
  { nombre: 1, duracionSegundos: 1, etiquetas: 1, _id: 0 }
);

// 3. Filtrar: assets pesados (metadata.pesoMB mayor a 50)
db.assets_animacion.find(
  { "metadata.pesoMB": { $gt: 50 } },
  { nombre: 1, "metadata.pesoMB": 1, _id: 0 }
);

// 4. Actualizar: reactivar la textura descontinuada y agregar revision
db.assets_animacion.updateOne(
  { nombre: "Textura_Piedra_Musgosa" },
  {
    $set: { activo: true },
    $push: { revisiones: { version: 2, autor: "juan-lema", nota: "Reactivada tras reempaquetado PBR" } }
  }
);

// Verificacion 4
db.assets_animacion.find({ nombre: "Textura_Piedra_Musgosa" });

// 5. Eliminar: quitar el prop de utileria interactivo
db.assets_animacion.deleteOne({ nombre: "Cofre_Magico_Prop" });

// Verificacion 5
db.assets_animacion.find({ categoria: "utileria" });

// 6. Conteo final de documentos
db.assets_animacion.countDocuments({});
