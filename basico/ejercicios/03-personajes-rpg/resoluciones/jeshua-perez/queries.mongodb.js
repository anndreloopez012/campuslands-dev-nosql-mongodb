// 03. Personajes RPG
// Consultas - jeshua-perez

use campus_personajes_rpg

// 1. Ver todos los personajes con su subdocumento de atributos
db.personajes.find({})

// 2. Buscar personajes con alta inteligencia usando el campo anidado
db.personajes.find(
  { "atributos.inteligencia": { $gte: 50 } },
  { nombre: 1, "atributos.inteligencia": 1, _id: 0 }
)

// 3. Buscar personajes que tengan un item especifico en su inventario (array de subdocumentos)
db.personajes.find({ "inventario.item": "Pocion de vida" })

// 4. Proyeccion mostrando solo nombre, clase y nivel
db.personajes.find({}, { nombre: 1, clase: 1, nivel: 1, _id: 0 })

// 5. Actualizar un valor dentro del subdocumento anidado (subir vida tras subir de nivel)
db.personajes.updateOne(
  { nombre: "Selene Nocheclara" },
  { $set: { nivel: 9, "atributos.vida": 150 } }
)

// 6. Agregar un item nuevo al array de inventario de un personaje
db.personajes.updateOne(
  { nombre: "Kira Vientoveloz" },
  { $push: { inventario: { item: "Capa de sombras", cantidad: 1 } } }
)
