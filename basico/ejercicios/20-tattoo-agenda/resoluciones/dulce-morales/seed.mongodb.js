// Creación de la base de datos
use("campus_tattoo_agenda");

// Inserción de documentos iniciales 
db.citas.insertMany([
  {
    codigo_cita: "CIT-001",
    estado: "pendiente",
    fecha_cita: ISODate("2026-08-10T10:00:00Z"),
    cliente: {
      nombre_completo: "Alejandro Pérez",
      telefono: "3001234567",
      email: "alejandro@mail.com"
    },
    tatuaje: {
      estilo: "realismo",
      zona_cuerpo: "antebrazo",
      dimensiones_cm: "15x10",
      descripcion: "Retrato de león con corona geométrica"
    },
    presupuesto: {
      valor_total: 450000,
      deposito_abonado: 150000
    },
    etiquetas: ["realismo", "retrato", "animales"]
  },
  {
    codigo_cita: "CIT-002",
    estado: "confirmada",
    fecha_cita: ISODate("2026-08-11T14:30:00Z"),
    cliente: {
      nombre_completo: "Valeria Gómez",
      telefono: "3109876543",
      email: "valeria@mail.com"
    },
    tatuaje: {
      estilo: "tradicional",
      zona_cuerpo: "muslo",
      dimensiones_cm: "20x12",
      descripcion: "Pantera americana clásica con daga"
    },
    presupuesto: {
      valor_total: 380000,
      deposito_abonado: 100000
    },
    etiquetas: ["tradicional", "old_school", "pantera"]
  },
  {
    codigo_cita: "CIT-003",
    estado: "completada",
    fecha_cita: ISODate("2026-08-05T11:00:00Z"),
    cliente: {
      nombre_completo: "Mateo Restrepo",
      telefono: "3204567890",
      email: "mateo@mail.com"
    },
    tatuaje: {
      estilo: "neo-tradicional",
      zona_cuerpo: "pantorrilla",
      dimensiones_cm: "18x10",
      descripcion: "Calavera mexicana con flores de cempasúchil"
    },
    presupuesto: {
      valor_total: 500000,
      deposito_abonado: 200000
    },
    etiquetas: ["neotradicional", "calavera", "color"]
  },
  {
    codigo_cita: "CIT-004",
    estado: "pendiente",
    fecha_cita: ISODate("2026-08-15T09:00:00Z"),
    cliente: {
      nombre_completo: "Sofía Vergara",
      telefono: "3156781234",
      email: "sofia@mail.com"
    },
    tatuaje: {
      estilo: "fine_line",
      zona_cuerpo: "costilla",
      dimensiones_cm: "8x8",
      descripcion: "Constelación de estrellas y luna minimalista"
    },
    presupuesto: {
      valor_total: 200000,
      deposito_abonado: 50000
    },
    etiquetas: ["fineline", "minimalista", "delicado"]
  },
  {
    codigo_cita: "CIT-005",
    estado: "confirmada",
    fecha_cita: ISODate("2026-08-12T16:00:00Z"),
    cliente: {
      nombre_completo: "Camila Torres",
      telefono: "3182345678",
      email: "camila@mail.com"
    },
    tatuaje: {
      estilo: "japo",
      zona_cuerpo: "espalda_alta",
      dimensiones_cm: "30x20",
      descripcion: "Koi japonés nadando contra corriente con olas"
    },
    presupuesto: {
      valor_total: 900000,
      deposito_abonado: 300000
    },
    etiquetas: ["japones", "koi", "olas"]
  }
]);