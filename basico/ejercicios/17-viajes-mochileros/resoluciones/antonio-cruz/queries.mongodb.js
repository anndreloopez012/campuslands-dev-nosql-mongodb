// Base de datos del ejercicio
use("campus_viajes_mochileros");

// Mostrar todos los viajes registrados
db.viajes.find();

// Viajes con presupuesto menor o igual a Q2000
db.viajes.find(
  {
    presupuesto: { $lte: 2000 }
  },
  {
    _id: 0,
    destino: 1,
    presupuesto: 1
  }
);

// Viajes que ya están confirmados
db.viajes.find(
  {
    estado: "confirmado"
  },
  {
    _id: 0,
    destino: 1,
    fechaSalida: 1
  }
);

// Viajes de cuatro días o más
db.viajes.find(
  {
    duracionDias: { $gte: 4 }
  },
  {
    _id: 0,
    destino: 1,
    duracionDias: 1
  }
);

// Reporte ordenado por presupuesto de mayor a menor
db.viajes.find(
  {},
  {
    _id: 0,
    destino: 1,
    pais: 1,
    presupuesto: 1
  }
).sort({ presupuesto: -1 });

// El viaje a Panajachel aumentó de presupuesto
db.viajes.updateOne(
  {
    destino: "Panajachel"
  },
  {
    $set: {
      presupuesto: 1200
    }
  }
);

// Validar el cambio realizado
db.viajes.find(
  {
    destino: "Panajachel"
  },
  {
    _id: 0,
    destino: 1,
    presupuesto: 1
  }
);