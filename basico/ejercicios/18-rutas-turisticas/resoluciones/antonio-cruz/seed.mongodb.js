// Base de datos del ejercicio
use("campus_rutas_turisticas");

// Limpio la colección para mantener el script repetible
db.rutas.drop();

// La ubicación se guarda embebida porque pertenece únicamente a cada ruta.
// Para este escenario basta con almacenar latitud y longitud sin usar GeoJSON.

db.rutas.insertMany([
  {
    nombre: "Ruta Colonial",
    departamento: "Sacatepéquez",
    puntoInicio: "Antigua Guatemala",
    dificultad: "Baja",
    distanciaKm: 8,
    duracionHoras: 3,
    ubicacion: {
      latitud: 14.5597,
      longitud: -90.7343
    },
    activa: true
  },
  {
    nombre: "Sendero Atitlán",
    departamento: "Sololá",
    puntoInicio: "Panajachel",
    dificultad: "Media",
    distanciaKm: 15,
    duracionHoras: 5,
    ubicacion: {
      latitud: 14.7406,
      longitud: -91.1588
    },
    activa: true
  },
  {
    nombre: "Ruta del Quetzal",
    departamento: "Alta Verapaz",
    puntoInicio: "Cobán",
    dificultad: "Alta",
    distanciaKm: 20,
    duracionHoras: 7,
    ubicacion: {
      latitud: 15.4699,
      longitud: -90.3795
    },
    activa: true
  },
  {
    nombre: "Miradores de Xela",
    departamento: "Quetzaltenango",
    puntoInicio: "Quetzaltenango",
    dificultad: "Media",
    distanciaKm: 10,
    duracionHoras: 4,
    ubicacion: {
      latitud: 14.8347,
      longitud: -91.5186
    },
    activa: false
  },
  {
    nombre: "Volcán Pacaya",
    departamento: "Escuintla",
    puntoInicio: "San Vicente Pacaya",
    dificultad: "Alta",
    distanciaKm: 12,
    duracionHoras: 6,
    ubicacion: {
      latitud: 14.381,
      longitud: -90.6016
    },
    activa: true
  }
]);