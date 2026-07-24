// Rutas turisticas - juan-lema
// Consultas CRUD sobre campus_rutas_turisticas.rutas

use("campus_rutas_turisticas");

// 1) Find general: todas las rutas, solo nombre y ciudad
db.rutas.find({}, { _id: 0, nombre: 1, ciudad: 1 });

// 2) Find filtrado: rutas activas con calificacion >= 4.5, ordenadas por calificacion desc
db.rutas
  .find(
    { activa: true, calificacion: { $gte: 4.5 } },
    { _id: 0, nombre: 1, categoria: 1, calificacion: 1 }
  )
  .sort({ calificacion: -1 });

// 3) UpdateOne: aplica descuento y agrega etiqueta "promo" a una ruta puntual
db.rutas.updateOne(
  { nombre: "Ascenso al Volcan Pacaya" },
  { $set: { precioUSD: 32 }, $addToSet: { etiquetas: "promo" } }
);

// Verificacion del update
db.rutas.findOne(
  { nombre: "Ascenso al Volcan Pacaya" },
  { _id: 0, nombre: 1, precioUSD: 1, etiquetas: 1 }
);

// 4) DeleteOne: elimina la ruta inactiva de mercado local
db.rutas.deleteOne({ nombre: "Sabores de Mercado Local" });

// Verificacion del delete: no debe encontrar el documento
db.rutas.findOne({ nombre: "Sabores de Mercado Local" });

// Verificacion final: total de rutas restantes
db.rutas.countDocuments();
