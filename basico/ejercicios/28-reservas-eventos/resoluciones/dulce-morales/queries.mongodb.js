// Seleccionar la base de datos
use("campus_reservas_eventos");

// Consulta 1: Filtrar reservas confirmadas con proyección limpia 
db.reservas.find(
  { estado: "confirmada" },
  { codigo_reserva: 1, "usuario.nombre": 1, "deporte.disciplina": 1, costo_total: 1, _id: 0 }
);

// Consulta 2: Búsqueda por coincidencia en array de etiquetas (etiqueta "torneo")
db.reservas.find(
  { etiquetas: "torneo" },
  { codigo_reserva: 1, "deporte.cancha": 1, etiquetas: 1, _id: 0 }
);

// Consulta 3: Actualización del estado de una reserva de pendiente a confirmada
db.reservas.updateOne(
  { codigo_reserva: "RES-002" },
  { $set: { estado: "confirmada" } }
);

// Consulta 4: Eliminación controlada de una reserva cancelada
db.reservas.deleteOne(
  { codigo_reserva: "RES-004" }
);

// Consulta 5: Reporte de conteo total de reservas activas o confirmadas
db.reservas.countDocuments({ estado: "confirmada" });