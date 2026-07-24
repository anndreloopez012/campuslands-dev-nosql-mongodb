// Conexión y selección de la base de datos
use("campus_ordenes_soldadura");

// Inserción de documentos iniciales (al menos 5 documentos coherentes)
db.ordenes.insertMany([
  {
    codigo_orden: "ORD-001",
    cliente: "Metalmecánica Industrial S.A.",
    proceso_soldadura: "SMAW",
    material: "Acero al Carbón",
    espesor_mm: 12.5,
    soldador: {
      nombre: "Carlos Pérez",
      certificacion: "AWS D1.1",
      nivel: "Senior"
    },
    estado_inspeccion: "pendiente",
    puntaje_calidad: 0,
    etiquetas: ["estructural", "alta_presion", "urgente"],
    activo: true,
    fecha_creacion: new Date("2026-06-01")
  },
  {
    codigo_orden: "ORD-002",
    cliente: "Construcciones Navales del Caribe",
    proceso_soldadura: "GMAW",
    material: "Acero Inoxidable",
    espesor_mm: 8.0,
    soldador: {
      nombre: "María Gómez",
      certificacion: "ASME Sec IX",
      nivel: "Expert"
    },
    estado_inspeccion: "aprobado",
    puntaje_calidad: 95,
    etiquetas: ["naval", "inoxidable", "radiografia_ok"],
    activo: true,
    fecha_creacion: new Date("2026-06-03")
  },
  {
    codigo_orden: "ORD-003",
    cliente: "Estructuras Metálicas del Norte",
    proceso_soldadura: "GTAW",
    material: "Aluminio",
    espesor_mm: 4.5,
    soldador: {
      nombre: "Esteban Torres",
      certificacion: "AWS D1.2",
      nivel: "Intermedio"
    },
    estado_inspeccion: "en_proceso",
    puntaje_calidad: 0,
    etiquetas: ["aluminio", "fino"],
    activo: true,
    fecha_creacion: new Date("2026-06-05")
  },
  {
    codigo_orden: "ORD-004",
    cliente: "Calderas y Tanques S.A.S.",
    proceso_soldadura: "FCAW",
    material: "Acero de Alta Resistencia",
    espesor_mm: 20.0,
    soldador: {
      nombre: "Carlos Pérez",
      certificacion: "AWS D1.1",
      nivel: "Senior"
    },
    estado_inspeccion: "aprobado",
    puntaje_calidad: 90,
    etiquetas: ["tanques", "alta_resistencia"],
    activo: true,
    fecha_creacion: new Date("2026-06-08")
  },
  {
    codigo_orden: "ORD-005",
    client: "Taller Metalúrgico Central",
    proceso_soldadura: "SMAW",
    material: "Hierro Fundido",
    espesor_mm: 10.0,
    soldador: {
      nombre: "Andrés Ruiz",
      certificacion: "AWS D1.1",
      nivel: "Junior"
    },
    estado_inspeccion: "rechazado",
    puntaje_calidad: 60,
    etiquetas: ["reparacion", "fallido"],
    activo: false,
    fecha_creacion: new Date("2026-06-10")
  }
]);