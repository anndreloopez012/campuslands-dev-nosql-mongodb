// 08. Ranking de pilotos
// Solucion - jeshua-perez (nivel basico)
// Enfoque: sort y limit

use campus_carreras_pilotos

db.pilotos.drop()

db.createCollection("pilotos")

db.pilotos.insertMany([
  { nombre: "Mateo Cardenas", escuderia: "Halcon Racing", puntos: 285, victorias: 6, podios: 12 },
  { nombre: "Nicolas Prada", escuderia: "Fenix Motorsport", puntos: 310, victorias: 8, podios: 14 },
  { nombre: "Sara Beltran", escuderia: "Halcon Racing", puntos: 190, victorias: 2, podios: 7 },
  { nombre: "Emilio Rangel", escuderia: "Titanio GP", puntos: 245, victorias: 4, podios: 10 },
  { nombre: "Valeria Nunez", escuderia: "Fenix Motorsport", puntos: 265, victorias: 5, podios: 11 },
  { nombre: "Camilo Osorio", escuderia: "Titanio GP", puntos: 150, victorias: 1, podios: 4 }
])
