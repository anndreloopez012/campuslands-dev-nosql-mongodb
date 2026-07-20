db.dealerships.insertMany(dealerships);

// 1. Insertar Colección Principal con Datos Sintéticos Realistas
db.cars.insertMany([
  {
    brand: "Bugatti",
    model: "Chiron Super Sport",
    year: 2023,
    status: "Available",
    dealership_id: ObjectId("660d1a2b9f1b2c3d4e5f6002"),
    price: {
      base_price: 3825000,
      currency: "USD",
      taxes_estimated: 450000
    },
    specs: {
      engine: "8.0L W16 Quad-Turbocharged",
      transmission: "7-speed Dual-Clutch",
      weight_kg: 1978
    },
    performance: {
      horsepower: 1578,
      top_speed_kmh: 440,
      zero_to_hundred_secs: 2.2
    },
    customizations: [
      { type: "Exterior Paint", name: "Nocturne Black / Bleu Intense", cost: 75000 },
      { type: "Interior", name: "Tangerine Full Leather", cost: 42000 },
      { type: "Wheels", name: "Pur Sport Magnesium", cost: 60000 }
    ]
  },
  {
    brand: "Ferrari",
    model: "SF90 Stradale",
    year: 2024,
    status: "Available",
    dealership_id: ObjectId("660d1a2b9f1b2c3d4e5f6001"),
    price: {
      base_price: 524000,
      currency: "USD",
      taxes_estimated: 55000
    },
    specs: {
      engine: "4.0L V8 Plug-in Hybrid",
      transmission: "8-speed Dual-Clutch",
      weight_kg: 1570
    },
    performance: {
      horsepower: 986,
      top_speed_kmh: 340,
      zero_to_hundred_secs: 2.5
    },
    customizations: [
      { type: "Exterior Paint", name: "Rosso Corsa", cost: 12000 },
      { type: "Carbon Fiber Package", name: "Full Racing Kit", cost: 56000 }
    ]
  },
  {
    brand: "Porsche",
    model: "911 GT3 RS",
    year: 2023,
    status: "Reserved",
    dealership_id: ObjectId("660d1a2b9f1b2c3d4e5f6001"),
    price: {
      base_price: 223800,
      currency: "USD",
      taxes_estimated: 22000
    },
    specs: {
      engine: "4.0L Flat-6 Naturally Aspirated",
      transmission: "7-speed PDK",
      weight_kg: 1450
    },
    performance: {
      horsepower: 518,
      top_speed_kmh: 296,
      zero_to_hundred_secs: 3.2
    },
    customizations: [
      { type: "Paint to Sample", name: "Signal Green", cost: 15000 },
      { type: "Brakes", name: "Porsche Ceramic Composite (PCCB)", cost: 10000 },
      { type: "Package", name: "Weissach Package", cost: 33000 }
    ]
  },
  {
    brand: "Koenigsegg",
    model: "Jesko Absolut",
    year: 2024,
    status: "Available",
    dealership_id: ObjectId("660d1a2b9f1b2c3d4e5f6002"),
    price: {
      base_price: 3000000,
      currency: "USD",
      taxes_estimated: 350000
    },
    specs: {
      engine: "5.0L V8 Twin-Turbo",
      transmission: "9-speed Multi-Clutch",
      weight_kg: 1390
    },
    performance: {
      horsepower: 1600,
      top_speed_kmh: 531,
      zero_to_hundred_secs: 2.5
    },
    customizations: [
      { type: "Body", name: "Clear Carbon Fiber Body", cost: 120000 }
    ]
  },
  {
    brand: "Aston Martin",
    model: "Valkyrie",
    year: 2023,
    status: "Sold",
    dealership_id: ObjectId("660d1a2b9f1b2c3d4e5f6002"),
    price: {
      base_price: 3500000,
      currency: "USD",
      taxes_estimated: 400000
    },
    specs: {
      engine: "6.5L V12 Cosworth",
      transmission: "7-speed Single-Clutch Automated Manual",
      weight_kg: 1030
    },
    performance: {
      horsepower: 1139,
      top_speed_kmh: 350,
      zero_to_hundred_secs: 2.6
    },
    customizations: [
      { type: "Interior", name: "Alcantara Ultra-lightweight", cost: 25000 }
    ]
  }
]);
