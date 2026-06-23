// 1. Crear y seleccionar la base de datos del sistema de carreras
use('campus_carreras_pilotos');

// 2. Limpiar la colección antes de insertar para asegurar repetibilidad
db.pilotos.drop();

// 3. Insertar 5 documentos coherentes y realistas con datos de telemetría y rendimiento
db.pilotos.insertMany([
  {
    nombre: "Max Verstappen",
    escuderia: "Red Bull",
    numero_carro: 1,
    pais: "Países Bajos",
    activo: true,
    ultimos_resultados_posicion: [1, 1, 2, 1, 4],
    estadisticas_temporada: { puntos_totales: 215, podios: 8, vueltas_rapidas: 5 }
  },
  {
    nombre: "Lewis Hamilton",
    escuderia: "Ferrari",
    numero_carro: 44,
    pais: "Reino Unido",
    activo: true,
    ultimos_resultados_posicion: [3, 4, 1, 3, 2],
    estadisticas_temporada: { puntos_totales: 165, podios: 6, vueltas_rapidas: 2 }
  },
  {
    nombre: "Lando Norris",
    escuderia: "McLaren",
    numero_carro: 4,
    pais: "Reino Unido",
    activo: true,
    ultimos_resultados_posicion: [2, 1, 3, 2, 6],
    estadisticas_temporada: { puntos_totales: 180, podios: 7, vueltas_rapidas: 4 }
  },
  {
    nombre: "Fernando Alonso",
    escuderia: "Aston Martin",
    numero_carro: 14,
    pais: "España",
    activo: true,
    ultimos_resultados_posicion: [6, 7, 5, 8, 9],
    estadisticas_temporada: { puntos_totales: 92, podios: 2, vueltas_rapidas: 1 }
  },
  {
    nombre: "Charles Leclerc",
    escuderia: "Ferrari",
    numero_carro: 16,
    pais: "Mónaco",
    activo: false,
    ultimos_resultados_posicion: [12, 15, 4, 1, 18],
    estadisticas_temporada: { puntos_totales: 132, podios: 4, vueltas_rapidas: 3 }
  }
]);

// 4. Confirmación de ejecución exitosa
print("Semilla de Carreras ejecutada con éxito. 5 pilotos insertados en la colección 'pilotos'.");