// 27. Usuarios streaming (peliculas y musica)
// Solucion - jeshua-perez (nivel basico)
// Enfoque: documentos de usuario

use campus_usuarios_streaming

db.usuarios.drop()

db.createCollection("usuarios")

db.usuarios.insertMany([
  { nombre: "Yesica Roman", email: "yesica.roman@correo.com", plan: "Premium", generosFavoritos: ["terror", "electronica"], activo: true },
  { nombre: "Brayan Ortiz", email: "brayan.ortiz@correo.com", plan: "Basico", generosFavoritos: ["accion", "rock"], activo: true },
  { nombre: "Gina Paredes", email: "gina.paredes@correo.com", plan: "Premium", generosFavoritos: ["ciencia ficcion", "pop"], activo: false },
  { nombre: "Oscar Villamil", email: "oscar.villamil@correo.com", plan: "Familiar", generosFavoritos: ["comedia", "salsa"], activo: true },
  { nombre: "Carolina Estupinan", email: "carolina.estupinan@correo.com", plan: "Basico", generosFavoritos: ["drama"], activo: false },
  { nombre: "Felipe Angulo", email: "felipe.angulo@correo.com", plan: "Premium", generosFavoritos: ["terror", "rock"], activo: true }
])
