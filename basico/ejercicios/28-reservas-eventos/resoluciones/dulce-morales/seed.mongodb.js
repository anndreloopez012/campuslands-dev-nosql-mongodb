// Conectarse a la base de datos para reservas de eventos
use("campus_reservas_eventos");

// Insertar documentos iniciales con datos realistas
db.reservas.insertMany([
  {
    codigo_reserva: "RES-001",
    usuario: {
      nombre: "Carlos Mendoza",
      correo: "carlos.mendoza@campus.edu",
      rol: "Estudiante"
    },
    deporte: {
      disciplina: "Fútbol 5",
      cancha: "Cancha Sintética Principal",
      duracion_horas: 2
    },
    fecha_reserva: ISODate("2026-06-10T14:00:00Z"),
    costo_total: 120000,
    estado: "confirmada",
    etiquetas: ["torneo", "nocturno", "futbol"]
  },
  {
    codigo_reserva: "RES-002",
    usuario: {
      nombre: "Ana Gómez",
      correo: "ana.gomez@campus.edu",
      rol: "Docente"
    },
    deporte: {
      disciplina: "Baloncesto",
      cancha: "Coliseo Cubierto A",
      duracion_horas: 1
    },
    fecha_reserva: ISODate("2026-06-11T16:00:00Z"),
    costo_total: 60000,
    estado: "pendiente",
    etiquetas: ["amistoso", "baloncesto"]
  },
  {
    codigo_reserva: "RES-003",
    usuario: {
      nombre: "Mateo Rojas",
      correo: "mateo.rojas@campus.edu",
      rol: "Estudiante"
    },
    deporte: {
      disciplina: "Tenis de Campo",
      cancha: "Blanco de Tenis 2",
      duracion_horas: 2
    },
    fecha_reserva: ISODate("2026-06-12T10:00:00Z"),
    costo_total: 80000,
    estado: "confirmada",
    etiquetas: ["individual", "tenis"]
  },
  {
    codigo_reserva: "RES-004",
    usuario: {
      nombre: "Laura Torres",
      correo: "laura.torres@campus.edu",
      rol: "Egresado"
    },
    deporte: {
      disciplina: "Voleibol",
      cancha: "Cancha Externa B",
      duracion_horas: 1
    },
    fecha_reserva: ISODate("2026-06-13T18:00:00Z"),
    costo_total: 50000,
    estado: "cancelada",
    etiquetas: ["voleibol", "aire_libre"]
  },
  {
    codigo_reserva: "RES-005",
    usuario: {
      nombre: "Andrés Parra",
      correo: "andres.parra@campus.edu",
      rol: "Estudiante"
    },
    deporte: {
      disciplina: "Fútbol 5",
      cancha: "Cancha Sintética Norte",
      duracion_horas: 2
    },
    fecha_reserva: ISODate("2026-06-14T20:00:00Z"),
    costo_total: 120000,
    estado: "confirmada",
    etiquetas: ["torneo", "nocturno", "futbol"]
  }
]);
