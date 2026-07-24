// Check-in de paracaidismo — seed
// Autor: juan-lema
use("campus_paracaidismo_checkin");

db.createCollection("registros");

db.registros.insertMany([
  {
    nombre: "Marta Solano",
    documento: "P001",
    categoria: "tandem",
    instructor: "Diego Herrera",
    altura_salto_pies: 10000,
    activo: true,
    chequeo_medico: { apto: true, peso_kg: 62 },
    equipo: ["arnes-tandem", "paracaidas-principal", "paracaidas-reserva"],
    fecha: new Date("2026-07-01")
  },
  {
    nombre: "Luis Cabrera",
    documento: "P002",
    categoria: "principiante",
    instructor: "Diego Herrera",
    altura_salto_pies: 5000,
    activo: true,
    chequeo_medico: { apto: true, peso_kg: 78 },
    equipo: ["arnes-individual", "paracaidas-principal", "altimetro"],
    fecha: new Date("2026-07-01")
  },
  {
    nombre: "Carla Nunez",
    documento: "P003",
    categoria: "avanzado",
    instructor: "Sofia Ramos",
    altura_salto_pies: 13000,
    activo: true,
    chequeo_medico: { apto: true, peso_kg: 58 },
    equipo: ["arnes-individual", "paracaidas-principal", "paracaidas-reserva", "camara-casco"],
    fecha: new Date("2026-07-02")
  },
  {
    nombre: "Andres Peralta",
    documento: "P004",
    categoria: "principiante",
    instructor: "Sofia Ramos",
    altura_salto_pies: 5000,
    activo: false,
    chequeo_medico: { apto: false, peso_kg: 95 },
    equipo: ["arnes-individual"],
    fecha: new Date("2026-07-02")
  },
  {
    nombre: "Paola Rios",
    documento: "P005",
    categoria: "avanzado",
    instructor: "Diego Herrera",
    altura_salto_pies: 14000,
    activo: true,
    chequeo_medico: { apto: true, peso_kg: 60 },
    equipo: ["arnes-individual", "paracaidas-principal", "paracaidas-reserva", "gopro"],
    fecha: new Date("2026-07-03")
  }
]);

db.registros.countDocuments();
