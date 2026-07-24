// Agenda de tatuajes - Consultas y Operaciones
// Solución de Denise López - Ejercicio 20

use campus_tattoo_agenda

// 1. Consulta general requerida por la plantilla base
db.citas.find({})

// 2. Consulta de agenda activa: Buscar citas con estado "confirmada" programadas para agosto de 2026
db.citas.find(
  { 
    estado_cita: "confirmada",
    fecha_cita: { 
      $gte: ISODate("2026-08-01T00:00:00Z"),
      $lte: ISODate("2026-08-31T23:59:59Z")
    }
  },
  { cliente: 1, tatuador: 1, diseno: 1, fecha_cita: 1, estudio_ubicacion: 1, _id: 0 }
)

// 3. Consulta de gestión financiera: Citas pendientes o confirmadas con su depósito pagado
db.citas.find(
  { estado_cita: { $in: ["confirmada", "pendiente"] } },
  { cliente: 1, diseno: 1, precio_estimado_usd: 1, deposito_pagado_usd: 1, _id: 0 }
)

// 4. Operación de actualización (Update): Confirmar la cita pendiente de Cyrene Sterling y reprogramar su fecha
db.citas.updateOne(
  { cliente: "Cyrene Sterling", diseno: "Casco de Darth Vader - Star Wars" },
  {
    $set: {
      estado_cita: "confirmada",
      fecha_cita: ISODate("2026-08-20T11:00:00Z"),
      deposito_pagado_usd: 60.00
    }
  }
)

// 5. Inserción de una nueva cita agendada en la sede de Antigua Guatemala
db.citas.insertOne({
  cliente: "Zephyrine Valdivia",
  tatuador: "Hesperio Valdivia",
  estudio_ubicacion: "Antigua Guatemala",
  pais: "Guatemala",
  estilo: "Línea Fina",
  diseno: "Gatito Jiji - Kiki: Entregas a domicilio",
  zona_cuerpo: "Tobillo",
  duracion_estimada_horas: 2,
  precio_estimado_usd: 110.00,
  deposito_pagado_usd: 30.00,
  estado_cita: "confirmada",
  fecha_cita: ISODate("2026-08-25T16:00:00Z")
})