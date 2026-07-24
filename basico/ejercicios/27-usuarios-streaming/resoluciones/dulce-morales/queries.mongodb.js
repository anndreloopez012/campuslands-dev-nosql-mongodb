// Seleccionar la base de datos de trabajo
use("campus_usuarios_streaming");

// Consulta 1: Usuarios activos con proyección limpia (sin _id)
db.usuarios.find(
  { activo: true },
  { nombre: 1, correo: 1, "suscripcion.plan": 1, _id: 0 }
);

// Consulta 2: Búsqueda de usuarios por género favorito en array ("pop")
db.usuarios.find(
  { generos_favoritos: "pop" },
  { nombre: 1, generos_favoritos: 1, horas_reproducidas_mes: 1, _id: 0 }
);

// Consulta 3: Actualización cambiar plan y sumar horas con $set y $inc
db.usuarios.updateOne(
  { correo: "valeria.gomez@email.com" },
  { 
    $set: { "suscripcion.plan": "Premium Familiar", "suscripcion.costo_mensual": 35000 },
    $inc: { horas_reproducidas_mes: 15 }
  }
);

// Verificación posterior de la actualización de Valeria Gómez
db.usuarios.find(
  { correo: "valeria.gomez@email.com" },
  { nombre: 1, suscripcion: 1, horas_reproducidas_mes: 1, _id: 0 }
);

// Consulta 4: Conteo total de usuarios con suscripción activa
db.usuarios.countDocuments({ activo: true });