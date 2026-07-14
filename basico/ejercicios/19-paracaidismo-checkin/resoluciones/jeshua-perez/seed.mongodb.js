// 19. Check-in de paracaidismo
// Solucion - jeshua-perez (nivel basico)
// Enfoque: validaciones manuales

use campus_paracaidismo_checkin

db.saltos.drop()

db.createCollection("saltos")

db.saltos.insertMany([
  { alumno: "Felipe Aranda", instructor: "Marcela Ibarra", pesoKg: 78, certificadoMedico: true, fechaSalto: new Date("2026-06-10"), apto: true },
  { alumno: "Karen Solano", instructor: "Marcela Ibarra", pesoKg: 95, certificadoMedico: true, fechaSalto: new Date("2026-06-10"), apto: false },
  { alumno: "Hugo Restrepo", instructor: "Daniel Cepeda", pesoKg: 68, certificadoMedico: false, fechaSalto: new Date("2026-06-11"), apto: false },
  { alumno: "Ximena Barrera", instructor: "Daniel Cepeda", pesoKg: 60, certificadoMedico: true, fechaSalto: new Date("2026-06-11"), apto: true },
  { alumno: "Ronald Chaves", instructor: "Marcela Ibarra", pesoKg: 110, certificadoMedico: true, fechaSalto: new Date("2026-06-12"), apto: false },
  { alumno: "Isabel Marin", instructor: "Daniel Cepeda", pesoKg: 55, certificadoMedico: true, fechaSalto: new Date("2026-06-12"), apto: true }
])
