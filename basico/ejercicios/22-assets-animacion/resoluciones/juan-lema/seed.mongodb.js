// Assets de animacion 3D — seed
// Autor: juan-lema
use("campus_assets_animacion");

db.createCollection("assets_animacion");

db.assets_animacion.insertMany([
  {
    nombre: "Guerrero_Elfico_Rig",
    tipo: "rig",
    categoria: "personaje",
    activo: true,
    poligonos: 45000,
    duracionSegundos: 0,
    etiquetas: ["personaje", "fantasia", "rig-biped"],
    metadata: { formato: "FBX", pesoMB: 82, resolucion: "N/A" },
    revisiones: [{ version: 1, autor: "juan-lema", nota: "Rig inicial con controles IK" }]
  },
  {
    nombre: "Bosque_Nocturno_Entorno",
    tipo: "modelo",
    categoria: "entorno",
    activo: true,
    poligonos: 210000,
    duracionSegundos: 0,
    etiquetas: ["entorno", "naturaleza", "nocturno"],
    metadata: { formato: "OBJ", pesoMB: 340, resolucion: "N/A" },
    revisiones: [{ version: 2, autor: "juan-lema", nota: "Optimizacion de LOD" }]
  },
  {
    nombre: "Ciclo_Caminata_Robot",
    tipo: "animacion",
    categoria: "personaje",
    activo: true,
    poligonos: 0,
    duracionSegundos: 3,
    etiquetas: ["personaje", "sci-fi", "loop"],
    metadata: { formato: "FBX", pesoMB: 6, resolucion: "N/A" },
    revisiones: [{ version: 1, autor: "juan-lema", nota: "Loop de caminata a 30fps" }]
  },
  {
    nombre: "Textura_Piedra_Musgosa",
    tipo: "textura",
    categoria: "utileria",
    activo: false,
    poligonos: 0,
    duracionSegundos: 0,
    etiquetas: ["textura", "PBR", "entorno"],
    metadata: { formato: "PNG", pesoMB: 12, resolucion: "4096x4096" },
    revisiones: [{ version: 1, autor: "juan-lema", nota: "Version descontinuada" }]
  },
  {
    nombre: "Cofre_Magico_Prop",
    tipo: "prop",
    categoria: "utileria",
    activo: true,
    poligonos: 8500,
    duracionSegundos: 0,
    etiquetas: ["prop", "fantasia", "interactivo"],
    metadata: { formato: "FBX", pesoMB: 15, resolucion: "N/A" },
    revisiones: [{ version: 1, autor: "juan-lema", nota: "Prop con animacion de apertura" }]
  },
  {
    nombre: "Explosion_Magica_VFX_Animacion",
    tipo: "animacion",
    categoria: "utileria",
    activo: true,
    poligonos: 0,
    duracionSegundos: 2,
    etiquetas: ["vfx", "fantasia", "efecto"],
    metadata: { formato: "ABC", pesoMB: 9, resolucion: "N/A" },
    revisiones: [{ version: 1, autor: "juan-lema", nota: "Cache alembic de particulas" }]
  }
]);

db.assets_animacion.find({});
