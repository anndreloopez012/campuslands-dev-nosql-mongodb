// Personajes RPG - Consultas y Operaciones
// Solución de Denise López - Ejercicio 03

use campus_personajes_rpg

// 1. Consulta general para obtener todos los personajes (requerido por plantilla base)
db.personajes.find({})

// 2. Consulta con proyección: Mostrar nombre, clase y nivel de los personajes activos
db.personajes.find(
  { activo: true },
  { nombre: 1, clase: 1, nivel: 1, _id: 0 }
)

// 3. Consulta en subdocumentos: Buscar personajes con inteligencia mayor o igual a 50
db.personajes.find(
  { "atributos.inteligencia": { $gte: 50 } },
  { nombre: 1, clase: 1, "atributos.inteligencia": 1, _id: 0 }
)

// 4. Consulta en arrays: Buscar personajes que posean la habilidad "Sigilo"
db.personajes.find(
  { habilidades: "Sigilo" },
  { nombre: 1, habilidades: 1, _id: 0 }
)

// 5. Operación de actualización: Subir de nivel a "Lyra", aumentar su destreza y agregarle una habilidad
db.personajes.updateOne(
  { nombre: "Lyra" },
  { 
    $inc: { nivel: 1, "atributos.destreza": 2 },
    $push: { habilidades: "Lanzar Cuchillo" }
  }
)