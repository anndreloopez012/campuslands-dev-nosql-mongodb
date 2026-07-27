/**
 * queries.mongo.js
 * Consultas ejecutadas con comandos nativos de MongoDB (db.collection.find).
 */

use('kickboxing_db');

// 1. Consulta con $and y $or nativos
// ¿Peleadores activos en 'Peso Pesado' O 'Peso Pluma' con más de 50 victorias?
db.peleadores.find({
  $and: [
    { "activo": true },
    { "record.victorias": { $gt: 50 } },
    {
      $or: [
        { "categoria_peso": "Peso Pesado" },
        { "categoria_peso": "Peso Pluma" }
      ]
    }
  ]
});

// 2. Consulta con $and y $not nativos
// Peleadores con más de 30 nocauts que NO sean de 'Países Bajos'
db.peleadores.find({
  $and: [
    { "record.nocauts": { $gt: 30 } },
    { "pais": { $not: { $eq: "Países Bajos" } } }
  ]
});

// 3. Consulta con $nor nativo
// Peleadores que NO estén inactivos y NO tengan menos de 10 derrotas
db.peleadores.find({
  $nor: [
    { "activo": false },
    { "record.derrotas": { $lt: 10 } }
  ]
});

// 4. Consulta combinada sobre Arrays nativos con $and y $or
// Peleadores activos que practiquen 'Muay Thai' O 'Kárate' y tengan títulos
db.peleadores.find({
  $and: [
    { "activo": true },
    { "titulos.0": { $exists: true } },
    {
      $or: [
        { "estilos": "Muay Thai" },
        { "estilos": "Kárate" }
      ]
    }
  ]
});