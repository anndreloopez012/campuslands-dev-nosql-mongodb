// 16. Drop de ropa urbana
// Consultas - jeshua-perez

use campus_ropa_drop

// 1. Prendas disponibles en talla XL
db.prendas.find({ tallasDisponibles: "XL" })

// 2. Prendas que tienen tanto talla S como M ($all)
db.prendas.find({ tallasDisponibles: { $all: ["S", "M"] } })

// 3. Prendas de una marca, mostrando nombre y tallas
db.prendas.find(
  { marca: "UrbanRoot" },
  { nombre: 1, tallasDisponibles: 1, _id: 0 }
)

// 4. Agotar una talla especifica de una prenda ($pull)
db.prendas.updateOne(
  { nombre: "Chaqueta Bomber" },
  { $pull: { tallasDisponibles: "S" } }
)

// 5. Reponer una talla nueva en una prenda ($addToSet evita duplicados)
db.prendas.updateOne(
  { nombre: "Cargo Pants Beige" },
  { $addToSet: { tallasDisponibles: "XL" } }
)

// 6. Prendas con menos de 3 tallas disponibles ($size)
db.prendas.find({ tallasDisponibles: { $size: 1 } })
