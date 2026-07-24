// Base de datos del ejercicio
use("campus_paracaidismo_checkin");

// Mantengo la colección limpia para que el script sea repetible
db.checkins.drop();

// En este caso cada check-in contiene toda la información necesaria del salto.
// Las validaciones se representan con campos booleanos porque el ejercicio
// pide un control manual antes de autorizar la actividad.

db.checkins.insertMany([
  {
    participante: "Carlos Méndez",
    edad: 28,
    pesoKg: 74,
    fecha: ISODate("2026-08-10"),
    instructor: "Luis Gómez",
    documentosCompletos: true,
    examenMedico: true,
    pagoConfirmado: true,
    autorizado: true
  },
  {
    participante: "Andrea López",
    edad: 31,
    pesoKg: 61,
    fecha: ISODate("2026-08-10"),
    instructor: "Luis Gómez",
    documentosCompletos: true,
    examenMedico: false,
    pagoConfirmado: true,
    autorizado: false
  },
  {
    participante: "José Ramírez",
    edad: 24,
    pesoKg: 79,
    fecha: ISODate("2026-08-11"),
    instructor: "Marco Ruiz",
    documentosCompletos: true,
    examenMedico: true,
    pagoConfirmado: true,
    autorizado: true
  },
  {
    participante: "María Pérez",
    edad: 35,
    pesoKg: 67,
    fecha: ISODate("2026-08-11"),
    instructor: "Marco Ruiz",
    documentosCompletos: false,
    examenMedico: true,
    pagoConfirmado: true,
    autorizado: false
  },
  {
    participante: "Kevin Morales",
    edad: 27,
    pesoKg: 82,
    fecha: ISODate("2026-08-12"),
    instructor: "Ana Castillo",
    documentosCompletos: true,
    examenMedico: true,
    pagoConfirmado: false,
    autorizado: false
  }
]);