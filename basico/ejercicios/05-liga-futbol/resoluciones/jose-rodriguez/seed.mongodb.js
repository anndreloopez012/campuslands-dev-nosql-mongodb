// 1. Crear y seleccionar la base de datos de la liga de futbol
use('campus_liga_futbol');

// 2. Insertar 5 documentos coherentes y realistas con datos estructurados

db.equipos.insertMany([
  {
    nombre: "F.C. Campus",
    ciudad: "Guatemala",
    director_tecnico: "Carlos Ancelotti",
    presupuesto_millones: 45.5,
    activo: true,
    jugadores_estrella: ["Torres", "Ramírez", "García"],
    estadisticas_temporada: { partidos_jugados: 12, puntos_totales: 28, goles_a_favor: 24 }
  },
  {
    nombre: "Atlético Devs",
    ciudad: "Antigua",
    director_tecnico: "Pep Guardiola",
    presupuesto_millones: 60.0,
    activo: true,
    jugadores_estrella: ["Mendoza", "López"],
    estadisticas_temporada: { partidos_jugados: 12, puntos_totales: 25, goles_a_favor: 30 }
  },
  {
    nombre: "Deportivo Código",
    ciudad: "Quetzaltenango",
    director_tecnico: "Zinedine Zidane",
    presupuesto_millones: 32.0,
    activo: true,
    jugadores_estrella: ["Rodríguez", "Morales", "Chajón"],
    estadisticas_temporada: { partidos_jugados: 12, puntos_totales: 18, goles_a_favor: 15 }
  },
  {
    nombre: "Real Script",
    ciudad: "San Marcos",
    director_tecnico: "Luis Enrique",
    presupuesto_millones: 15.2,
    activo: true,
    jugadores_estrella: ["Pérez", "Hernández"],
    estadisticas_temporada: { partidos_jugados: 12, puntos_totales: 14, goles_a_favor: 12 }
  },
  {
    nombre: "Unión NoSQL",
    ciudad: "Escuintla",
    director_tecnico: "Marcelo Bielsa",
    presupuesto_millones: 10.0,
    activo: false,
    jugadores_estrella: ["Santiesteban"],
    estadisticas_temporada: { partidos_jugados: 12, puntos_totales: 8, goles_a_favor: 9 }
  }
]);