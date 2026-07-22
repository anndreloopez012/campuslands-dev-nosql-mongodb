// Sagas de ciencia ficcion
// Autor: juan-lema
use campus_sci_fi_sagas

// Coleccion principal: sagas
db.sagas.insertMany([
  { _id: "SAGA001", titulo: "Horizonte Estelar", anio_inicio: 1998, creador: "Elena Voss", planetas: ["Kepler-9", "Orion Prime"], activa: true },
  { _id: "SAGA002", titulo: "Cronicas de Andromeda", anio_inicio: 2005, creador: "Marco Idris", planetas: ["Andromeda IV"], activa: true },
  { _id: "SAGA003", titulo: "El Ultimo Reactor", anio_inicio: 1987, creador: "Sofia Lang", planetas: ["Terra Nova", "Vestal"], activa: false },
  { _id: "SAGA004", titulo: "Nexus Cuantico", anio_inicio: 2012, creador: "Elena Voss", planetas: ["Quanta"], activa: true },
  { _id: "SAGA005", titulo: "Guardianes del Vacio", anio_inicio: 1994, creador: "Ravi Sen", planetas: ["Umbra", "Halcyon"], activa: true }
])

// Coleccion referenciada: personajes (saga_id -> sagas._id, referencia manual)
db.personajes.insertMany([
  { nombre: "Kael Rion", especie: "humano", rol: "protagonista", saga_id: "SAGA001", habilidades: ["pilotaje", "estrategia"], activo: true },
  { nombre: "Vex-9", especie: "androide", rol: "aliado", saga_id: "SAGA001", habilidades: ["hackeo"], activo: true },
  { nombre: "Nira Solis", especie: "andromedana", rol: "protagonista", saga_id: "SAGA002", habilidades: ["telepatia", "combate"], activo: true },
  { nombre: "Dr. Ezra Kahn", especie: "humano", rol: "antagonista", saga_id: "SAGA003", habilidades: ["ingenieria nuclear"], activo: false },
  { nombre: "Thal Orun", especie: "vestaliano", rol: "protagonista", saga_id: "SAGA004", habilidades: ["manipulacion cuantica"], activo: true },
  { nombre: "Yassa Bren", especie: "humano", rol: "aliado", saga_id: "SAGA005", habilidades: ["exploracion", "supervivencia"], activo: true }
])

// Indice para acelerar la resolucion de la referencia manual
db.personajes.createIndex({ saga_id: 1 })
