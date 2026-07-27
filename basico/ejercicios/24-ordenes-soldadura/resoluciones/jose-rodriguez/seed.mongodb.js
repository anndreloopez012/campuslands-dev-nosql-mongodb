// Base de Datos de Control de Soldadura - Script de Poblado (Seed)
use('soldadura_db');

// Limpieza de colecciones previas
db.proyectos.drop();
db.inspectores.drop();
db.juntas_soldadas.drop();

// 1. Inserción de Proyectos Estructurales (Colección: proyectos)
db.proyectos.insertMany([
  {
    _id: "PRJ-W01",
    nombreProyecto: "Puente Vehicular Chixoy",
    normaAplicable: "AWS D1.1",
    ubicacion: "Alta Verapaz",
    estadoProyecto: "EN_EJECUCION"
  },
  {
    _id: "PRJ-W02",
    nombreProyecto: "Tanque de Presión T-102",
    normaAplicable: "ASME VIII Div 1",
    ubicacion: "Escuintla",
    estadoProyecto: "EN_EJECUCION"
  }
]);

// 2. Inserción de Inspectores de Soldadura (Colección: inspectores)
db.inspectores.insertMany([
  {
    _id: "INS-001",
    nombre: "Ing. Roberto Alarcón",
    certificacion: "CWI AWS #1809021",
    nivelNDT: "Nivel II (VT, UT, RT)",
    activo: true
  },
  {
    _id: "INS-002",
    nombre: "Téc. Lucía Méndez",
    certificacion: "ASNT Nivel II",
    nivelNDT: "Nivel II (PT, MT)",
    activo: true
  }
]);

// 3. Inserción de Juntas Soldadas con Estado de Inspección (Colección: juntas_soldadas)
// Modelado: Campo 'estadoInspeccion' para flujo de calidad,
// Subdocumentos 'especificacionesTecnicas' y 'detallesInspeccion', Array 'defectosEncontrados'.
db.juntas_soldadas.insertMany([
  {
    _id: "JNT-101",
    proyectoId: "PRJ-W01",
    inspectorId: "INS-001",
    codigoSoldador: "WLD-04",
    identificadorJunta: "COL-A1-J01",
    procesoSoldadura: "FCAW",
    estadoInspeccion: "APROBADO", // PENDIENTE_INSPECCION, APROBADO, RECHAZADO, REPARACION_REQUERIDA
    especificacionesTecnicas: {
      espesorMM: 25.4,
      tipoMaterial: "Acero ASTM A572 Grado 50",
      posicion: "3G (Vertical)"
    },
    detallesInspeccion: {
      tipoEnsayo: "UT (Ultrasonido)",
      fechaInspeccion: ISODate("2026-06-12T09:30:00Z"),
      criterioAceptacion: "AWS D1.1 Cláusula 6",
      aprobadoEnPrimeraInstancia: true
    },
    defectosEncontrados: [],
    normasCumplidas: ["AWS D1.1", "ISO 5817 Clás B"]
  },
  {
    _id: "JNT-102",
    proyectoId: "PRJ-W01",
    inspectorId: "INS-001",
    codigoSoldador: "WLD-08",
    identificadorJunta: "VIGA-B2-J04",
    procesoSoldadura: "SMAW",
    estadoInspeccion: "RECHAZADO",
    especificacionesTecnicas: {
      espesorMM: 19.0,
      tipoMaterial: "Acero ASTM A36",
      posicion: "4G (Sobre Cabeza)"
    },
    detallesInspeccion: {
      tipoEnsayo: "VT (Inspección Visual)",
      fechaInspeccion: ISODate("2026-06-15T14:00:00Z"),
      criterioAceptacion: "AWS D1.1 Cláusula 6",
      aprobadoEnPrimeraInstancia: false
    },
    defectosEncontrados: ["Falta de penetración", "Socavado continuo"],
    normasCumplidas: []
  },
  {
    _id: "JNT-103",
    proyectoId: "PRJ-W02",
    inspectorId: "INS-002",
    codigoSoldador: "WLD-04",
    identificadorJunta: "TNK-CIRC-01",
    procesoSoldadura: "GTAW / SMAW",
    estadoInspeccion: "PENDIENTE_INSPECCION",
    especificacionesTecnicas: {
      espesorMM: 12.7,
      tipoMaterial: "Acero Inoxidable 316L",
      posicion: "5G (Tubería Fija)"
    },
    detallesInspeccion: {
      tipoEnsayo: "RT (Radiografía Industrial)",
      fechaInspeccion: null,
      criterioAceptacion: "ASME UW-51",
      aprobadoEnPrimeraInstancia: false
    },
    defectosEncontrados: [],
    normasCumplidas: ["ASME VIII"]
  },
  {
    _id: "JNT-104",
    proyectoId: "PRJ-W01",
    inspectorId: "INS-001",
    codigoSoldador: "WLD-08",
    identificadorJunta: "VIGA-B2-J04-R1",
    procesoSoldadura: "FCAW",
    estadoInspeccion: "REPARACION_REQUERIDA",
    especificacionesTecnicas: {
      espesorMM: 19.0,
      tipoMaterial: "Acero ASTM A36",
      posicion: "1G (Plana)"
    },
    detallesInspeccion: {
      tipoEnsayo: "PT (Líquidos Penetrantes)",
      fechaInspeccion: ISODate("2026-06-18T10:15:00Z"),
      criterioAceptacion: "AWS D1.1",
      aprobadoEnPrimeraInstancia: false
    },
    defectosEncontrados: ["Porosidad agrupada"],
    normasCumplidas: []
  }
]);
