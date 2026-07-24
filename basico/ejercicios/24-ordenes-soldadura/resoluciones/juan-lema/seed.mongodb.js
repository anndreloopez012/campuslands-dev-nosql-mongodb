// Ordenes de soldadura — seed (juan-lema)
use campus_ordenes_soldadura;

db.registros.drop();

db.createCollection("registros");

db.registros.insertMany([
  {
    codigo: "OS-1001",
    cliente: "Aceros del Valle",
    tipoUnion: "filete",
    proceso: "SMAW",
    estado: "aprobada",
    espesorMm: 12,
    soldador: "Mario Cux",
    materiales: ["electrodo E6011", "gas argon"],
    inspecciones: [
      { fecha: new Date("2026-06-01"), resultado: "aprobado", inspector: "L. Pineda" }
    ]
  },
  {
    codigo: "OS-1002",
    cliente: "Metalmecanica Sur",
    tipoUnion: "tope",
    proceso: "GMAW",
    estado: "pendiente",
    espesorMm: 8,
    soldador: "Ana Cotzajay",
    materiales: ["alambre ER70S-6"],
    inspecciones: []
  },
  {
    codigo: "OS-1003",
    cliente: "Aceros del Valle",
    tipoUnion: "filete",
    proceso: "SMAW",
    estado: "rechazada",
    espesorMm: 15,
    soldador: "Mario Cux",
    materiales: ["electrodo E7018"],
    inspecciones: [
      { fecha: new Date("2026-06-03"), resultado: "rechazado", inspector: "L. Pineda" },
      { fecha: new Date("2026-06-05"), resultado: "rechazado", inspector: "J. Similox" }
    ]
  },
  {
    codigo: "OS-1004",
    cliente: "Estructuras del Norte",
    tipoUnion: "traslape",
    proceso: "GTAW",
    estado: "aprobada",
    espesorMm: 5,
    soldador: "Rudy Batz",
    materiales: ["varilla ER308L", "gas argon"],
    inspecciones: [
      { fecha: new Date("2026-06-07"), resultado: "aprobado", inspector: "J. Similox" }
    ]
  },
  {
    codigo: "OS-1005",
    cliente: "Metalmecanica Sur",
    tipoUnion: "tope",
    proceso: "SMAW",
    estado: "pendiente",
    espesorMm: 10,
    soldador: "Ana Cotzajay",
    materiales: ["electrodo E6011"],
    inspecciones: []
  }
]);

db.registros.createIndex({ estado: 1 });
