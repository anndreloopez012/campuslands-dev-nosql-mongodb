// Órdenes de soldadura - Consultas y Operaciones
// Solución de Denise López - Ejercicio 24

use campus_ordenes_soldadura

// 1. Consulta general requerida por la plantilla base
db.ordenes.find({})

// 2. Consulta enfocada en estado de inspección: Listar órdenes con estado "aprobado"
db.ordenes.find(
  { estado_inspeccion: "aprobado" },
  { codigo_orden: 1, soldador: 1, estructura_proyecto: 1, "inspeccion_tecnica.norma_aplicada": 1, _id: 0 }
)

// 3. Consulta de control de calidad: Detectar órdenes rechazadas o con fallas detectadas
db.ordenes.find(
  { 
    $or: [
      { estado_inspeccion: "rechazado" },
      { "inspeccion_tecnica.porosidad_detectada": true }
    ]
  },
  { codigo_orden: 1, soldador: 1, inspector_qc: 1, ubicacion_taller: 1, _id: 0 }
)

// 4. Consulta por proceso de soldadura y horas invertidas mayores a 10 horas
db.ordenes.find(
  { tipo_proceso: "TIG (GTAW)", horas_trabajo: { $gt: 10 } },
  { codigo_orden: 1, soldador: 1, estructura_proyecto: 1, horas_trabajo: 1, _id: 0 }
)

// 5. Operación de actualización (Update): Corregir grietas en la orden de Balthazar Nightshade, cambiando su estado a "aprobado"
db.ordenes.updateOne(
  { codigo_orden: "ORD-WELD-003" },
  {
    $set: {
      estado_inspeccion: "aprobado",
      "inspeccion_tecnica.porosidad_detectada": false,
      "inspeccion_tecnica.grietas_superficiales": false,
      fecha_inspeccion: ISODate("2026-07-21T00:00:00Z")
    },
    $inc: { horas_trabajo: 4.5 }
  }
)

// 6. Inserción de una nueva orden de soldadura procesada en Tikal, Guatemala
db.ordenes.insertOne({
  codigo_orden: "ORD-WELD-006",
  soldador: "Zephyrine Valdivia",
  inspector_qc: "Hesperio Valdivia",
  ubicacion_taller: "Tikal",
  pais: "Guatemala",
  estructura_proyecto: "Marco de Protección Ciénaga",
  referencia_popular: "Transformers",
  tipo_proceso: "MIG/MAG (GMAW)",
  material_base: "Acero Inoxidable 304",
  estado_inspeccion: "aprobado",
  inspeccion_tecnica: {
    ensayo_no_destructivo: "Ultrasonido (UT)",
    porosidad_detectada: false,
    grietas_superficiales: false,
    norma_aplicada: "AWS D1.1"
  },
  horas_trabajo: 8.0,
  fecha_inspeccion: ISODate("2026-07-22T00:00:00Z")
})