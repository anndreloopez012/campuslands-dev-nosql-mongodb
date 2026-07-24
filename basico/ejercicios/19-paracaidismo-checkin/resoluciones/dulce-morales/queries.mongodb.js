use("campus_paracaidismo_checkin");

// Consulta 1: Filtrar check-ins completados con proyeccion limpia
db.checkins.find(
  { estado_checkin: "completado" },
  { paracaidista: 1, tipo_salto: 1, "detalles_salto.altura_pies": 1, _id: 0 }
);

// Consulta 2: Buscar paracaidistas que tengan el requisito "briefing_ok" cumplido en el array
db.checkins.find(
  { requisitos_cumplidos: "briefing_ok" },
  { paracaidista: 1, estado_checkin: 1, _id: 0 }
);

// Consulta 3: Agrega actualiza un nuevo campo
db.checkins.updateOne(
  { paracaidista: "Sofia Vergara" },
  { 
    $set: { estado_checkin: "completado" }, 
    $push: { requisitos_cumplidos: "briefing_ok" } 
  }
);

// Consulta 4: Conteo de registros activos
db.checkins.countDocuments({ activo: true });