// Inventario de perfiles gamer
//  creacion de la base de datos y seleccion de la misma
use ("campus_colecciones_gamers");

// creacion de la coleccion registros
db.createCollection("registros")

// insercion de documentos en la coleccion registros
db.registros.insertMany([
  {
    "nombre": "Operación Tormenta",
    "categoria": "competitivo",
    "activo": true,
    "puntaje": 4500,
    "etiquetas": ["multijugador", "ranked", "victoria"]
  },
  {
    "nombre": "Entrenamiento de Tiro",
    "categoria": "practica",
    "activo": false,
    "puntaje": 85,
    "etiquetas": ["tutorial", "sniper", "headshots"]
  },
  {
    "nombre": "Supervivencia Zombi",
    "categoria": "cooperativo",
    "activo": true,
    "puntaje": 12400,
    "etiquetas": ["horda", "pve", "escopeta"]
  },
  {
    "nombre": "Deathmatch FFA",
    "categoria": "casual",
    "activo": false,
    "puntaje": 2100,
    "etiquetas": ["todos_contra_todos", "rusher", "smg"]
  },
  {
    "nombre": "Captura la Bandera",
    "categoria": "competitivo",
    "activo": true,
    "puntaje": 3800,
    "etiquetas": ["equipo", "tactico", "defensa"]
  },
  {
    "nombre": "Misión Sigilo",
    "categoria": "campaña",
    "activo": true,
    "puntaje": 950,
    "etiquetas": ["solo", "silenciador", "cuchillo"]
  },
  {
    "nombre": "Battle Royale - Solos",
    "categoria": "supervivencia",
    "activo": false,
    "puntaje": 8500,
    "etiquetas": ["zona_segura", "loot", "top10"]
  },
  {
    "nombre": "Calentamiento Aim",
    "categoria": "practica",
    "activo": true,
    "puntaje": 92,
    "etiquetas": ["aimlab", "reflejos", "pistola"]
  },
  {
    "nombre": "Asalto al Bunker",
    "categoria": "cooperativo",
    "activo": false,
    "puntaje": 6700,
    "etiquetas": ["asalto", "explosivos", "derrota"]
  },
  {
    "nombre": "Duelo por Equipos",
    "categoria": "casual",
    "activo": true,
    "puntaje": 5100,
    "etiquetas": ["pvp", "frags", "asistencias"]
  }
])


