//Crea o selecciona la base de datos a utilizar
use("campus_paracaidismo_checkin");

// Inserta documentos con datos acoorde a el ejercicio 
db.checkins.insertMany([
  {
    paracaidista: "Carlos Ramirez",
    tipo_salto: "tandem",
    estado_checkin: "completado",
    peso_kg: 78,
    detalles_salto: {
      altura_pies: 13000,
      aeronave: "Cessna Caravan",
      instructor: "Captain Sky"
    },
    equipo: {
      arnes: "Standard-V2",
      paracaidas_principal: "Epic 230",
      reserva: "Reserve-Pro"
    },
    requisitos_cumplidos: ["peso_verificado", "firmas_legales", "briefing_ok"],
    activo: true
  },
  {
    paracaidista: "Sofia Vergara",
    tipo_salto: "solo",
    estado_checkin: "pendiente",
    peso_kg: 62,
    detalles_salto: {
      altura_pies: 15000,
      aeronave: "Twin Otter",
      instructor: null
    },
    equipo: {
      arnes: "Pro-Racing",
      paracaidas_principal: "Storm 170",
      reserva: "Smart 150"
    },
    requisitos_cumplidos: ["peso_verificado", "firmas_legales"],
    activo: true
  },
  {
    paracaidista: "Mateo Gomez",
    tipo_salto: "tandem",
    estado_checkin: "completado",
    peso_kg: 85,
    detalles_salto: {
      altura_pies: 13000,
      aeronave: "Cessna Caravan",
      instructor: "SkyMaster Alex"
    },
    equipo: {
      arnes: "Standard-V2",
      paracaidas_principal: "Epic 260",
      reserva: "Reserve-Pro"
    },
    requisitos_cumplidos: ["peso_verificado", "briefing_ok"],
    activo: true
  },
  {
    paracaidista: "Valentina Ruiz",
    type_salto: "practica",
    estado_checkin: "completado",
    peso_kg: 58,
    detalles_salto: {
      altura_pies: 10000,
      aeronave: "Cessna 182",
      instructor: null
    },
    equipo: {
      arnes: "Solo-Light",
      paracaidas_principal: "Cruiser 150",
      reserva: "Reserve-Lite"
    },
    requisitos_cumplidos: ["peso_verificado", "firmas_legales", "briefing_ok", "licencia_vigente"],
    activo: true
  },
  {
    paracaidista: "Andres Parra",
    tipo_salto: "solo",
    estado_checkin: "pendiente",
    peso_kg: 75,
    detalles_salto: {
      altura_pies: 14000,
      aeronave: "Twin Otter",
      instructor: null
    },
    equipo: {
      arnes: "Pro-Racing",
      paracaidas_principal: "Sabre3 135",
      reserva: "Optimal 140"
    },
    requisitos_cumplidos: ["peso_verificado"],
    activo: false
  }
]);