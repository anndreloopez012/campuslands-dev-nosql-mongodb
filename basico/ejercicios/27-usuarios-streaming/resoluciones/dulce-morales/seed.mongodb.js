// Conectarse a la base de datos o crearla automáticamente
use("campus_usuarios_streaming");

// Inserción de documentos iniciales 
db.usuarios.insertMany([
  {
    nombre: "Alejandro Pérez",
    correo: "alejandro.perez@email.com",
    activo: true,
    edad: 28,
    suscripcion: {
      plan: "Premium Familiar",
      costo_mensual: 35000,
      renovacion: "2026-08-15"
    },
    generos_favoritos: ["ciencia ficcion", "rock", "synthwave", "thriller"],
    horas_reproducidas_mes: 74
  },
  {
    nombre: "Valeria Gómez",
    correo: "valeria.gomez@email.com",
    activo: true,
    edad: 24,
    suscripcion: {
      plan: "Estándar",
      costo_mensual: 20000,
      renovacion: "2026-09-01"
    },
    generos_favoritos: ["pop", "romantica", "comedia", "indie"],
    horas_reproducidas_mes: 45
  },
  {
    nombre: "Carlos Mendoza",
    correo: "carlos.mendoza@email.com",
    activo: false,
    edad: 32,
    suscripcion: {
      plan: "Básico",
      costo_mensual: 12000,
      renovacion: "2026-06-10"
    },
    generos_favoritos: ["documental", "jazz", "blues"],
    horas_reproducidas_mes: 12
  },
  {
    nombre: "Sofía Vergara",
    correo: "sofia.vergara@email.com",
    activo: true,
    edad: 26,
    suscripcion: {
      plan: "Premium Familiar",
      costo_mensual: 35000,
      renovacion: "2026-08-20"
    },
    generos_favoritos: ["accion", "pop", "electronica", "terror"],
    horas_reproducidas_mes: 92
  },
  {
    nombre: "Mateo Ruiz",
    correo: "mateo.ruiz@email.com",
    activo: true,
    edad: 19,
    suscripcion: {
      plan: "Estándar",
      costo_mensual: 20000,
      renovacion: "2026-08-28"
    },
    generos_favoritos: ["animacion", "hip hop", "trap"],
    horas_reproducidas_mes: 60
  }
]);