use('campus_skins_battle_royale');

// 1. Consulta simple: Listar skins actualmente disponibles en la tienda
// Mostrar: Solo nombre, precio y rareza (omite _id)
db.skins.find(
  { disponible_tienda: true },
  { nombre: 1, precio_vbucks: 1, "rarity.nombre": 1, _id: 0 }
);

// 2. Buscar skins con la etiqueta "pase-de-batalla"
db.skins.find(
  { tags: "pase-de-batalla" },
  { nombre: 1, temporada_lanzamiento: 1, tags: 1 }
);

// 3. Buscar Skins que cuestan 2000 V-Bucks o más
db.skins.find(
  { precio_vbucks: { $gte: 2000 } },
  { nombre: 1, precio_vbucks: 1 }
);

// 4. Actualizar: Marcar "Raven" como fuera de la tienda y sumar sus ventas
db.skins.updateOne(
  { nombre: "Raven" },
  {
    $set: { disponible_tienda: false },
    $inc: { ventas_totales: 1 }
  }
);

// 5. Reporte Básico: Promedio de precio según la rareza
db.skins.aggregate([
  {
    $group: {
      _id: "$rarity.nombre",
      promedio_precio: { $avg: "$precio_vbucks" },
      total_skins: { $sum: 1 }
    }
  },
  { $sort: { promedio_precio: -1 } }
]);