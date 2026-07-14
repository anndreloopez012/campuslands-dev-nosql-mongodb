// 23. Renders arquitectura 3D
// Solucion - jeshua-perez (nivel basico)
// Enfoque: consultas por cliente

use campus_renders_arquitectura

db.renders.drop()

db.createCollection("renders")

db.renders.insertMany([
  { proyecto: "Casa Ventanal Norte", cliente: "Constructora Alameda", tipo: "Exterior", entregado: true, fechaEntrega: new Date("2026-04-10"), costo: 1800000 },
  { proyecto: "Oficinas Torre Sol", cliente: "Grupo Meridiano", tipo: "Interior", entregado: false, fechaEntrega: new Date("2026-07-20"), costo: 3200000 },
  { proyecto: "Apartamento Loft 402", cliente: "Constructora Alameda", tipo: "Interior", entregado: true, fechaEntrega: new Date("2026-05-02"), costo: 1200000 },
  { proyecto: "Centro Comercial Nova", cliente: "Grupo Meridiano", tipo: "Exterior", entregado: false, fechaEntrega: new Date("2026-08-01"), costo: 4500000 },
  { proyecto: "Casa Campestre Roble", cliente: "Familia Escobar", tipo: "Exterior", entregado: true, fechaEntrega: new Date("2026-03-15"), costo: 1500000 },
  { proyecto: "Remodelacion Cocina", cliente: "Familia Escobar", tipo: "Interior", entregado: false, fechaEntrega: new Date("2026-07-25"), costo: 800000 }
])
