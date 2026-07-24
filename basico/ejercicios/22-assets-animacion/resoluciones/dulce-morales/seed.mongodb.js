// Conectarse a la base de datos
use("campus_assets_animacion");

// Insertar documentos iniciales (al menos 5 assets 3D realistas)
db.assets.insertMany([
  {
    nombre: "Personaje Guerrero Heroico",
    categoria: "personajes",
    estado: "aprobado",
    precio: 450000,
    especificaciones: {
      poligonos: 15400,
      vertices: 14200,
      formato: ".fbx",
      rigged: true
    },
    etiquetas: ["rigged", "low-poly", "fantasy", "game-ready"]
  },
  {
    nombre: "Espada Medieval Texturizada",
    categoria: "props",
    estado: "revision",
    precio: 120000,
    especificaciones: {
      poligonos: 3200,
      vertices: 3000,
      formato: ".obj",
      rigged: false
    },
    etiquetas: ["weapon", "medieval", "props"]
  },
  {
    nombre: "Cofre del Tesoro Animado",
    categoria: "props",
    estado: "aprobado",
    precio: 180000,
    especificaciones: {
      poligonos: 5100,
      vertices: 4800,
      formato: ".blend",
      rigged: true
    },
    etiquetas: ["animated", "props", "interactive"]
  },
  {
    nombre: "Entorno Bosque Encantado",
    categoria: "escenarios",
    estado: "pendiente",
    precio: 950000,
    especificaciones: {
      poligonos: 125000,
      vertices: 110000,
      formato: ".fbx",
      rigged: false
    },
    etiquetas: ["environment", "nature", "forest"]
  },
  {
    nombre: "Monstruo Golem de Piedra",
    categoria: "personajes",
    estado: "aprobado",
    precio: 600000,
    especificaciones: {
      poligonos: 28000,
      vertices: 26500,
      formato: ".obj",
      rigged: true
    },
    etiquetas: ["creature", "boss", "rigged"]
  }
]);
