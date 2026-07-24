// Base de datos del ejercicio
use("campus_ordenes_soldadura");

// Elimino la colección para que el script siempre produzca el mismo resultado
db.ordenes.drop();

// Cada documento representa una orden de trabajo completa.
// El estado de inspección pertenece a la misma orden, por lo que mantenerlo
// embebido simplifica las consultas y evita relaciones innecesarias.

db.ordenes.insertMany([
  {
    codigo: "OS-001",
    cliente: "Metalúrgica Centro",
    pieza: "Estructura metálica",
    soldador: "Luis Hernández",
    fecha: ISODate("2026-08-03"),
    proceso: "MIG",
    inspeccion: "aprobada"
  },
  {
    codigo: "OS-002",
    cliente: "Industrias GT",
    pieza: "Barandal",
    soldador: "Carlos Méndez",
    fecha: ISODate("2026-08-04"),
    proceso: "TIG",
    inspeccion: "pendiente"
  },
  {
    codigo: "OS-003",
    cliente: "Acero Plus",
    pieza: "Viga",
    soldador: "Kevin Morales",
    fecha: ISODate("2026-08-05"),
    proceso: "MIG",
    inspeccion: "rechazada"
  },
  {
    codigo: "OS-004",
    cliente: "Metalúrgica Centro",
    pieza: "Escalera industrial",
    soldador: "José Ramírez",
    fecha: ISODate("2026-08-06"),
    proceso: "SMAW",
    inspeccion: "aprobada"
  },
  {
    codigo: "OS-005",
    cliente: "Constructora Maya",
    pieza: "Puerta metálica",
    soldador: "Andrea López",
    fecha: ISODate("2026-08-07"),
    proceso: "TIG",
    inspeccion: "pendiente"
  }
]);