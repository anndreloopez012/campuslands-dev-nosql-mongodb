// Catálogo de skins battle royale - Consultas y Operaciones
// Solución de Denise López - Ejercicio 02

use campus_skins_battle_royale

// 1. Consulta general para obtener todos los registros (requerido por plantilla)
db.skins.find({})

// 2. Consulta con proyección: Mostrar nombre, rareza y precio de skins disponibles
db.skins.find(
  { disponible: true },
  { nombre: 1, rareza: 1, precio_monedas: 1, _id: 0 }
)

// 3. Consulta en subdocumentos: Buscar skins de temporada mayor o igual a 5
db.skins.find(
  { "detalles.temporada": { $gte: 5 } },
  { nombre: 1, "detalles.temporada": 1, _id: 0 }
)

// 4. Consulta en arrays: Buscar skins que contengan la etiqueta "exclusivo"
db.skins.find(
  { etiquetas: "exclusivo" },
  { nombre: 1, etiquetas: 1, _id: 0 }
)

// 5. Operación de actualización: Aplicar descuento y subir popularidad a la skin "Cuervo Legendario"
db.skins.updateOne(
  { nombre: "Cuervo Legendario" },
  { 
    $set: { precio_monedas: 1800 },$inc: { "detalles.puntos_popularidad": 5 }
  }
)