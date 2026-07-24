// Check-in de paracaidismo - Carga inicial de datos (Seed)
// Solución de Denise López - Ejercicio 19

use campus_paracaidismo_checkin

// Crear la colección principal en minúsculas y plural
db.createCollection("checkins")

// Insertar 5 registros de check-in con personas de nombres poco comunes y zonas de salto
db.checkins.insertMany([
  {
    saltador: "Orestes Vane",
    zona_salto: "Puerto San José",
    pais: "Guatemala",
    modalidad: "Tandem",
    peso_kg: 74.5,
    altura_salto_pies: 10000,
    instruccion_completada: true,
    validaciones_manuales: {
      firma_waiver: true,
      revision_medica: true,
      inspeccion_arnes: true,
      validado_por: "Instructor Hesperio"
    },
    equipamiento: {
      codigo_paracaidas: "PARA-GT-01",
      altimetro_verificado: true
    },
    estado_checkin: "aprobado",
    fecha: new Date()
  },
  {
    saltador: "Cyrene Sterling",
    zona_salto: "Lago de Atitlán",
    pais: "Guatemala",
    modalidad: "Tandem",
    peso_kg: 62.0,
    altura_salto_pies: 12000,
    instruccion_completada: true,
    validaciones_manuales: {
      firma_waiver: true,
      revision_medica: true,
      inspeccion_arnes: true,
      validado_por: "Instructor Cirene"
    },
    equipamiento: {
      codigo_paracaidas: "PARA-GT-04",
      altimetro_verificado: true
    },
    estado_checkin: "aprobado",
    fecha: new Date()
  },
  {
    saltador: "Balthazar Nightshade",
    zona_salto: "Semuc Champey",
    pais: "Guatemala",
    modalidad: "Salto Individual AFF",
    peso_kg: 81.2,
    altura_salto_pies: 14000,
    instruccion_completada: true,
    validaciones_manuales: {
      firma_waiver: true,
      revision_medica: false, // Pendiente de revisión
      inspeccion_arnes: true,
      validado_por: "Enfermero Amador"
    },
    equipamiento: {
      codigo_paracaidas: "PARA-GT-09",
      altimetro_verificado: false
    },
    estado_checkin: "pendiente",
    fecha: new Date()
  },
  {
    saltador: "Melantho Frost",
    zona_salto: "Península de Chiliques",
    pais: "Chile",
    modalidad: "Tandem",
    peso_kg: 58.0,
    altura_salto_pies: 10000,
    instruccion_completada: false,
    validaciones_manuales: {
      firma_waiver: true,
      revision_medica: true,
      inspeccion_arnes: false,
      validado_por: "Instructor Tiberio"
    },
    equipamiento: {
      codigo_paracaidas: "PARA-CL-02",
      altimetro_verificado: true
    },
    estado_checkin: "rechazado",
    fecha: new Date()
  },
  {
    saltador: "Xanthos Escandón",
    zona_salto: "Valle de Somoto",
    pais: "Nicaragua",
    modalidad: "Tandem",
    peso_kg: 78.0,
    altura_salto_pies: 12000,
    instruccion_completada: true,
    validaciones_manuales: {
      firma_waiver: true,
      revision_medica: true,
      inspeccion_arnes: true,
      validado_por: "Instructor Kaelen"
    },
    equipamiento: {
      codigo_paracaidas: "PARA-NI-05",
      altimetro_verificado: true
    },
    estado_checkin: "aprobado",
    fecha: new Date()
  }
])

// Crear índices para acelerar búsquedas por estado y validación médica
db.checkins.createIndex({ estado_checkin: 1 })
db.checkins.createIndex({ "validaciones_manuales.revision_medica": 1 })