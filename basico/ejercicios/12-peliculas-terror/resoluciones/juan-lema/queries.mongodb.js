// Ejercicio 12 - Catalogo de peliculas de miedo (juan-lema)
use campus_peliculas_terror

// 1. Listado completo
db.registros.find({});

// 2. Peliculas disponibles, solo titulo y rating
db.registros.find(
  { disponible: true },
  { titulo: 1, rating: 1, _id: 0 }
);

// 3. Peliculas con rating >= 8, ordenadas desc
db.registros.find(
  { rating: { $gte: 8 } },
  { titulo: 1, rating: 1, _id: 0 }
).sort({ rating: -1 });

// 4. Filtro por texto: peliculas de posesion (via etiquetas)
db.registros.find(
  { etiquetas: { $regex: "posesion", $options: "i" } },
  { titulo: 1, etiquetas: 1, _id: 0 }
);

// 5. Actualizar: subir rating y agregar premio a "Cinta de Vigilancia 7"
db.registros.updateOne(
  { titulo: "Cinta de Vigilancia 7" },
  {
    $set: { rating: 6.5 },
    $push: { premios: { nombre: "Morbido Fest Mencion Especial", anio: 2019 } }
  }
);

// 5.1 Verificacion del update
db.registros.find(
  { titulo: "Cinta de Vigilancia 7" },
  { rating: 1, premios: 1, _id: 0 }
);

// 6. Actualizar: marcar "El Reflejo Vacio" como no disponible
db.registros.updateOne(
  { titulo: "El Reflejo Vacio" },
  { $set: { disponible: false } }
);

// 6.1 Verificacion del update
db.registros.find(
  { titulo: "El Reflejo Vacio" },
  { disponible: 1, _id: 0 }
);

// 7. Eliminar pelicula con rating mas bajo ("El Reflejo Vacio")
db.registros.deleteOne({ titulo: "El Reflejo Vacio" });

// 7.1 Verificacion de borrado (debe devolver 0 documentos)
db.registros.find({ titulo: "El Reflejo Vacio" });

// 8. Conteo final de documentos en la coleccion
db.registros.countDocuments({});
