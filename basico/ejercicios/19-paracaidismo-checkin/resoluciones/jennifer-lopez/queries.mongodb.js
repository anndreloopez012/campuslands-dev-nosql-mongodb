// Check-in de paracaidismo - Consultas y Operaciones
// Solución de Denise López - Ejercicio 19

use campus_paracaidismo_checkin

// 1. Consulta general requerida por la plantilla base
db.checkins.find({})

// 2. Consulta de seguridad: Saltadores con check-in aprobado para el manifiesto de vuelo
db.checkins.find(
  { estado_checkin: "aprobado" },
  { saltador: 1, zona_salto: 1, modalidad: 1, "equipamiento.codigo_paracaidas": 1, _id: 0 }
)

// 3. Consulta de validación manual pendiente: Buscar quienes aún no completan la revisión médica o inspección
db.checkins.find(
  { 
    $or: [
      { "validaciones_manuales.revision_medica": false },
      { "validaciones_manuales.inspeccion_arnes": false }
    ]
  },
  { saltador: 1, estado_checkin: 1, validaciones_manuales: 1, _id: 0 }
)

// 4. Operación de actualización (Update): Validar manualmente a Balthazar Nightshade tras aprobar la revisión médica
db.checkins.updateOne(
  { saltador: "Balthazar Nightshade" },
  {
    $set: {
      "validaciones_manuales.revision_medica": true,
      "equipamiento.altimetro_verificado": true,
      estado_checkin: "aprobado"
    }
  }
)

// 5. Inserción de un nuevo registro de check-in para la zona de salto en Guatemala
db.checkins.insertOne({
  saltador: "Zephyrine Valdivia",
  zona_salto: "Cráter Azul",
  pais: "Guatemala",
  modalidad: "Tandem",
  peso_kg: 65.0,
  altura_salto_pies: 10000,
  instruccion_completada: true,
  validaciones_manuales: {
    firma_waiver: true,
    revision_medica: true,
    inspeccion_arnes: true,
    validado_por: "Instructor Hesperio"
  },
  equipamiento: {
    codigo_paracaidas: "PARA-GT-12",
    altimetro_verificado: true
  },
  estado_checkin: "aprobado",
  fecha: new Date()
})