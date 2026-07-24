// 13. Sagas de ciencia ficcion
// Solucion - jeshua-perez (nivel basico)
// Enfoque: referencias manuales

use campus_sci_fi_sagas

db.sagas.drop()
db.peliculas.drop()

db.createCollection("sagas")
db.createCollection("peliculas")

// Coleccion padre: sagas
db.sagas.insertMany([
  { _id: "saga-horizonte", nombre: "Horizonte Estelar", creador: "Renata Uribe" },
  { _id: "saga-nexo", nombre: "Nexo Cuantico", creador: "Ivan Paredes" },
  { _id: "saga-eco", nombre: "Ecos del Vacio", creador: "Renata Uribe" }
])

// Coleccion hija: peliculas, referencian a su saga por sagaId (referencia manual, no embebida)
db.peliculas.insertMany([
  { titulo: "Horizonte Estelar: Origen", anio: 2015, sagaId: "saga-horizonte", orden: 1 },
  { titulo: "Horizonte Estelar: Fractura", anio: 2018, sagaId: "saga-horizonte", orden: 2 },
  { titulo: "Horizonte Estelar: Retorno", anio: 2022, sagaId: "saga-horizonte", orden: 3 },
  { titulo: "Nexo Cuantico", anio: 2020, sagaId: "saga-nexo", orden: 1 },
  { titulo: "Nexo Cuantico: Colapso", anio: 2023, sagaId: "saga-nexo", orden: 2 },
  { titulo: "Ecos del Vacio", anio: 2019, sagaId: "saga-eco", orden: 1 }
])
