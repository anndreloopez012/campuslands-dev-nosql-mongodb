// Agenda de tatuajes - juan-lema
// Seed: coleccion "registros" en campus_tattoo_agenda

use("campus_tattoo_agenda");

db.registros.drop();

db.registros.insertMany([
  {
    cliente: "Renata Solis",
    tatuador: "Iker Duarte",
    estilo: "linea fina",
    zona_cuerpo: "antebrazo",
    fecha: new Date("2026-07-25"),
    estado: "agendado",
    precio: 220000,
    notas: "Primera sesion, diseno floral"
  },
  {
    cliente: "Mateo Vargas",
    tatuador: "Iker Duarte",
    estilo: "blackwork",
    zona_cuerpo: "espalda",
    fecha: new Date("2026-07-26"),
    estado: "agendado",
    precio: 450000,
    notas: "Requiere dos sesiones"
  },
  {
    cliente: "Camila Ortiz",
    tatuador: "Paola Reyes",
    estilo: "realismo",
    zona_cuerpo: "pierna",
    fecha: new Date("2026-07-18"),
    estado: "completado",
    precio: 600000,
    notas: "Retoque realizado sin costo"
  },
  {
    cliente: "Julian Peña",
    tatuador: "Paola Reyes",
    estilo: "tradicional",
    zona_cuerpo: "brazo",
    fecha: new Date("2026-07-15"),
    estado: "completado",
    precio: 380000,
    notas: "Cliente frecuente"
  },
  {
    cliente: "Valentina Cruz",
    tatuador: "Bruno Salazar",
    estilo: "geometrico",
    zona_cuerpo: "costilla",
    fecha: new Date("2026-07-20"),
    estado: "cancelado",
    precio: 300000,
    notas: "Cliente reagendara mas adelante"
  },
  {
    cliente: "Simon Rojas",
    tatuador: "Bruno Salazar",
    estilo: "linea fina",
    zona_cuerpo: "muñeca",
    fecha: new Date("2026-07-28"),
    estado: "agendado",
    precio: 150000,
    notas: "Diseno pequeño, sesion unica"
  }
]);
