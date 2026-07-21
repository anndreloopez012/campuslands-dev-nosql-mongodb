// Seleccionar la base de datos
use('campus_heroes_moba');

// 1.Obtener todos los héroes con rol "Mago"
// Retorna héroes cuyo array 'roles' contenga "Mago"
db.heroes.find(
  { roles: "Mago" },
  { nombre: 1, roles: 1, dano_tipo: 1, _id: 0 }
);

// 2. Consulta con filtro en campos anidados (vida_base > 600)
// Muestra solo el nombre, título y vida base sin mostrar el _id
db.heroes.find(
  { "estadisticas.vida_base": { $gt: 600 } },
  { nombre: 1, titulo: 1, "estadisticas.vida_base": 1, _id: 0 }
);

// 3.Héroes disponibles con costo en oro menor a 9000
db.heroes.find(
  { disponible: true, precio_oro: { $lt: 9000 } },
  { nombre: 1, precio_oro: 1, disponible: 1, _id: 0 }
);

// 4.Habilita la disponibilidad de "Lyra" y reduce su costo
db.heroes.updateOne(
  { nombre: "Lyra" },
  {
    $set: { disponible: true },
    $inc: { precio_oro: -500 }
  }
);

// 5. Consulta de verificación despues de la actualización
db.heroes.find(
  { nombre: "Lyra" },
  { nombre: 1, disponible: 1, precio_oro: 1, _id: 0 }
);