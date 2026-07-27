// Base de Datos de Paracaidismo - Script de Poblado (Seed)
use('paracaidismo_db');

// Limpieza de colecciones previas
db.paracaidistas.drop();
db.equipos.drop();
db.saltos.drop();

// 1. Inserción de Paracaidistas (Colección: paracaidistas)
db.paracaidistas.insertMany([
  {
    _id: "PAR-001",
    nombre: "Alejandro",
    apellido: "Navarro",
    nivelLicencia: "D", // A, B, C, D (D = Máximo nivel)
    totalSaltos: 850,
    certificadoMedico: {
      vigente: true,
      fechaVencimiento: ISODate("2027-01-15T00:00:00Z"),
      medicoEmisor: "Dr. Roberto Silva"
    },
    tipoParacaidista: "INSTRUCTOR"
  },
  {
    _id: "PAR-002",
    nombre: "Mariana",
    apellido: "Gómez",
    nivelLicencia: "A",
    totalSaltos: 28,
    certificadoMedico: {
      vigente: true,
      fechaVencimiento: ISODate("2026-11-30T00:00:00Z"),
      medicoEmisor: "Dra. Elena Torres"
    },
    tipoParacaidista: "DEPORTIVO"
  },
  {
    _id: "PAR-003",
    nombre: "Carlos",
    apellido: "Mendoza",
    nivelLicencia: "NINGUNA",
    totalSaltos: 0,
    certificadoMedico: {
      vigente: true,
      fechaVencimiento: ISODate("2026-08-20T00:00:00Z"),
      medicoEmisor: "Dr. Roberto Silva"
    },
    tipoParacaidista: "TANDEM_PASAJERO"
  }
]);

// 2. Inserción de Equipos de Paracaidismo (Colección: equipos)
db.equipos.insertMany([
  {
    _id: "EQP-001",
    modeloArnes: "Vector 330",
    tallaCanopiaPrincipalPies2: 170,
    estadoInspeccion: "APROBADO",
    ultimaInspeccionReserva: ISODate("2026-05-10T00:00:00Z"),
    saltosAcumulados: 120,
    dispositivoAperturaAutomatica: {
      marca: "CYPRES 2",
      activo: true
    }
  },
  {
    _id: "EQP-002",
    modeloArnes: "Sigma Tandem",
    tallaCanopiaPrincipalPies2: 360,
    estadoInspeccion: "APROBADO",
    ultimaInspeccionReserva: ISODate("2026-06-01T00:00:00Z"),
    saltosAcumulados: 45,
    dispositivoAperturaAutomatica: {
      marca: "Vigil Cuatro",
      activo: true
    }
  },
  {
    _id: "EQP-003",
    modeloArnes: "Javelin Odyssey",
    tallaCanopiaPrincipalPies2: 135,
    estadoInspeccion: "REVISION_PENDIENTE",
    ultimaInspeccionReserva: ISODate("2025-10-12T00:00:00Z"),
    saltosAcumulados: 310,
    dispositivoAperturaAutomatica: {
      marca: "CYPRES 2",
      activo: false
    }
  }
]);

// 3. Inserción de Saltos con Validaciones Manuales (Colección: saltos)
// Modelado: Subdocumento 'validacionesManuales' para la lista de chequeo antes del vuelo
db.saltos.insertMany([
  {
    _id: "SLT-001",
    paracaidistaId: "PAR-001",
    equipoId: "EQP-001",
    tipoSalto: "SOLO_TRABAJO_RELATIVO",
    altitudPies: 13000,
    estadoVuelo: "AUTORIZADO",
    validacionesManuales: {
      certificadoMedicoVerificado: true,
      inspeccionEquipoAprobada: true,
      exencionResponsabilidadFirmada: true,
      condicionesClimaValidadas: true,
      revisadoPorOficialSeguridad: "Inspector Juan Pérez"
    },
    equipamientoAdicional: ["Altímetro Digital", "Cámara de Casco", "Audible"]
  },
  {
    _id: "SLT-002",
    paracaidistaId: "PAR-002",
    equipoId: "EQP-001",
    tipoSalto: "SOLO_AUTONOMO",
    altitudPies: 10000,
    estadoVuelo: "PENDIENTE_REVISION",
    validacionesManuales: {
      certificadoMedicoVerificado: true,
      inspeccionEquipoAprobada: true,
      exencionResponsabilidadFirmada: false, // Faltante crítico
      condicionesClimaValidadas: true,
      revisadoPorOficialSeguridad: "Inspector Juan Pérez"
    },
    equipamientoAdicional: ["Altímetro Análogo"]
  },
  {
    _id: "SLT-003",
    paracaidistaId: "PAR-003",
    equipoId: "EQP-002",
    tipoSalto: "TANDEM",
    altitudPies: 14000,
    estadoVuelo: "CANCELADO",
    validacionesManuales: {
      certificadoMedicoVerificado: true,
      inspeccionEquipoAprobada: false, // Equipo no apto
      exencionResponsabilidadFirmada: true,
      condicionesClimaValidadas: false, // Viento fuera de límite
      revisadoPorOficialSeguridad: "Inspectora Maria Cruz"
    },
    equipamientoAdicional: ["Gafas Tandem"]
  }
]);
