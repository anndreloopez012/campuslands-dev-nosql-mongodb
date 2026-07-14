// 09. Ranking kickboxing
// Solucion - jeshua-perez (nivel basico)
// Enfoque: operadores logicos

use campus_kickboxing_ranking

db.peleadores.drop()

db.createCollection("peleadores")

db.peleadores.insertMany([
  { nombre: "Brayan Cifuentes", categoria: "Peso Pluma", victorias: 14, derrotas: 2, nocauts: 9, activo: true },
  { nombre: "Natalia Rios", categoria: "Peso Welter", victorias: 10, derrotas: 4, nocauts: 5, activo: true },
  { nombre: "Sergio Aponte", categoria: "Peso Pesado", victorias: 8, derrotas: 6, nocauts: 6, activo: false },
  { nombre: "Manuela Castro", categoria: "Peso Pluma", victorias: 6, derrotas: 5, nocauts: 2, activo: true },
  { nombre: "Diego Salcedo", categoria: "Peso Welter", victorias: 12, derrotas: 1, nocauts: 8, activo: true },
  { nombre: "Wilson Higuera", categoria: "Peso Pesado", victorias: 3, derrotas: 9, nocauts: 1, activo: false }
])
