// 21. Portafolio de dibujo
// Solucion - jeshua-perez (nivel basico)
// Enfoque: tags y busqueda

use campus_portafolio_dibujo

db.dibujos.drop()

db.createCollection("dibujos")

db.dibujos.insertMany([
  { titulo: "Retrato en Carboncillo", artista: "Manuela Prieto", tecnica: "Carboncillo", tags: ["retrato", "realismo", "blanco y negro"], publicado: true },
  { titulo: "Ciudad Futurista", artista: "Esteban Rojas", tecnica: "Digital", tags: ["ciencia ficcion", "paisaje", "color"], publicado: true },
  { titulo: "Estudio de Manos", artista: "Manuela Prieto", tecnica: "Lapiz", tags: ["estudio", "anatomia"], publicado: false },
  { titulo: "Bosque Encantado", artista: "Lorena Duque", tecnica: "Acuarela", tags: ["fantasia", "paisaje", "color"], publicado: true },
  { titulo: "Robot Guardian", artista: "Esteban Rojas", tecnica: "Digital", tags: ["ciencia ficcion", "personaje"], publicado: true },
  { titulo: "Dragon Ancestral", artista: "Lorena Duque", tecnica: "Digital", tags: ["fantasia", "personaje", "color"], publicado: false }
])
