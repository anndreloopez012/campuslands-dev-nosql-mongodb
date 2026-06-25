// 1. Crear y seleccionar la base de datos del garaje de lujo
use('campus_garaje_lujo');

// 2. Insertar 5 documentos coherentes y realistas con datos numerocos de precision

db.autos.insertMany([
  {
    marca: "Ferrari",
    modelo: "SF90 Stradale",
    anio: 2023,
    precio_usd: 520000,
    disponible_venta: true,
    caracteristicas_premium: ["Frenos cerámicos", "Tracción integral", "Modo híbrido"],
    rendimiento: { caballos_fuerza: 986, velocidad_maxima_kmh: 340, aceleracion_0_100: 2.5 }
  },
  {
    marca: "Porsche",
    modelo: "911 GT3 RS",
    anio: 2024,
    precio_usd: 275000,
    disponible_venta: true,
    caracteristicas_premium: ["Alerón activo", "Jaula antivuelco", "Paquete Weissach"],
    rendimiento: { caballos_fuerza: 518, velocidad_maxima_kmh: 296, aceleracion_0_100: 3.2 }
  },
  {
    marca: "Lamborghini",
    modelo: "Revuelto",
    anio: 2024,
    precio_usd: 608000,
    disponible_venta: false,
    caracteristicas_premium: ["Chasis de carbono", "Interior Alcántara", "Escape deportivo"],
    rendimiento: { caballos_fuerza: 1001, velocidad_maxima_kmh: 350, aceleracion_0_100: 2.5 }
  },
  {
    marca: "McLaren",
    modelo: "750S",
    anio: 2023,
    precio_usd: 324000,
    disponible_venta: true,
    caracteristicas_premium: ["Audio Bowers & Wilkins", "Suspensión proactiva"],
    rendimiento: { caballos_fuerza: 740, velocidad_maxima_kmh: 332, aceleracion_0_100: 2.8 }
  },
  {
    marca: "Bugatti",
    modelo: "Chiron Super Sport",
    anio: 2022,
    precio_usd: 3820000,
    disponible_venta: true,
    caracteristicas_premium: ["Llave de velocidad máxima", "Escape de titanio", "Cuerpo expuesto de carbono"],
    rendimiento: { caballos_fuerza: 1578, velocidad_maxima_kmh: 440, aceleracion_0_100: 2.2 }
  }
]);