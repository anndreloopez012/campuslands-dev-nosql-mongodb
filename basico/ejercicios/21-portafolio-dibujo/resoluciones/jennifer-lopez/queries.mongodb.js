// Portafolio de dibujo - Consultas y Operaciones
// Solución de Denise López - Ejercicio 21

use campus_portafolio_dibujo

// 1. Consulta general requerida por la plantilla base
db.obras.find({})

// 2. Búsqueda por etiqueta individual: Obras etiquetadas como "fanart"
db.obras.find(
  { etiquetas: "fanart" },
  { titulo: 1, artista: 1, tecnica: 1, etiquetas: 1, _id: 0 }
)

// 3. Búsqueda por múltiples etiquetas simultáneas ($all): Obras con tags "anime" Y "digital"
db.obras.find(
  { etiquetas: { $all: ["anime", "digital"] } },
  { titulo: 1, artista: 1, lugar_inspiracion: 1, etiquetas: 1, _id: 0 }
)

// 4. Búsqueda con operador $in: Obras etiquetadas con "marvel" O "dc-comics"
db.obras.find(
  { etiquetas: { $in: ["marvel", "dc-comics"] } },
  { titulo: 1, artista: 1, tecnica: 1, _id: 0 }
)

// 5. Operación de actualización (Update): Agregar una nueva etiqueta ($push) y sumar likes ($inc)
db.obras.updateOne(
  { titulo: "Spider-Man sobre el Horizonte Nocturno" },
  { 
    $push: { etiquetas: "tendencia" },
    $inc: { likes_recibidos: 50 }
  }
)

// 6. Inserción de una nueva obra creada en Semuc Champey, Guatemala
db.obras.insertOne({
  titulo: "Totoro bajo la Lluvia",
  artista: "Zephyrine Valdivia",
  lugar_inspiracion: "Semuc Champey",
  pais: "Guatemala",
  tecnica: "Digital Paint",
  software_usado: "Procreate",
  etiquetas: ["studio-ghibli", "totoro", "anime", "digital", "naturaleza"],
  likes_recibidos: 150,
  destacado: true,
  fecha_publicacion: ISODate("2026-07-21T00:00:00Z")
})