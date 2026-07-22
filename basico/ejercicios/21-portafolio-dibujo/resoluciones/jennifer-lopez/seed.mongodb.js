// Portafolio de dibujo 
// Solución de Denise López - Ejercicio 21

use campus_portafolio_dibujo

// Crear la colección principal en minúsculas y plural
db.createCollection("obras")

// Insertar 5 ilustraciones de portafolio con tags, artistas de nombres poco comunes y temas populares
db.obras.insertMany([
  {
    titulo: "Spider-Man sobre el Horizonte Nocturno",
    artista: "Orestes Vane",
    lugar_inspiracion: "Cráter Azul",
    pais: "Guatemala",
    tecnica: "Digital Paint",
    software_usado: "Procreate",
    etiquetas: ["fanart", "spider-man", "marvel", "digital", "nocturno"],
    likes_recibidos: 340,
    destacado: true,
    fecha_publicacion: ISODate("2026-05-10T00:00:00Z")
  },
  {
    titulo: "Retrato del Castillo de Hogwarts",
    artista: "Cyrene Sterling",
    lugar_inspiracion: "Laguna Lachúa",
    pais: "Guatemala",
    tecnica: "Acuarela y Estilógrafo",
    software_usado: "Ninguno (Análogo)",
    etiquetas: ["harry-potter", "fantasía", "acuarela", "arquitectura", "tradicional"],
    likes_recibidos: 520,
    destacado: true,
    fecha_publicacion: ISODate("2026-06-01T00:00:00Z")
  },
  {
    titulo: "Goku Super Saiyajin Fase 4",
    artista: "Balthazar Nightshade",
    lugar_inspiracion: "Quiriguá",
    pais: "Guatemala",
    tecnica: "Tinta y Copic Markers",
    software_usado: "Clip Studio Paint (Coloring)",
    etiquetas: ["dragon-ball", "anime", "manga", "fanart", "tradicional"],
    likes_recibidos: 280,
    destacado: false,
    fecha_publicacion: ISODate("2026-06-15T00:00:00Z")
  },
  {
    titulo: "Batman en la Sombría Ciudad Gótica",
    artista: "Melantho Frost",
    lugar_inspiracion: "Cataratas del Todra",
    pais: "Marruecos",
    tecnica: "Carboncillo y Blackwork",
    software_usado: "Photoshop",
    etiquetas: ["batman", "dc-comics", "blackwork", "oscuro", "digital"],
    likes_recibidos: 190,
    destacado: false,
    fecha_publicacion: ISODate("2026-07-02T00:00:00Z")
  },
  {
    titulo: "Sailor Moon y el Cetro Lunar",
    artista: "Xanthos Escandón",
    lugar_inspiracion: "Semuc Champey",
    pais: "Guatemala",
    tecnica: "Vectorial / Cell Shading",
    software_usado: "Adobe Illustrator",
    etiquetas: ["sailor-moon", "anime", "vector", "shojo", "digital"],
    likes_recibidos: 410,
    destacado: true,
    fecha_publicacion: ISODate("2026-07-18T00:00:00Z")
  }
])

// Crear índices para optimizar la búsqueda rápida por etiquetas y obras destacadas
db.obras.createIndex({ etiquetas: 1 })
db.obras.createIndex({ destacado: 1 })
db.obras.createIndex({ artista: 1 })