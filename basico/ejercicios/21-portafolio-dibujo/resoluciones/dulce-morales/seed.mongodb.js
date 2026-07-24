// Conexión o creación de la base de datos
use("campus_portafolio_dibujo");

// Inserción de documentos iniciales
db.dibujos.insertMany([
  {
    titulo: "Cyberpunk Samurai",
    categoria: "ilustracion_digital",
    estado: "publicado",
    likes: 240,
    detalles: {
      tecnica: "Tableta Gráfica",
      resolucion: "4K",
      horas_trabajo: 18
    },
    etiquetas: ["cyberpunk", "samurai", "sci-fi", "digital"]
  },
  {
    titulo: "Retrato Realista a Lápiz",
    categoria: "dibujo_tradicional",
    estado: "publicado",
    likes: 155,
    detalles: {
      tecnica: "Grafito sobre papel Marquilla",
      resolucion: "Físico A3",
      horas_trabajo: 12
    },
    etiquetas: ["retrato", "realismo", "lapiz", "monocromo"]
  },
  {
    titulo: "Bosque Encantado en Acuarela",
    categoria: "pintura",
    estado: "publicado",
    likes: 98,
    detalles: {
      tecnica: "Acuarela y Tinta",
      resolucion: "Físico A4",
      horas_trabajo: 6
    },
    etiquetas: ["paisaje", "acuarela", "fantasia", "naturaleza"]
  },
  {
    titulo: "Boceto de Criatura Alienígena",
    categoria: "boceto",
    estado: "borrador",
    likes: 42,
    detalles: {
      tecnica: "Lápiz y Marcador de alcohol",
      resolucion: "Físico A5",
      horas_trabajo: 3
    },
    etiquetas: ["boceto", "criatura", "alien", "concept_art"]
  },
  {
    titulo: "Estudio Anatómico de Manos",
    categoria: "practica",
    estado: "publicado",
    likes: 110,
    detalles: {
      tecnica: "Tinta digital",
      resolucion: "1080p",
      horas_trabajo: 4
    },
    etiquetas: ["anatomia", "manos", "practica", "tinta"]
  }
]);