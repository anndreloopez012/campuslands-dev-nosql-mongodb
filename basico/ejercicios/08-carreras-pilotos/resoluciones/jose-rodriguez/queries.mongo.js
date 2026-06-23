// Asegurar uso de la base de datos correcta
use('campus_carreras_pilotos');

// --- OPERACIONES DE CONSULTA, ORDENAMIENTO Y LÍMITES (READ) ---

// Consulta 1: Generar el TOP 3 de la Tabla de Posiciones Mundial (Sort + Limit + Proyección)
// En la barra 'Filter' de Compass: { "activo": true }
// En la barra 'Project' de Compass: { "nombre": 1, "escuderia": 1, "estadisticas_temporada.puntos_totales": 1, "_id": 0 }
// En la barra 'Options' -> 'Sort': { "estadisticas_temporada.puntos_totales": -1 }
// En la barra 'Options' -> 'Limit': 3
db.pilotos.find(
  { activo: true },
  { nombre: 1, escuderia: 1, "estadisticas_temporada.puntos_totales": 1, _id: 0 }
).sort({ "estadisticas_temporada.puntos_totales": -1 }).limit(3);

// Consulta 2: Buscar pilotos con rendimiento de vueltas rápidas alto (vueltas_rapidas >= 3) ordenados de mayor a menor

db.pilotos.find({ "estadisticas_temporada.vueltas_rapidas": { $gte: 3 } }).sort({ "estadisticas_temporada.vueltas_rapidas": -1 });

// Consulta 3: Filtrar pilotos que hayan ganado alguna de sus últimas carreras (buscar el número 1 dentro del array de posiciones)

db.pilotos.find({ "ultimos_resultados_posicion": 1 });


// --- OPERACIÓN DE ACTUALIZACIÓN (UPDATE) ---

// Actualización: Un piloto gana el Gran Premio; se incrementan sus puntos (+25), sus podios (+1) y se agrega su nueva victoria al inicio de la racha
db.pilotos.updateOne(
  { nombre: "Lando Norris" },
  { 
    $inc: { "estadisticas_temporada.puntos_totales": 25, "estadisticas_temporada.podios": 1 },
    $push: { ultimos_resultados_posicion: { $each: [1], $position: 0 } }
  }
);