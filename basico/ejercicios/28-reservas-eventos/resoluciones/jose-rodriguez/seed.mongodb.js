// Base de Datos de Gestión Deportiva - Script de Poblado (Seed)
use('deportes_liga_db');

// Limpieza de colecciones previas
db.torneos.drop();
db.atletas.drop();

// 1. Inserción del Catálogo de Torneos (Colección: torneos)
db.torneos.insertMany([
  {
    _id: "TOR-2026-01",
    nombreTorneo: "Copa Nacional de Fútbol 2026",
    disciplina: "Fútbol",
    categoria: "Mayores",
    estadoTorneo: "EN_CURSO"
  },
  {
    _id: "TOR-2026-02",
    nombreTorneo: "Torneo Interclubes de Baloncesto",
    disciplina: "Baloncesto",
    categoria: "Sub-23",
    estadoTorneo: "EN_CURSO"
  }
]);

// 2. Inserción de Atletas con Subdocumento de Auditoría/Soft Delete (Colección: atletas)
// Modelado: Subdocumentos 'rendimiento' y 'registroControl', Array 'equiposAnteriores'
// y Referencia Manual 'torneoId'.
db.atletas.insertMany([
  {
    _id: "ATL-101",
    nombreCompleto: "Mateo Silva",
    disciplina: "Fútbol",
    posicion: "Delantero",
    torneoId: "TOR-2026-01",
    rendimiento: {
      partidosJugados: 12,
      puntosOGoles: 15,
      sancionesDisciplinarias: 2,
      calificacionPromedio: 8.7
    },
    equiposAnteriores: ["Club Deportivo Oriente", "Atlético San José"],
    registroControl: {
      activo: true,
      eliminado: false,
      fechaRegistro: ISODate("2026-01-10T00:00:00Z"),
      fechaEliminacion: null,
      motivoBaja: null,
      usuarioAuditoria: "admin_registro"
    }
  },
  {
    _id: "ATL-102",
    nombreCompleto: "Sofía Morales",
    disciplina: "Baloncesto",
    posicion: "Base",
    torneoId: "TOR-2026-02",
    rendimiento: {
      partidosJugados: 10,
      puntosOGoles: 180,
      sancionesDisciplinarias: 0,
      calificacionPromedio: 9.1
    },
    equiposAnteriores: ["Eagles Basket"],
    registroControl: {
      activo: true,
      eliminado: false,
      fechaRegistro: ISODate("2026-01-15T00:00:00Z"),
      fechaEliminacion: null,
      motivoBaja: null,
      usuarioAuditoria: "admin_registro"
    }
  },
  {
    _id: "ATL-103",
    nombreCompleto: "Lucas Hernández",
    disciplina: "Fútbol",
    posicion: "Defensa",
    torneoId: "TOR-2026-01",
    rendimiento: {
      partidosJugados: 5,
      puntosOGoles: 1,
      sancionesDisciplinarias: 4,
      calificacionPromedio: 6.2
    },
    equiposAnteriores: ["Depor Xela"],
    registroControl: {
      activo: false,
      eliminado: true,
      fechaRegistro: ISODate("2026-01-20T00:00:00Z"),
      fechaEliminacion: ISODate("2026-05-10T14:00:00Z"),
      motivoBaja: "Retiro por Lesión Grava",
      usuarioAuditoria: "medico_liga"
    }
  },
  {
    _id: "ATL-104",
    nombreCompleto: "Daniela Vargas",
    disciplina: "Fútbol",
    posicion: "Centrocampista",
    torneoId: "TOR-2026-01",
    rendimiento: {
      partidosJugados: 14,
      puntosOGoles: 8,
      sancionesDisciplinarias: 1,
      calificacionPromedio: 8.4
    },
    equiposAnteriores: ["Rayo Femenino"],
    registroControl: {
      activo: true,
      eliminado: false,
      fechaRegistro: ISODate("2026-02-01T00:00:00Z"),
      fechaEliminacion: null,
      motivoBaja: null,
      usuarioAuditoria: "admin_registro"
    }
  },
  {
    _id: "ATL-105",
    nombreCompleto: "Gabriel Castillo",
    disciplina: "Baloncesto",
    posicion: "Alero",
    torneoId: "TOR-2026-02",
    rendimiento: {
      partidosJugados: 2,
      puntosOGoles: 12,
      sancionesDisciplinarias: 1,
      calificacionPromedio: 5.5
    },
    equiposAnteriores: [],
    registroControl: {
      activo: false,
      eliminado: true,
      fechaRegistro: ISODate("2026-02-15T00:00:00Z"),
      fechaEliminacion: ISODate("2026-04-12T09:30:00Z"),
      motivoBaja: "Sanción Disciplinaria por Dopaje",
      usuarioAuditoria: "comite_disciplina"
    }
  }
]);
