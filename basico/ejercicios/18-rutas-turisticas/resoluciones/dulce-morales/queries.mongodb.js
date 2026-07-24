// Seleccionar la base de datos
use("campus_rutas_turisticas");

// Consulta 1: Rutas disponibles de categoria naturaleza con proyeccion limpia
db.rutas.find(
  { categoria: "naturaleza", disponible: true },
  { nombre: 1, duracion_dias: 1, precio: 1, ubicacion: 1, _id: 0 }
);

// Consulta 2: Buscar rutas que incluyan una etiqueta especifica en su array
db.rutas.find(
  { etiquetas: "historia" },
  { nombre: 1, categoria: 1, puntos_interes: 1, _id: 0 }
);

// Consulta 3:  Se agrega un nuevo punto de interes a una ruta existente y se ajusta su precio
db.rutas.updateOne(
  { nombre: "Ruta Colonial Historica" },
  { 
    $push: { puntos_interes: "Plaza de los Coches" },
    $set: { precio: 380000 }
  }
);

// Verificacion de la actualizacion
db.rutas.findOne(
  { nombre: "Ruta Colonial Historica" },
  { nombre: 1, precio: 1, puntos_interes: 1 }
);

// Consulta 4: Reporte de Conteo total de rutas activas
db.rutas.countDocuments({ disponible: true });