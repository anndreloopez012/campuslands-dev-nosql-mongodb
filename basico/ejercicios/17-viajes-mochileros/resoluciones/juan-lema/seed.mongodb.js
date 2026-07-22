// Ejercicio 17 - Viajes mochileros
// Autor: juan-lema
// Seed: crea la BD e inserta documentos originales en "registros"

use campus_viajes_mochileros

db.registros.drop() // limpia antes de sembrar (idempotente)

db.registros.insertMany([
  {
    viajero: { nombre: "Sofia Ramirez", edad: 24, nacionalidad: "Colombia" },
    destino: { pais: "Peru", ciudad: "Cusco" },
    fechaInicio: new Date("2026-08-05"),
    fechaFin: new Date("2026-08-15"),
    duracionDias: 10,
    presupuesto: {
      total: 650,
      moneda: "USD",
      gastos: [
        { categoria: "hospedaje", monto: 180 },
        { categoria: "comida", monto: 150 },
        { categoria: "transporte", monto: 200 },
        { categoria: "actividades", monto: 120 }
      ]
    },
    alojamiento: "hostel",
    transporte: ["bus", "tren"],
    actividades: ["Machu Picchu", "Valle Sagrado"],
    estado: "planificado",
    calificacion: null
  },
  {
    viajero: { nombre: "Diego Fernandez", edad: 29, nacionalidad: "Argentina" },
    destino: { pais: "Guatemala", ciudad: "Antigua" },
    fechaInicio: new Date("2026-03-01"),
    fechaFin: new Date("2026-03-09"),
    duracionDias: 8,
    presupuesto: {
      total: 420,
      moneda: "USD",
      gastos: [
        { categoria: "hospedaje", monto: 100 },
        { categoria: "comida", monto: 110 },
        { categoria: "transporte", monto: 90 },
        { categoria: "actividades", monto: 80 }
      ]
    },
    alojamiento: "camping",
    transporte: ["chicken bus", "a pie"],
    actividades: ["Volcan Acatenango", "mercado local"],
    estado: "finalizado",
    calificacion: 5
  },
  {
    viajero: { nombre: "Laura Gomez", edad: 22, nacionalidad: "Mexico" },
    destino: { pais: "Vietnam", ciudad: "Hanoi" },
    fechaInicio: new Date("2026-11-10"),
    fechaFin: new Date("2026-11-28"),
    duracionDias: 18,
    presupuesto: {
      total: 900,
      moneda: "USD",
      gastos: [
        { categoria: "hospedaje", monto: 220 },
        { categoria: "comida", monto: 180 },
        { categoria: "transporte", monto: 300 },
        { categoria: "actividades", monto: 150 }
      ]
    },
    alojamiento: "hostel",
    transporte: ["moto", "tren nocturno"],
    actividades: ["Bahia de Halong", "casco antiguo"],
    estado: "planificado",
    calificacion: null
  },
  {
    viajero: { nombre: "Mateo Rios", edad: 31, nacionalidad: "Chile" },
    destino: { pais: "Portugal", ciudad: "Lisboa" },
    fechaInicio: new Date("2026-01-12"),
    fechaFin: new Date("2026-01-20"),
    duracionDias: 8,
    presupuesto: {
      total: 780,
      moneda: "USD",
      gastos: [
        { categoria: "hospedaje", monto: 250 },
        { categoria: "comida", monto: 180 },
        { categoria: "transporte", monto: 210 },
        { categoria: "actividades", monto: 90 }
      ]
    },
    alojamiento: "airbnb compartido",
    transporte: ["tranvia", "tren"],
    actividades: ["Belem", "Sintra"],
    estado: "finalizado",
    calificacion: 4
  },
  {
    viajero: { nombre: "Camila Torres", edad: 26, nacionalidad: "Ecuador" },
    destino: { pais: "Tailandia", ciudad: "Chiang Mai" },
    fechaInicio: new Date("2026-06-01"),
    fechaFin: new Date("2026-06-14"),
    duracionDias: 13,
    presupuesto: {
      total: 550,
      moneda: "USD",
      gastos: [
        { categoria: "hospedaje", monto: 130 },
        { categoria: "comida", monto: 140 },
        { categoria: "transporte", monto: 150 },
        { categoria: "actividades", monto: 100 }
      ]
    },
    alojamiento: "hostel",
    transporte: ["scooter", "songthaew"],
    actividades: ["santuario de elefantes", "templos"],
    estado: "en curso",
    calificacion: null
  },
  {
    viajero: { nombre: "Andres Paredes", edad: 27, nacionalidad: "Bolivia" },
    destino: { pais: "Guatemala", ciudad: "Flores" },
    fechaInicio: new Date("2026-04-18"),
    fechaFin: new Date("2026-04-24"),
    duracionDias: 6,
    presupuesto: {
      total: 300,
      moneda: "USD",
      gastos: [
        { categoria: "hospedaje", monto: 80 },
        { categoria: "comida", monto: 90 },
        { categoria: "transporte", monto: 70 },
        { categoria: "actividades", monto: 60 }
      ]
    },
    alojamiento: "hostel",
    transporte: ["lancha", "bus"],
    actividades: ["Tikal", "Isla de Flores"],
    estado: "planificado",
    calificacion: null
  }
])

db.registros.countDocuments()
