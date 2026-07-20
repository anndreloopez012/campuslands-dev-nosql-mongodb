/* global use, db */
use('luxury_cars_db');


// CONSULTA 1: Filtros de Rango Numérico (Performance Extrema)

db.cars.find(
  {
    "performance.horsepower": { $gte: 1000 },
    "performance.top_speed_kmh": { $gt: 400 }
  },
  {
    brand: 1,
    model: 1,
    "performance.horsepower": 1,
    "performance.top_speed_kmh": 1,
    "price.base_price": 1,
    _id: 0
  }
);


// CONSULTA 2: Filtros en Objetos Embebidos y Rangos de Precio (Presupuesto Alto)
db.cars.find(
  {
    status: "Available",
    "performance.zero_to_hundred_secs": { $lte: 3.0 },
    "price.base_price": { $gte: 500000, $lte: 3500000 }
  },
  {
    brand: 1,
    model: 1,
    "performance.zero_to_hundred_secs": 1,
    "price.base_price": 1,
    status: 1
  }
).sort({ "price.base_price": -1 }); // Ordenar del más caro al más barato
        
// CONSULTA 3: Filtrando sobre Elementos de un Array (Customizaciones Exclusivas)
     
db.cars.find(
  {
    customizations: {
      $elemMatch: { cost: { $gte: 50000 } }
    }
  },
  {
    brand: 1,
    model: 1,
    "customizations.type": 1,
    "customizations.name": 1,
    "customizations.cost": 1
  }
);



// CONSULTA 4: Relación vía $lookup (Query de Negocio Completa)

db.cars.aggregate([
  {
    $match: {
      "performance.horsepower": { $gt: 900 }
    }
  },
  {
    $lookup: {
      from: "dealerships",
      localField: "dealership_id",
      foreignField: "_id",
      as: "dealership_info"
    }
  },
  {
    $unwind: "$dealership_info"
  },
  {
    $project: {
      _id: 0,
      brand: 1,
      model: 1,
      horsepower: "$performance.horsepower",
      price_usd: "$price.base_price",
      dealership_name: "$dealership_info.name",
      location: { 
        $concat: ["$dealership_info.city", ", ", "$dealership_info.country"] 
      }
    }
  }
]);