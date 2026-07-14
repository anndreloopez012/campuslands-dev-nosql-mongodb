// 07. Garaje de autos de lujo
// Solucion - jeshua-perez (nivel basico)
// Enfoque: filtros numericos

use campus_garaje_lujo

db.autos.drop()

db.createCollection("autos")

db.autos.insertMany([
  { marca: "Ferrari", modelo: "Roma", anio: 2023, precio: 950000, potenciaHP: 620, disponible: true },
  { marca: "Lamborghini", modelo: "Huracan", anio: 2022, precio: 1200000, potenciaHP: 630, disponible: true },
  { marca: "Porsche", modelo: "911 Turbo S", anio: 2024, precio: 850000, potenciaHP: 640, disponible: false },
  { marca: "Aston Martin", modelo: "DB12", anio: 2023, precio: 780000, potenciaHP: 671, disponible: true },
  { marca: "Bentley", modelo: "Continental GT", anio: 2021, precio: 990000, potenciaHP: 542, disponible: true },
  { marca: "McLaren", modelo: "Artura", anio: 2024, precio: 1100000, potenciaHP: 671, disponible: false }
])
