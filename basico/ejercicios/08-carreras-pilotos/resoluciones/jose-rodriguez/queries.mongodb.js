// asegurar el uso de la base de datos correcta
use('campus_carreras_pilotos')

// ---- OPERADORES DE CONSULTA CON FILTROS NUMERICOS (READ) ---

// Consulta 1: Filtro por premios que no se han corrido

db.race.find({ "status": "Scheduled" })

// Consulta 2: buscar que carreras se corren en pitas complejas que tengan un numero de curvas igual o superior a 18 vueltas

db.race.find({ "turns": { $gte: 18 }})

// consulta 3: Victorias de un piloto especifico 

db.race.find({ "position": 1, "driver_id": "driver_verstappen_01" })

// Consulta 4: Exito en el podrio por escuderia

db.race.find({ "team_id": "team_mclaren", "position": 1 })

// Consulta 5: Orden cronologico de la temporada

db.race.find(
  {}, 
  { grand_prix: 1, date: 1, _id: 0 } 
).sort({ date: 1 }); 