// Biblioteca tech - seed
// Autor: juan-lema
use campus_biblioteca_tech

db.createCollection("registros")

db.registros.insertMany([
  {
    titulo: "Domina las bases NoSQL",
    autor: { nombre: "Elena Vargas", pais: "Espana" },
    categoria: "bases de datos",
    etiquetas: ["mongodb", "nosql", "backend"],
    anio: 2021,
    disponible: true,
    copiasDisponibles: 4,
    puntaje: 88,
    resenas: [
      { usuario: "carlos_dev", calificacion: 5, comentario: "Explicaciones claras" }
    ]
  },
  {
    titulo: "Arquitecturas de microservicios",
    autor: { nombre: "Diego Roman", pais: "Colombia" },
    categoria: "arquitectura",
    etiquetas: ["microservicios", "backend", "cloud"],
    anio: 2019,
    disponible: true,
    copiasDisponibles: 2,
    puntaje: 92,
    resenas: [
      { usuario: "ana_qa", calificacion: 4, comentario: "Buen enfoque practico" },
      { usuario: "luis_ops", calificacion: 5, comentario: "Referencia obligada" }
    ]
  },
  {
    titulo: "JavaScript para el mundo real",
    autor: { nombre: "Marta Salinas", pais: "Mexico" },
    categoria: "programacion",
    etiquetas: ["javascript", "frontend", "web"],
    anio: 2022,
    disponible: false,
    copiasDisponibles: 0,
    puntaje: 75,
    resenas: []
  },
  {
    titulo: "Fundamentos de redes modernas",
    autor: { nombre: "Hector Prada", pais: "Chile" },
    categoria: "redes",
    etiquetas: ["networking", "infraestructura"],
    anio: 2018,
    disponible: true,
    copiasDisponibles: 6,
    puntaje: 80,
    resenas: [
      { usuario: "pati_net", calificacion: 3, comentario: "Correcto pero denso" }
    ]
  },
  {
    titulo: "Ciencia de datos aplicada",
    autor: { nombre: "Elena Vargas", pais: "Espana" },
    categoria: "datos",
    etiquetas: ["python", "machine learning", "datos"],
    anio: 2023,
    disponible: true,
    copiasDisponibles: 3,
    puntaje: 95,
    resenas: [
      { usuario: "sofia_ds", calificacion: 5, comentario: "Muy actualizado" }
    ]
  },
  {
    titulo: "Seguridad ofensiva basica",
    autor: { nombre: "Ramiro Cueva", pais: "Argentina" },
    categoria: "seguridad",
    etiquetas: ["pentesting", "redes", "seguridad"],
    anio: 2020,
    disponible: false,
    copiasDisponibles: 0,
    puntaje: 70,
    resenas: [
      { usuario: "juan_sec", calificacion: 3, comentario: "Le falta profundidad" }
    ]
  }
])
