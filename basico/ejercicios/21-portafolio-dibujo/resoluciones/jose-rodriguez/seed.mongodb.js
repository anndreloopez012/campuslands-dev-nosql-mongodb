// Base de Datos de Galería de Dibujo - Script de Poblado (Seed)
use('galeria_dibujo_db');

// Limpieza de colecciones previas
db.artistas.drop();
db.obras.drop();

// 1. Inserción de Artistas (Colección: artistas)
db.artistas.insertMany([
  {
    _id: "ART-001",
    nombre: "Sofía Chen",
    nickname: "SofiArt",
    especialidad: "Dibujo Digital & Concept Art",
    redesSociales: {
      instagram: "@sofiart_draws",
      artstation: "sofiachen"
    }
  },
  {
    _id: "ART-002",
    nombre: "Marcos Rivas",
    nickname: "TintaNegra",
    especialidad: "Ilustración Tradicional & Manga",
    redesSociales: {
      instagram: "@tintanegra_manga",
      artstation: "mrivas_art"
    }
  },
  {
    _id: "ART-003",
    nombre: "Elena Beltrán",
    nickname: "ElenaPencils",
    especialidad: "Retrato a Grafito y Acuarela",
    redesSociales: {
      instagram: "@elena_pencils",
      artstation: "elenabeltran"
    }
  }
]);

// 2. Inserción de Obras de Dibujo (Colección: obras)
// Modelado: Array de cadenas para 'tags' (búsqueda rápida) y Subdocumento 'detallesTecnicos'
db.obras.insertMany([
  {
    _id: "OBR-001",
    titulo: "Cazadora de Estrellas",
    artistaId: "ART-001",
    tecnica: "Digital",
    tags: ["digital", "fantasy", "personajes", "concept-art", "color"],
    detallesTecnicos: {
      softwareMaterial: "Procreate",
      dimensiones: "4000x3000 px",
      tiempoHoras: 8
    },
    metricas: {
      vistas: 1200,
      likes: 450
    },
    fechaPublicacion: ISODate("2026-03-15T00:00:00Z")
  },
  {
    _id: "OBR-002",
    titulo: "Boceto Urbano en Tinta",
    artistaId: "ART-002",
    tecnica: "Tinta",
    tags: ["boceto", "urbano", "tinta", "arquitectura", "blanco-y-negro"],
    detallesTecnicos: {
      softwareMaterial: "Estilógrafo 0.5mm",
      dimensiones: "A4",
      tiempoHoras: 3
    },
    metricas: {
      vistas: 850,
      likes: 310
    },
    fechaPublicacion: ISODate("2026-04-10T00:00:00Z")
  },
  {
    _id: "OBR-003",
    titulo: "Retrato Botánico",
    artistaId: "ART-003",
    tecnica: "Acuarela",
    tags: ["acuarela", "naturaleza", "retrato", "color", "flora"],
    detallesTecnicos: {
      softwareMaterial: "Papel Guarro 300g y Acuarelas",
      dimensiones: "30x40 cm",
      tiempoHoras: 12
    },
    metricas: {
      vistas: 2100,
      likes: 890
    },
    fechaPublicacion: ISODate("2026-05-02T00:00:00Z")
  },
  {
    _id: "OBR-004",
    titulo: "Guerrero Cyberpunk - Boceto",
    artistaId: "ART-001",
    tecnica: "Digital",
    tags: ["digital", "cyberpunk", "boceto", "personajes", "blanco-y-negro"],
    detallesTecnicos: {
      softwareMaterial: "Photoshop",
      dimensiones: "1920x1080 px",
      tiempoHoras: 4
    },
    metricas: {
      vistas: 950,
      likes: 280
    },
    fechaPublicacion: ISODate("2026-06-20T00:00:00Z")
  },
  {
    _id: "OBR-005",
    titulo: "Estudio de Rostros Manga",
    artistaId: "ART-002",
    tecnica: "Grafito",
    tags: ["boceto", "manga", "retrato", "grafito", "estudio"],
    detallesTecnicos: {
      softwareMaterial: "Lápiz 2B y 4B",
      dimensiones: "A3",
      tiempoHoras: 5
    },
    metricas: {
      vistas: 1500,
      likes: 620
    },
    fechaPublicacion: ISODate("2026-07-01T00:00:00Z")
  }
]);
