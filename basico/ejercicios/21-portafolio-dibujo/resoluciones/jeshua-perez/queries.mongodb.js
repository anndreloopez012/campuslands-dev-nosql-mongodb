// 21. Portafolio de dibujo
// Consultas - jeshua-perez

use campus_portafolio_dibujo

// 1. Buscar dibujos por tag
db.dibujos.find({ tags: "paisaje" })

// 2. Buscar dibujos que combinen dos tags ($all)
db.dibujos.find({ tags: { $all: ["ciencia ficcion", "personaje"] } })

// 3. Buscar dibujos por artista, solo los publicados
db.dibujos.find({ artista: "Lorena Duque", publicado: true })

// 4. Buscar dibujos por tecnica, mostrando titulo y tags
db.dibujos.find(
  { tecnica: "Digital" },
  { titulo: 1, tags: 1, _id: 0 }
)

// 5. Publicar un dibujo que estaba en borrador
db.dibujos.updateOne(
  { titulo: "Dragon Ancestral" },
  { $set: { publicado: true } }
)

// 6. Agregar un tag adicional a un dibujo ya existente
db.dibujos.updateOne(
  { titulo: "Estudio de Manos" },
  { $push: { tags: "referencia" } }
)
