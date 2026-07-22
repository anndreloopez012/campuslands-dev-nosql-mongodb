// Rutas turísticas - Consultas y Operaciones
// Solución de Denise López - Ejercicio 18

use campus_rutas_turisticas

// 1. Consulta general requerida por la plantilla base
db.rutas.find({})

// 2. Consulta de información geográfica: Consultar rutas mostrando nombre, país y coordenadas
db.rutas.find(
  { activa: true },
  { nombre_ruta: 1, pais: 1, "ubicacion.coordinates": 1, dificultad: 1, _id: 0 }
)

// 3. Consulta de filtro por dificultad y duración
db.rutas.find(
  { dificultad: "baja", duracion_horas: { $lte: 4 } },
  { nombre_ruta: 1, guia_encargado: 1, precio_usd: 1, _id: 0 }
)

// 4. Búsqueda de rutas que contengan puntos de interés específicos
db.rutas.find(
  { puntos_interes: "Escalada en Roca" },
  { nombre_ruta: 1, lugar_destacado: 1, pais: 1, _id: 0 }
)

// 5. Operación de actualización (Update): Reactivar la ruta de Marruecos y actualizar su tarifa
db.rutas.updateOne(
  { nombre_ruta: "Expedición a las Gargantas del Todra" },
  { 
    $set: { activa: true },$inc: { precio_usd: 15.00 }
  }
)