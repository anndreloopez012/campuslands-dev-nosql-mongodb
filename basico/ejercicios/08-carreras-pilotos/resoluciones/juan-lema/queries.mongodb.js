// Ranking de pilotos
use campus_carreras_pilotos

// Todos los pilotos
db.registros.find({});

// Top 3 pilotos por puntos (ranking principal)
db.registros.find({}, { nombre: 1, puntos: 1, _id: 0 }).sort({ puntos: -1 }).limit(3);

// Pilotos activos de categoria "F3" ordenados por puntos descendente
db.registros.find({ categoria: "F3", activo: true }).sort({ puntos: -1 });

// Los 2 pilotos con menos puntos (candidatos a descenso)
db.registros.find({}, { nombre: 1, puntos: 1, _id: 0 }).sort({ puntos: 1 }).limit(2);

// Suma puntos a "Valentina Cruz" tras nueva carrera
db.registros.updateOne(
  { nombre: "Valentina Cruz" },
  { $inc: { puntos: 40 } }
);

// Verifica el cambio
db.registros.find({ nombre: "Valentina Cruz" });

// Verifica existencia antes de eliminar
db.registros.find({ nombre: "Camila Ortiz" });

// Elimina al piloto inactivo con menor puntaje
db.registros.deleteOne({ nombre: "Camila Ortiz" });

// Verifica que ya no existe
db.registros.find({ nombre: "Camila Ortiz" });
