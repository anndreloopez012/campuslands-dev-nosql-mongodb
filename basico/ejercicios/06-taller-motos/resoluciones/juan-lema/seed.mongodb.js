// Ejercicio 06 - Ordenes de taller de motos
use campus_taller_motos

db.ordenes.insertMany([
  {
    cliente: { nombre: "Hector Ramos", telefono: "5544-1122" },
    moto: { marca: "Yamaha", modelo: "FZ 2.0", placa: "P123ABC", anio: 2021 },
    servicios: ["cambio de aceite", "revision de frenos"],
    estado: "finalizada",
    costo: 350,
    fechaIngreso: new Date("2026-07-01"),
    prioridad: "media"
  },
  {
    cliente: { nombre: "Lucia Fernandez", telefono: "5566-3344" },
    moto: { marca: "Honda", modelo: "CB 190R", placa: "P456DEF", anio: 2020 },
    servicios: ["ajuste de cadena", "cambio de llantas"],
    estado: "en_proceso",
    costo: 780,
    fechaIngreso: new Date("2026-07-03"),
    prioridad: "alta"
  },
  {
    cliente: { nombre: "Marco Antonio Sic", telefono: "5588-7766" },
    moto: { marca: "Suzuki", modelo: "GN 125", placa: "P789GHI", anio: 2018 },
    servicios: ["afinacion general"],
    estado: "pendiente",
    costo: 420,
    fechaIngreso: new Date("2026-07-05"),
    prioridad: "baja"
  },
  {
    cliente: { nombre: "Andrea Solis", telefono: "5511-9900" },
    moto: { marca: "Bajaj", modelo: "Pulsar NS200", placa: "P321JKL", anio: 2022 },
    servicios: ["cambio de pastillas de freno", "revision electrica"],
    estado: "pendiente",
    costo: 610,
    fechaIngreso: new Date("2026-07-06"),
    prioridad: "alta"
  },
  {
    cliente: { nombre: "Diego Morales", telefono: "5599-4433" },
    moto: { marca: "Kawasaki", modelo: "Ninja 400", placa: "P654MNO", anio: 2023 },
    servicios: ["cambio de aceite", "cambio de bujias"],
    estado: "finalizada",
    costo: 500,
    fechaIngreso: new Date("2026-07-08"),
    prioridad: "media"
  },
  {
    cliente: { nombre: "Paola Guerra", telefono: "5522-8811" },
    moto: { marca: "Yamaha", modelo: "XTZ 125", placa: "P987PQR", anio: 2019 },
    servicios: ["reparacion de suspension"],
    estado: "en_proceso",
    costo: 890,
    fechaIngreso: new Date("2026-07-09"),
    prioridad: "alta"
  }
])
