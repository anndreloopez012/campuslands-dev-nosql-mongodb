use("campus_tattoo_agenda");

// Consulta 1: Filtrar citas que se encuentren en estado pendiente o confirmada
db.citas.find(
  { estado: { $in: ["pendiente", "confirmada"] } },
  { codigo_cita: 1, "cliente.nombre_completo": 1, estado: 1, fecha_cita: 1, _id: 0 }
);

// Consulta 2: Buscar citas por etiqueta o estilo de tatuaje específico
db.citas.find(
  { etiquetas: "realismo" },
  { codigo_cita: 1, "tatuaje.estilo": 1, "tatuaje.descripcion": 1, "presupuesto.valor_total": 1, _id: 0 }
);

// Consulta 3: Cambiar estado a completada y modificar el abono o valor
db.citas.updateOne(
  { codigo_cita: "CIT-001" },
  { 
    $set: { estado: "completada" },
    $inc: { "presupuesto.deposito_abonado": 300000 } 
  }
);

// Verificación posterior del registro actualizado
db.citas.find({ codigo_cita: "CIT-001" }, { codigo_cita: 1, estado: 1, presupuesto: 1, _id: 0 });

// Consulta 4: Reporte de conteo total de citas según su estado actual
db.citas.countDocuments({ estado: "completada" });