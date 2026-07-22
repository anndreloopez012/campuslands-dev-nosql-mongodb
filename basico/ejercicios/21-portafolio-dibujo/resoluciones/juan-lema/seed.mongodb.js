// Ejercicio 21 - Portafolio de dibujo
// Autor: juan-lema
// Coleccion: registros (obras del portafolio)

use campus_portafolio_dibujo

db.createCollection("registros")

db.registros.insertMany([
  {
    titulo: "Retrato al carboncillo",
    artista: "Lucia Fonseca",
    tecnica: "carboncillo",
    categoria: "retrato",
    etiquetas: ["rostro", "blanco-negro", "estudio"],
    publicado: true,
    valoracion: 4.6,
    dimensiones: { ancho_cm: 30, alto_cm: 40 },
    fechaCreacion: new Date("2024-02-10")
  },
  {
    titulo: "Paisaje de montana",
    artista: "Diego Serna",
    tecnica: "acuarela",
    categoria: "paisaje",
    etiquetas: ["naturaleza", "color", "exterior"],
    publicado: true,
    valoracion: 4.2,
    dimensiones: { ancho_cm: 25, alto_cm: 35 },
    fechaCreacion: new Date("2024-03-05")
  },
  {
    titulo: "Boceto de personaje anime",
    artista: "Lucia Fonseca",
    tecnica: "lapiz",
    categoria: "personaje",
    etiquetas: ["anime", "boceto", "estudio"],
    publicado: false,
    valoracion: 3.8,
    dimensiones: { ancho_cm: 20, alto_cm: 28 },
    fechaCreacion: new Date("2024-04-18")
  },
  {
    titulo: "Naturaleza muerta con frutas",
    artista: "Marco Vidal",
    tecnica: "oleo",
    categoria: "bodegon",
    etiquetas: ["color", "clasico"],
    publicado: true,
    valoracion: 4.9,
    dimensiones: { ancho_cm: 40, alto_cm: 50 },
    fechaCreacion: new Date("2024-01-22")
  },
  {
    titulo: "Estudio de manos",
    artista: "Diego Serna",
    tecnica: "lapiz",
    categoria: "estudio",
    etiquetas: ["anatomia", "blanco-negro", "estudio"],
    publicado: true,
    valoracion: 4.0,
    dimensiones: { ancho_cm: 15, alto_cm: 20 },
    fechaCreacion: new Date("2024-05-02")
  },
  {
    titulo: "Escena urbana nocturna",
    artista: "Marco Vidal",
    tecnica: "tinta",
    categoria: "urbano",
    etiquetas: ["ciudad", "blanco-negro", "exterior"],
    publicado: false,
    valoracion: 4.4,
    dimensiones: { ancho_cm: 30, alto_cm: 30 },
    fechaCreacion: new Date("2024-06-11")
  }
])

db.registros.find().pretty()
