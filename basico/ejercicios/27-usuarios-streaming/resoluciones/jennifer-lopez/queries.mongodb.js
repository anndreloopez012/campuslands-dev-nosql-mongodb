// Usuarios streaming - Consultas y Operaciones
// Solución de Denise López - Ejercicio 27

use campus_usuarios_streaming

// 1. Consulta general requerida por la plantilla base
db.usuarios.find({})

// 2. Consulta de usuarios activos con plan Familiar Premium
db.usuarios.find(
  { "membresia.estado": "Activo", "membresia.tipo_plan": "Familiar Premium" },
  { codigo_usuario: 1, nombre_completo: 1, email: 1, "membresia.precio_gtq": 1, _id: 0 }
)

// 3. Consulta de usuarios que tengan "Anime" o "Soundtracks" dentro de sus géneros favoritos
db.usuarios.find(
  { "preferencias.generos_favoritos": { $in: ["Anime", "Soundtracks"] } },
  { nombre_completo: 1, "preferencias.generos_favoritos": 1, _id: 0 }
)

// 4. Reporte simple: Listar usuarios con subtítulos activos y su idioma preferido
db.usuarios.find(
  { "preferencias.subtitulos_activos": true },
  { nombre_completo: 1, "preferencias.idioma_audio": 1, "membresia.tipo_plan": 1, _id: 0 }
)

// 5. Operación de actualización (Update): Renovar suscripción pendiente de Balthazar y agregar un nuevo género
db.usuarios.updateOne(
  { codigo_usuario: "USR-STR-003" },
  {
    $set: { "membresia.estado": "Activo" },
    $push: { "preferencias.generos_favoritos": "Películas de Acción" }
  }
)

// 6. Inserción de un nuevo usuario con plan Estudiante registrado en Guatemala
db.usuarios.insertOne({
  codigo_usuario: "USR-STR-006",
  nombre_completo: "Xanthos Escandón",
  email: "xanthos.e@semuc.gt",
  pais: "Guatemala",
  membresia: {
    tipo_plan: "Estudiante",
    precio_gtq: 35.00,
    estado: "Activo",
    dispositivos_permitidos: 1
  },
  preferencias: {
    generos_favoritos: ["Hip Hop", "Documentales de Tecnología"],
    idioma_audio: "Español Latino",
    subtitulos_activos: true
  },
  listas_favoritas: [
    { titulo: "Lo mejor del Trap y Rap Latino", tipo: "Música", total_elementos: 32 }
  ],
  fecha_registro: ISODate("2026-07-22T00:00:00Z")
})