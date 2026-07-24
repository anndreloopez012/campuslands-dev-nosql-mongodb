// Órdenes de soldadura
// Solución de Denise López - Ejercicio 24

use campus_ordenes_soldadura

// Crear la colección principal en minúsculas y plural
db.createCollection("ordenes")

// Insertar 5 órdenes de soldadura con enfoque en estados de inspección, nombres poco comunes y temáticas populares
db.ordenes.insertMany([
  {
    codigo_orden: "ORD-WELD-001",
    soldador: "Orestes Vane",
    inspector_qc: "Zephyrine Valdivia",
    ubicacion_taller: "Cráter Azul",
    pais: "Guatemala",
    estructura_proyecto: "Chasis Caminante AT-AT",
    referencia_popular: "Star Wars - Imperio Galáctico",
    tipo_proceso: "TIG (GTAW)",
    material_base: "Acero de Alta Resistencia",
    estado_inspeccion: "aprobado",
    inspeccion_tecnica: {
      ensayo_no_destructivo: "Ultrasonido (UT)",
      porosidad_detectada: false,
      grietas_superficiales: false,
      norma_aplicada: "AWS D1.1"
    },
    horas_trabajo: 12.5,
    fecha_inspeccion: ISODate("2026-05-20T00:00:00Z")
  },
  {
    codigo_orden: "ORD-WELD-002",
    soldador: "Cyrene Sterling",
    inspector_qc: "Hesperio Valdivia",
    ubicacion_taller: "Laguna Lachúa",
    pais: "Guatemala",
    estructura_proyecto: "Módulo Reactor Hulkbuster",
    referencia_popular: "Marvel - Avengers",
    tipo_proceso: "MIG/MAG (GMAW)",
    material_base: "Titanio - Aleación Aeronáutica",
    estado_inspeccion: "pendiente_ultrasonido",
    inspeccion_tecnica: {
      ensayo_no_destructivo: "Líquidos Penetrantes (PT)",
      porosidad_detectada: false,
      grietas_superficiales: false,
      norma_aplicada: "ASME VIII"
    },
    horas_trabajo: 18.0,
    fecha_inspeccion: ISODate("2026-06-04T00:00:00Z")
  },
  {
    codigo_orden: "ORD-WELD-003",
    soldador: "Balthazar Nightshade",
    inspector_qc: "Amador Vane",
    ubicacion_taller: "Quiriguá",
    pais: "Guatemala",
    estructura_proyecto: "Compuerta de Casco Razor Crest",
    referencia_popular: "The Mandalorian",
    tipo_proceso: "Electrodo Revestido (SMAW)",
    material_base: "Beskar / Acero Inoxidable 316L",
    estado_inspeccion: "rechazado",
    inspeccion_tecnica: {
      ensayo_no_destructivo: "Radiografía Industrial (RT)",
      porosidad_detectada: true,
      grietas_superficiales: true,
      norma_aplicada: "AWS D1.1"
    },
    horas_trabajo: 9.0,
    fecha_inspeccion: ISODate("2026-06-25T00:00:00Z")
  },
  {
    codigo_orden: "ORD-WELD-004",
    soldador: "Melantho Frost",
    inspector_qc: "Tiberio Escandón",
    ubicacion_taller: "Cataratas del Todra",
    pais: "Marruecos",
    estructura_proyecto: "Anillo Superestructural Estrella de la Muerte",
    referencia_popular: "Star Wars",
    tipo_proceso: "Arco Sumergido (SAW)",
    material_base: "Acero Estructural A36",
    estado_inspeccion: "aprobado",
    inspeccion_tecnica: {
      ensayo_no_destructivo: "Partículas Magnéticas (MT)",
      porosidad_detectada: false,
      grietas_superficiales: false,
      norma_aplicada: "ISO 5817"
    },
    horas_trabajo: 24.0,
    fecha_inspeccion: ISODate("2026-07-08T00:00:00Z")
  },
  {
    codigo_orden: "ORD-WELD-005",
    soldador: "Xanthos Escandón",
    inspector_qc: "Kaelen Balthazar",
    ubicacion_taller: "Semuc Champey",
    pais: "Guatemala",
    estructura_proyecto: "Soporte de Turbina Nave Nebuchadnezzar",
    referencia_popular: "The Matrix",
    tipo_proceso: "TIG (GTAW)",
    material_base: "Aleación de Aluminio 6061-T6",
    estado_inspeccion: "en_inspeccion",
    inspeccion_tecnica: {
      ensayo_no_destructivo: "Inspección Visual (VT)",
      porosidad_detectada: false,
      grietas_superficiales: false,
      norma_aplicada: "AWS D1.2"
    },
    horas_trabajo: 6.5,
    fecha_inspeccion: ISODate("2026-07-18T00:00:00Z")
  }
])

// creación de índices para optimizar consultas frecuentes

// Este índice optimiza los filtros por estado de control de calidad ('aprobado', 'rechazado', 'pendiente_ultrasonido').
db.ordenes.createIndex({ estado_inspeccion: 1 })

// Permite auditar rápidamente las órdenes de trabajo asignadas a un soldador específico. Facilita la medición del rendimiento y tasa de rechazo por técnico.
db.ordenes.createIndex({ soldador: 1 })

// Acelera la búsqueda sobre el subdocumento de inspección técnica 
db.ordenes.createIndex({ "inspeccion_tecnica.ensayo_no_destructivo": 1 })