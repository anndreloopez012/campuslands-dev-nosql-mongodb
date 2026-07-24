// Base de datos del ejercicio
use("campus_reservas_eventos");

// Mostrar todas las reservas
db.reservas.find();

// Reservas confirmadas
db.reservas.find(
  { estado: "confirmada" },
  {
    _id: 0,
    evento: 1,
    participante: 1
  }
);

// Buscar reservas de un deporte específico
db.reservas.find(
  { deporte: "Futbol" },
  {
    _id: 0,
    evento: 1,
    estado: 1
  }
);

// Reporte ordenado por fecha del evento
db.reservas.find(
  {},
  {
    _id: 0,
    evento: 1,
    fechaEvento: 1,
    estado: 1
  }
).sort({ fechaEvento: 1 });


// DELETE controlado:
// Se elimina únicamente una reserva cancelada.
// En un sistema real conviene validar antes de borrar información.
db.reservas.deleteOne(
  {
    participante: "María García",
    estado: "cancelada"
  }
);

// Verificar que la eliminación fue realizada
db.reservas.find();