// Proyecto basico - Torneos de videojuegos del campus - juan-lema
// Base de datos y carga inicial de datos originales

use("campus_proyecto_basico");

try {
  db.registros.drop(); // limpieza para reejecucion repetible

  db.createCollection("registros");

  db.registros.insertMany([
    {
      nombre: "Kevin Sanchez",
      carrera: "Analisis y Desarrollo de Software",
      juego: "Valorant",
      categoria: "shooter",
      nivel: "avanzado",
      activo: true,
      puntaje: 92,
      fechaInscripcion: new Date("2026-02-10"),
      etiquetas: ["fps", "competitivo", "equipo"],
      equipo: { nombre: "Campus Raptors", sede: "Bogota" },
      partidas: [
        { rival: "Bytewolves", resultado: "victoria", fecha: new Date("2026-02-15") },
        { rival: "NullPointer", resultado: "derrota", fecha: new Date("2026-02-22") }
      ]
    },
    {
      nombre: "Laura Ramirez",
      carrera: "Ingenieria de Datos",
      juego: "League of Legends",
      categoria: "moba",
      nivel: "intermedio",
      activo: true,
      puntaje: 78,
      fechaInscripcion: new Date("2026-02-11"),
      etiquetas: ["moba", "estrategia"],
      equipo: { nombre: "Debug Squad", sede: "Medellin" },
      partidas: [
        { rival: "Campus Raptors", resultado: "victoria", fecha: new Date("2026-02-16") }
      ]
    },
    {
      nombre: "Andres Torres",
      carrera: "Ciencia de Datos",
      juego: "FIFA 26",
      categoria: "deportivo",
      nivel: "principiante",
      activo: false,
      puntaje: 45,
      fechaInscripcion: new Date("2026-02-12"),
      etiquetas: ["futbol", "casual"],
      equipo: { nombre: "Kernel FC", sede: "Cali" },
      partidas: []
    },
    {
      nombre: "Maria Gomez",
      carrera: "Analisis y Desarrollo de Software",
      juego: "Rocket League",
      categoria: "deportivo",
      nivel: "avanzado",
      activo: true,
      puntaje: 88,
      fechaInscripcion: new Date("2026-02-13"),
      etiquetas: ["arcade", "equipo", "velocidad"],
      equipo: { nombre: "Stack Overflow", sede: "Bogota" },
      partidas: [
        { rival: "Kernel FC", resultado: "victoria", fecha: new Date("2026-02-18") },
        { rival: "Bytewolves", resultado: "victoria", fecha: new Date("2026-02-25") }
      ]
    },
    {
      nombre: "Diego Fernandez",
      carrera: "Ingenieria de Sistemas",
      juego: "Valorant",
      categoria: "shooter",
      nivel: "intermedio",
      activo: true,
      puntaje: 65,
      fechaInscripcion: new Date("2026-02-14"),
      etiquetas: ["fps", "competitivo"],
      equipo: { nombre: "Bytewolves", sede: "Medellin" },
      partidas: [
        { rival: "Campus Raptors", resultado: "derrota", fecha: new Date("2026-02-15") }
      ]
    },
    {
      nombre: "Sofia Herrera",
      carrera: "Ciencia de Datos",
      juego: "League of Legends",
      categoria: "moba",
      nivel: "avanzado",
      activo: false,
      puntaje: 70,
      fechaInscripcion: new Date("2026-02-15"),
      etiquetas: ["moba", "estrategia", "equipo"],
      equipo: { nombre: "NullPointer", sede: "Cali" },
      partidas: [
        { rival: "Debug Squad", resultado: "derrota", fecha: new Date("2026-02-16") }
      ]
    }
  ]);

  print("Insercion completada: " + db.registros.countDocuments({}) + " documentos.");
} catch (error) {
  print("Error al cargar datos: " + error.message);
}

db.registros.find(); // verificacion rapida de carga
