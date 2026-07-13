// Registro de partidas shooter
use campus_colecciones_gamers

db.createCollection("registros")

db.registros.insertMany([
    { "nombre": "Asalto Nocturno", "categoria": "competitivo", "activo": true, "puntaje": 3200, "armas": ["rifle", "granada"] },
    { "nombre": "Ronda de Practica", "categoria": "entrenamiento", "activo": true, "puntaje": 60, "armas": ["pistola"] },
    { "nombre": "Defensa del Punto", "categoria": "cooperativo", "activo": true, "puntaje": 7400, "armas": ["ametralladora", "escudo"] },
    { "nombre": "Free For All", "categoria": "casual", "activo": false, "puntaje": 1500, "armas": ["subfusil"] },
    { "nombre": "Extraccion VIP", "categoria": "competitivo", "activo": true, "puntaje": 5100, "armas": ["rifle", "cuchillo"] },
    { "nombre": "Historia: Capitulo 3", "categoria": "campaña", "activo": true, "puntaje": 800, "armas": ["escopeta"] },
    { "nombre": "Ultima Zona", "categoria": "supervivencia", "activo": false, "puntaje": 9200, "armas": ["francotirador", "pistola"] },
    { "nombre": "Practica de Puntería", "categoria": "entrenamiento", "activo": true, "puntaje": 110, "armas": ["pistola"] }
])