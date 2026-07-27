// Base de Datos de Animación 3D - Script de Poblado (Seed)
use('animacion_3d_db');

// Limpieza de colecciones previas
db.proyectos.drop();
db.artistas.drop();
db.shots.drop();

// 1. Inserción de Proyectos (Colección: proyectos)
db.proyectos.insertMany([
  {
    _id: "PRJ-001",
    titulo: "CyberRacer 2088",
    tipoProduccion: "Cortometraje 3D",
    director: "Gabriel Solares",
    estadoProyecto: "EN_PRODUCCION",
    fechaInicio: ISODate("2026-01-10T00:00:00Z")
  },
  {
    _id: "PRJ-002",
    titulo: "El Bosque Encantado",
    tipoProduccion: "Comercial TV",
    director: "Valeria Ríos",
    estadoProyecto: "POST_PRODUCCION",
    fechaInicio: ISODate("2026-03-01T00:00:00Z")
  }
]);

// 2. Inserción de Artistas 3D (Colección: artistas)
db.artistas.insertMany([
  {
    _id: "ART-001",
    nombre: "Esteban",
    apellido: "Quel",
    especialidad: "Animación de Personajes",
    softwarePrincipal: "Autodesk Maya",
    activo: true
  },
  {
    _id: "ART-002",
    nombre: "Lucía",
    apellido: "Vargas",
    especialidad: "Lighting & Render",
    softwarePrincipal: "Blender / Cycles",
    activo: true
  }
]);

// 3. Inserción de Shots / Tomas 3D con Estado (Colección: shots)
// Modelado: Campo 'estadoPipeline' para control de flujo,
// Subdocumento 'detallesTecnicos' y Array 'historialRevisiones'.
db.shots.insertMany([
  {
    _id: "SHT-001",
    proyectoId: "PRJ-001",
    artistaId: "ART-001",
    codigoShot: "SQ01_SH010",
    nombreShot: "Persecución en la autopista",
    estadoPipeline: "EN_RENDER", // BOCETO, RIGGING, ANIMACION, EN_RENDER, REVISION_REQUERIDA, APROBADO
    detallesTecnicos: {
      software: "Autodesk Maya",
      motorRender: "Arnold",
      fps: 24,
      frameInicio: 1,
      frameFin: 120,
      totalFrames: 120
    },
    historialRevisiones: [
      { version: "v0.1", fecha: ISODate("2026-06-01T10:00:00Z"), estado: "RECHAZADO", comentario: "Ajustar curva de velocidad en frame 45" },
      { version: "v0.2", fecha: ISODate("2026-06-05T14:30:00Z"), estado: "APROBADO", comentario: "Movimiento fluido, pase a iluminación" }
    ],
    etiquetasTecnicas: ["Vehículos", "HardSurface", "AltaVelocidad"]
  },
  {
    _id: "SHT-002",
    proyectoId: "PRJ-001",
    artistaId: "ART-002",
    codigoShot: "SQ01_SH020",
    nombreShot: "Primer plano del piloto",
    estadoPipeline: "REVISION_REQUERIDA",
    detallesTecnicos: {
      software: "Blender",
      motorRender: "Cycles",
      fps: 24,
      frameInicio: 1,
      frameFin: 72,
      totalFrames: 72
    },
    historialRevisiones: [
      { version: "v0.1", fecha: ISODate("2026-06-10T11:00:00Z"), estado: "RECHAZADO", comentario: "Ruido excesivo en sombras de rostro" }
    ],
    etiquetasTecnicas: ["Personaje", "FacialRig", "Lighting"]
  },
  {
    _id: "SHT-003",
    proyectoId: "PRJ-002",
    artistaId: "ART-001",
    codigoShot: "COMM_SH001",
    nombreShot: "Aparición del duende",
    estadoPipeline: "APROBADO",
    detallesTecnicos: {
      software: "Autodesk Maya",
      motorRender: "Redshift",
      fps: 30,
      frameInicio: 1,
      frameFin: 150,
      totalFrames: 150
    },
    historialRevisiones: [
      { version: "v0.1", fecha: ISODate("2026-05-15T09:00:00Z"), estado: "APROBADO", comentario: "Excelente simulación de pelo y tela" }
    ],
    etiquetasTecnicas: ["Creatura", "Grooming", "Simulacion"]
  },
  {
    _id: "SHT-004",
    proyectoId: "PRJ-001",
    artistaId: "ART-002",
    codigoShot: "SQ02_SH010",
    nombreShot: "Explosión en el túnel",
    estadoPipeline: "ANIMACION",
    detallesTecnicos: {
      software: "Houdini / Blender",
      motorRender: "Mantra",
      fps: 24,
      frameInicio: 1,
      frameFin: 200,
      totalFrames: 200
    },
    historialRevisiones: [],
    etiquetasTecnicas: ["VFX", "Partículas", "Destrucción"]
  }
]);
