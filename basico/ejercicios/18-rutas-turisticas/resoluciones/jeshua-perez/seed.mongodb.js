// 18. Rutas turisticas
// Solucion - jeshua-perez (nivel basico)
// Enfoque: documentos geograficos simples

use campus_rutas_turisticas

db.rutas.drop()

db.createCollection("rutas")

// ubicacion se guarda en formato GeoJSON Point (longitud, latitud)
db.rutas.insertMany([
  { nombre: "Sendero Cerro de Monserrate", ciudad: "Bogota", ubicacion: { type: "Point", coordinates: [-74.0563, 4.6058] }, dificultad: "Media", distanciaKm: 3.5 },
  { nombre: "Ruta Cocora", ciudad: "Salento", ubicacion: { type: "Point", coordinates: [-75.4880, 4.6390] }, dificultad: "Alta", distanciaKm: 11 },
  { nombre: "Camino a la Piedra del Penol", ciudad: "Guatape", ubicacion: { type: "Point", coordinates: [-75.1680, 6.2320] }, dificultad: "Baja", distanciaKm: 1.2 },
  { nombre: "Sendero Playa Cristal", ciudad: "Santa Marta", ubicacion: { type: "Point", coordinates: [-74.0700, 11.3300] }, dificultad: "Media", distanciaKm: 5 },
  { nombre: "Ruta Cascada La Chorrera", ciudad: "Choachi", ubicacion: { type: "Point", coordinates: [-73.9200, 4.5300] }, dificultad: "Alta", distanciaKm: 8.4 },
  { nombre: "Camino del Centro Historico", ciudad: "Villa de Leyva", ubicacion: { type: "Point", coordinates: [-73.5250, 5.6330] }, dificultad: "Baja", distanciaKm: 2 }
])
