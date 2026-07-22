// Ejercicio 28 - Reservas de eventos campus (deportes)
// Autor: juan-lema

use("campus_reservas_eventos");

db.registros.drop();

db.registros.insertMany([
  {
    evento: "Torneo de Futbol Interno",
    deporte: "futbol",
    fecha: new Date("2025-08-10"),
    cupo_maximo: 20,
    participantes: [
      { nombre: "Andres Ruiz", documento: "1001", confirmado: true },
      { nombre: "Laura Mora", documento: "1002", confirmado: true },
      { nombre: "Kevin Silva", documento: "1003", confirmado: false }
    ],
    ubicacion: { sede: "Coliseo Campus", ciudad: "Bogota" },
    estado: "activa",
    creado_en: new Date("2025-07-01")
  },
  {
    evento: "Clase de Yoga al Aire Libre",
    deporte: "yoga",
    fecha: new Date("2025-08-05"),
    cupo_maximo: 15,
    participantes: [
      { nombre: "Camila Rios", documento: "1004", confirmado: true },
      { nombre: "Julian Perez", documento: "1005", confirmado: true },
      { nombre: "Sara Gomez", documento: "1006", confirmado: false },
      { nombre: "Diego Leon", documento: "1007", confirmado: true },
      { nombre: "Paula Diaz", documento: "1008", confirmado: false }
    ],
    ubicacion: { sede: "Zona Verde Campus", ciudad: "Bogota" },
    estado: "activa",
    creado_en: new Date("2025-07-02")
  },
  {
    evento: "Torneo de Baloncesto 3v3",
    deporte: "baloncesto",
    fecha: new Date("2025-08-15"),
    cupo_maximo: 12,
    participantes: [],
    ubicacion: { sede: "Cancha Cubierta", ciudad: "Medellin" },
    estado: "cancelada",
    creado_en: new Date("2025-07-03")
  },
  {
    evento: "Maraton 5K Campus",
    deporte: "atletismo",
    fecha: new Date("2025-09-01"),
    cupo_maximo: 100,
    participantes: [
      { nombre: "Mateo Vargas", documento: "1009", confirmado: true },
      { nombre: "Isabel Castro", documento: "1010", confirmado: true }
    ],
    ubicacion: { sede: "Parque Central", ciudad: "Cali" },
    estado: "activa",
    creado_en: new Date("2025-07-04")
  },
  {
    evento: "Ciclismo Ruta Norte",
    deporte: "ciclismo",
    fecha: new Date("2025-08-20"),
    cupo_maximo: 30,
    participantes: [
      { nombre: "Felipe Rojas", documento: "1011", confirmado: true },
      { nombre: "Natalia Cruz", documento: "1012", confirmado: false }
    ],
    ubicacion: { sede: "Punto de Salida Norte", ciudad: "Bogota" },
    estado: "cancelada",
    creado_en: new Date("2025-07-05")
  }
]);

db.registros.find({});
