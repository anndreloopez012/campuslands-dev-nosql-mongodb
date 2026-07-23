// Base de datos del ejercicio
use("campus_portafolio_dibujo");

// Limpio la colección para evitar duplicados si vuelvo a ejecutar el script
db.dibujos.drop();

// Los tags se almacenan como un arreglo porque forman parte del dibujo
// y son la forma más simple de realizar búsquedas por temática.

db.dibujos.insertMany([
  {
    titulo: "Ciudad Nocturna",
    autor: "Carlos Méndez",
    tecnica: "Digital",
    fecha: ISODate("2026-05-10"),
    etiquetas: ["ciudad", "noche", "luces", "digital"],
    publicado: true
  },
  {
    titulo: "Bosque Encantado",
    autor: "Andrea López",
    tecnica: "Acuarela",
    fecha: ISODate("2026-05-18"),
    etiquetas: ["bosque", "naturaleza", "fantasia"],
    publicado: true
  },
  {
    titulo: "Samurái",
    autor: "Kevin Morales",
    tecnica: "Lápiz",
    fecha: ISODate("2026-06-02"),
    etiquetas: ["personaje", "lapiz", "samurai"],
    publicado: false
  },
  {
    titulo: "Montañas",
    autor: "María García",
    tecnica: "Óleo",
    fecha: ISODate("2026-06-15"),
    etiquetas: ["paisaje", "montañas", "naturaleza"],
    publicado: true
  },
  {
    titulo: "Dragón Oriental",
    autor: "José Ramírez",
    tecnica: "Digital",
    fecha: ISODate("2026-07-01"),
    etiquetas: ["dragon", "fantasia", "digital"],
    publicado: false
  }
]);