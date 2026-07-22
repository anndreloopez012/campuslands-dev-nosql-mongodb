use('campus_sci_fi_sagas');

// CONSULTA 1: Listar sagas activas con puntuación promedio mayor o igual a 8.8
db.sagas.find(
  { activa: true, puntuacion_promedio: { $gte: 8.8 } },
  { nombre: 1, creador: 1, puntuacion_promedio: 1, _id: 0 }
);

// CONSULTA 2: Obtener personajes asociados a la saga 'Dune'
const duneSaga = db.sagas.findOne({ nombre: "Dune" });
db.personajes.find(
  { saga_id: duneSaga._id },
  { nombre: 1, rol: 1, habilidades: 1, _id: 0 }
);

// CONSULTA 3: Agregar una nueva entrega a la saga 'Dune' e incrementar puntuación
db.sagas.updateOne(
  { nombre: "Dune" },
  {
    $push: {
      entregas: { titulo: "Dune: Messiah", anio: 2026, tipo: "Película" }
    },
    $set: { puntuacion_promedio: 9.5 }
  }
);

// CONSULTA 4:Contar cuántos personajes están registrados en total
db.personajes.countDocuments();