// 15. Pedidos foodtruck
// Solucion - jeshua-perez (nivel basico)
// Enfoque: insert y update de pedidos

use campus_foodtruck_campus

db.pedidos.drop()

db.createCollection("pedidos")

db.pedidos.insertMany([
  { cliente: "Laura Beltran", items: ["Arepa rellena", "Limonada"], total: 18000, estado: "recibido", fecha: new Date("2026-06-01T12:05:00") },
  { cliente: "Jhon Cardenas", items: ["Perro caliente", "Papas", "Gaseosa"], total: 22000, estado: "en preparacion", fecha: new Date("2026-06-01T12:10:00") },
  { cliente: "Manuela Rios", items: ["Hamburguesa doble"], total: 20000, estado: "entregado", fecha: new Date("2026-06-01T11:50:00") },
  { cliente: "Pedro Suarez", items: ["Empanadas x3", "Jugo natural"], total: 15000, estado: "recibido", fecha: new Date("2026-06-01T12:15:00") },
  { cliente: "Angela Vargas", items: ["Salchipapa"], total: 13000, estado: "en preparacion", fecha: new Date("2026-06-01T12:12:00") }
])
