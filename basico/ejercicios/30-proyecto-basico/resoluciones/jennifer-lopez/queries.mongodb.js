// Proyecto básico MongoDB - Consultas y Operaciones
// Solución de Denise López - Ejercicio 30

use campus_proyecto_basico

// 1. Consulta general requerida por la plantilla base
db.torneos.find({})

// 2. Consulta de torneos activos o en curso en el campus
db.torneos.find(
  { estado: "En Curso" },
  { codigo_torneo: 1, nombre_torneo: 1, videojuego: 1, lider_equipo: 1, sede_arena: 1, _id: 0 }
)

// 3. Consulta de torneos con bolsa de premios mayor o igual a Q2,000.00 GTQ
db.torneos.find(
  { monto_premio_gtq: { $gte: 2000.00 } },
  { nombre_torneo: 1, videojuego: 1, monto_premio_gtq: 1, equipos_inscritos: 1, _id: 0 }
)

// 4. Reporte por plataformas (Búsqueda en arreglos)
db.torneos.find(
  { plataformas: "PC" },
  { nombre_torneo: 1, videojuego: 1, plataformas: 1, sede_arena: 1, _id: 0 }
)

// 5. Operación de actualización (Update): Finalizar el torneo de Rocket League y registrar ganador
db.torneos.updateOne(
  { codigo_torneo: "TRN-GAM-004" },
  {
    $set: {
      estado: "Finalizado",
      "estadisticas.equipo_ganador": "Cyrene_Boosters",
      "estadisticas.mvp_jugador": "CyreneGT"
    },
    $inc: { "estadisticas.partidas_jugadas": 14 }
  }
)

// 6. Inserción de un nuevo torneo registrado en la sede Semuc Champey
db.torneos.insertOne({
  codigo_torneo: "TRN-GAM-006",
  nombre_torneo: "Clásico Campus FIFA / EA Sports FC",
  videojuego: "EA Sports FC 26",
  categoria: "Deportes",
  lider_equipo: "Xanthos Escandón",
  sede_arena: "Arena Gaming Semuc Champey",
  pais: "Guatemala",
  equipos_inscritos: 24,
  monto_premio_gtq: 1200.00,
  estado: "Inscripciones Abiertas",
  estadisticas: {
    partidas_jugadas: 0,
    equipo_ganador: "Por comenzar",
    mvp_jugador: "Por comenzar"
  },
  plataformas: ["PlayStation 5", "Xbox Series X"],
  fecha_inicio: ISODate("2026-09-10T00:00:00Z")
})