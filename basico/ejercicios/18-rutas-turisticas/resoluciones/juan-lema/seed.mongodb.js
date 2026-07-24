// Rutas turisticas - juan-lema
// Base de datos y carga inicial de datos originales

use("campus_rutas_turisticas");

db.rutas.drop(); // limpieza para reejecucion repetible

db.createCollection("rutas");

db.rutas.insertMany([
  {
    nombre: "Centro Historico al Amanecer",
    ciudad: "Antigua Guatemala",
    categoria: "cultural",
    duracionHoras: 3,
    dificultad: "baja",
    precioUSD: 25,
    activa: true,
    calificacion: 4.8,
    etiquetas: ["colonial", "fotografia", "caminata"],
    guia: { nombre: "Marta Solis", telefono: "+502-5555-1010", idiomas: ["es", "en"] },
    paradas: [
      { nombre: "Parque Central", tipo: "plaza", duracionMinutos: 30 },
      { nombre: "Arco de Santa Catalina", tipo: "monumento", duracionMinutos: 20 },
      { nombre: "Convento Capuchinas", tipo: "museo", duracionMinutos: 45 }
    ]
  },
  {
    nombre: "Ascenso al Volcan Pacaya",
    ciudad: "San Vicente Pacaya",
    categoria: "aventura",
    duracionHoras: 6,
    dificultad: "alta",
    precioUSD: 40,
    activa: true,
    calificacion: 4.6,
    etiquetas: ["senderismo", "volcan", "naturaleza"],
    guia: { nombre: "Estuardo Ramirez", telefono: "+502-5555-2020", idiomas: ["es"] },
    paradas: [
      { nombre: "Base del sendero", tipo: "punto_partida", duracionMinutos: 15 },
      { nombre: "Mirador de lava", tipo: "mirador", duracionMinutos: 40 },
      { nombre: "Zona de asados", tipo: "descanso", duracionMinutos: 30 }
    ]
  },
  {
    nombre: "Sabores de Mercado Local",
    ciudad: "Ciudad de Guatemala",
    categoria: "gastronomica",
    duracionHoras: 2,
    dificultad: "baja",
    precioUSD: 18,
    activa: false,
    calificacion: 4.2,
    etiquetas: ["comida", "mercado", "cultura"],
    guia: { nombre: "Lucia Franco", telefono: "+502-5555-3030", idiomas: ["es", "en"] },
    paradas: [
      { nombre: "Mercado Central", tipo: "mercado", duracionMinutos: 60 },
      { nombre: "Puesto de tamales", tipo: "comida", duracionMinutos: 20 }
    ]
  },
  {
    nombre: "Kayak en Lago de Atitlan",
    ciudad: "Panajachel",
    categoria: "naturaleza",
    duracionHoras: 4,
    dificultad: "media",
    precioUSD: 35,
    activa: true,
    calificacion: 4.9,
    etiquetas: ["lago", "kayak", "paisaje"],
    guia: { nombre: "Diego Morales", telefono: "+502-5555-4040", idiomas: ["es", "en", "fr"] },
    paradas: [
      { nombre: "Muelle principal", tipo: "punto_partida", duracionMinutos: 10 },
      { nombre: "Isla flotante", tipo: "mirador", duracionMinutos: 30 },
      { nombre: "Aldea San Pedro", tipo: "cultura", duracionMinutos: 50 }
    ]
  },
  {
    nombre: "Playa y Atardecer en Monterrico",
    ciudad: "Monterrico",
    categoria: "playa",
    duracionHoras: 5,
    dificultad: "baja",
    precioUSD: 30,
    activa: true,
    calificacion: 4.4,
    etiquetas: ["playa", "atardecer", "tortugas"],
    guia: { nombre: "Ana Ixchel", telefono: "+502-5555-5050", idiomas: ["es"] },
    paradas: [
      { nombre: "Tortugario", tipo: "conservacion", duracionMinutos: 40 },
      { nombre: "Playa negra", tipo: "playa", duracionMinutos: 90 }
    ]
  }
]);

db.rutas.find(); // verificacion rapida de carga
