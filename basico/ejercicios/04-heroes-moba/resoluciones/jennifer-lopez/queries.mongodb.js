// Héroes MOBA por rol - Consultas y Operaciones
// Solución de Denise López - Ejercicio 04

use campus_heroes_moba

// 1. Consulta general para obtener todos los registros (requerido por la plantilla)
db.heroes.find({})

// 2. Consulta con proyección: Mostrar nombre, rol y dificultad de los héroes activos en el meta
db.heroes.find(
  { activo_en_meta: true },
  { nombre: 1, rol: 1, dificultad: 1, _id: 0 }
)

// 3. Consulta sobre subdocumento: Buscar héroes con ataque base mayor a 70
db.heroes.find(
  { "estadisticas_base.ataque": { $gt: 70 } },
  { nombre: 1, rol: 1, "estadisticas_base.ataque": 1, _id: 0 }
)

// 4. Consulta sobre array: Buscar héroes que puedan jugarse en la línea de "Support"
db.heroes.find(
  { lineas: "Support" },
  { nombre: 1, rol: 1, lineas: 1, _id: 0 }
)

// 5. Operación de actualización: Buffear a "Astra" aumentando su ataque e incluirla en otra línea
db.heroes.updateOne(
  { nombre: "Astra" },
  { 
    $inc: { "estadisticas_base.ataque": 5 },
    $push: { lineas: "Support" }
  }
)