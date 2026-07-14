// 16. Drop de ropa urbana
// Solucion - jeshua-perez (nivel basico)
// Enfoque: arrays de tallas

use campus_ropa_drop

db.prendas.drop()

db.createCollection("prendas")

db.prendas.insertMany([
  { nombre: "Hoodie Oversize Negro", marca: "Street9", precio: 130000, tallasDisponibles: ["S", "M", "L", "XL"], colores: ["negro", "gris"] },
  { nombre: "Cargo Pants Beige", marca: "UrbanRoot", precio: 165000, tallasDisponibles: ["M", "L"], colores: ["beige"] },
  { nombre: "Camiseta Grafica Retro", marca: "Street9", precio: 65000, tallasDisponibles: ["XS", "S", "M", "L"], colores: ["blanco", "negro"] },
  { nombre: "Chaqueta Bomber", marca: "NightCrew", precio: 210000, tallasDisponibles: ["S", "M"], colores: ["verde", "negro"] },
  { nombre: "Gorra Snapback", marca: "UrbanRoot", precio: 45000, tallasDisponibles: ["Unica"], colores: ["negro", "rojo"] },
  { nombre: "Jogger Tecnico", marca: "NightCrew", precio: 140000, tallasDisponibles: ["S", "M", "L", "XL"], colores: ["gris"] }
])
