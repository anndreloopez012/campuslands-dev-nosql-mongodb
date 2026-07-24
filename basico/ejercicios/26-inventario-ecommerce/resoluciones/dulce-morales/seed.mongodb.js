use(campus_inventario_ecommerce);


db.productos.insertMany([
  {
    nombre: "Kit de Frenos Deportivos Brembo",
    categoria: "frenos",
    vehiculo_aplicacion: "auto",
    precio: 450000,
    stock: 12,
    stock_minimo: 5,
    activo: true,
    detalles_tecnicos: {
      material: "Cerámica",
      posificacion: "Delantero",
      garantia_meses: 12
    },
    etiquetas: ["frenos", "seguridad", "auto", "deportivo"]
  },
  {
    nombre: "Escape de Alto Rendimiento Akrapovic",
    categoria: "escape",
    vehiculo_aplicacion: "moto",
    precio: 850000,
    stock: 3,
    stock_minimo: 4,
    activo: true,
    detalles_tecnicos: {
      material: "Fibra de Carbono",
      compatibilidad: "Cilindraje > 600cc",
      garantia_meses: 24
    },
    etiquetas: ["escape", "moto", "potencia", "carbono"]
  },
  {
    nombre: "Amortiguador Regulable Ohlins",
    categoria: "suspension",
    vehiculo_aplicacion: "moto",
    precio: 1200000,
    stock: 8,
    stock_minimo: 3,
    activo: true,
    detalles_tecnicos: {
      material: "Aleación de Aluminio",
      tipo: "Gas/Aceite",
      garantia_meses: 18
    },
    etiquetas: ["suspension", "moto", "comodidad"]
  },
  {
    nombre: "Filtro de Aire Alto Flujo K&N",
    categoria: "motor",
    vehiculo_aplicacion: "auto",
    precio: 180000,
    stock: 25,
    stock_minimo: 10,
    activo: true,
    detalles_tecnicos: {
      material: "Algodón lavable",
      reutilizable: true,
      garantia_meses: 60
    },
    etiquetas: ["motor", "filtro", "auto", "rendimiento"]
  },
  {
    nombre: "Kit de Cadena y Sprockets DID",
    categoria: "transmision",
    vehiculo_aplicacion: "moto",
    precio: 320000,
    stock: 2,
    stock_minimo: 5,
    activo: true,
    detalles_tecnicos: {
      material: "Acero reforzado",
      paso: "520",
      garantia_meses: 6
    },
    etiquetas: ["transmision", "moto", "cadena"]
  }
]);