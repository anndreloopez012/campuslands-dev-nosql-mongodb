use("campus_proyecto_basico");

//Inserción de documentos con infomación coherente
db.proyectos.insertMany([
  {
    nombre: "Cyber Campus Odyssey",
    categoria: "videojuegos",
    activo: true,
    puntaje: 92,
    etiquetas: ["rpg", "unity", "campus"],
    detalles_campus: {
      sede: "Norte",
      cohorte: 2026,
      lider: "Carlos Mendoza"
    }
  },
  {
    nombre: "Pixel Tactics Arena",
    categoria: "videojuegos",
    activo: true,
    puntaje: 88,
    etiquetas: ["estrategia", "pixel-art", "campus"],
    detalles_campus: {
      sede: "Sur",
      cohorte: 2025,
      lider: "Ana Gómez"
    }
  },
  {
    nombre: "Quantum Physics Lab Simulator",
    categoria: "simulacion",
    activo: false,
    puntaje: 75,
    etiquetas: ["educativo", "godot", "ciencia"],
    detalles_campus: {
      sede: "Centro",
      cohorte: 2025,
      lider: "Elena Vargas"
    }
  },
  {
    nombre: "Campus Speed Racing",
    categoria: "videojuegos",
    activo: true,
    puntaje: 95,
    etiquetas: ["carreras", "unreal", "campus"],
    detalles_campus: {
      sede: "Norte",
      cohorte: 2026,
      lider: "David Ruiz"
    }
  },
  {
    nombre: "Eco Warrior VR",
    categoria: "simulacion",
    activo: true,
    puntaje: 84,
    etiquetas: ["vr", "ecologia", "unity"],
    detalles_campus: {
      sede: "Occidente",
      cohorte: 2026,
      lider: "Sofía Torres"
    }
  }
]);