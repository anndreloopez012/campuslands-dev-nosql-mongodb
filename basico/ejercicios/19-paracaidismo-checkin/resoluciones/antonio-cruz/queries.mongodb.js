// Base de datos del ejercicio
use("campus_paracaidismo_checkin");

// Mostrar todos los registros
db.checkins.find();

// Personas autorizadas para saltar
db.checkins.find(
  { autorizado: true },
  {
    _id: 0,
    participante: 1,
    instructor: 1
  }
);

// Participantes con examen médico pendiente
db.checkins.find(
  { examenMedico: false },
  {
    _id: 0,
    participante: 1
  }
);

// Personas con documentación incompleta
db.checkins.find(
  { documentosCompletos: false },
  {
    _id: 0,
    participante: 1
  }
);

// Reporte ordenado por edad
db.checkins.find(
  {},
  {
    _id: 0,
    participante: 1,
    edad: 1,
    autorizado: 1
  }
).sort({ edad: -1 });

// El participante completó el examen médico y queda autorizado
db.checkins.updateOne(
  { participante: "Andrea López" },
  {
    $set: {
      examenMedico: true,
      autorizado: true
    }
  }
);

// Confirmar que el cambio quedó aplicado
db.checkins.find(
  { participante: "Andrea López" },
  {
    _id: 0,
    participante: 1,
    examenMedico: 1,
    autorizado: 1
  }
);