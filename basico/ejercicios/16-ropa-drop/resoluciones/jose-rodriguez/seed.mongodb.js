// Base de Datos de Ropa y Moda - Script de Poblado (Seed)
use('tienda_ropa_db');

// Limpieza de colecciones previas
db.categorias.drop();
db.marcas.drop();
db.productos.drop();

// 1. Inserción de Categorías (Colección: categorias)
db.categorias.insertMany([
  {
    _id: "CAT-001",
    nombre: "Camisetas y Tops",
    departamento: "General",
    activa: true
  },
  {
    _id: "CAT-002",
    nombre: "Pantalones y Jeans",
    departamento: "General",
    activa: true
  },
  {
    _id: "CAT-003",
    nombre: "Chaquetas y Abrigos",
    departamento: "Invierno",
    activa: true
  }
]);

// 2. Inserción de Marcas (Colección: marcas)
db.marcas.insertMany([
  {
    _id: "MAR-001",
    nombre: "UrbanThread",
    paisOrigen: "España",
    estilo: "Streetwear / Casual"
  },
  {
    _id: "MAR-002",
    nombre: "AeroSport",
    paisOrigen: "Estados Unidos",
    estilo: "Deportivo / Rendimiento"
  },
  {
    _id: "MAR-003",
    nombre: "DenimCraft",
    paisOrigen: "México",
    estilo: "Clásico / Casual"
  }
]);

// 3. Inserción de Productos de Ropa (Colección: productos)
// Modelado: Dualidad de arrays -> 'tallasDisponibles' (Array simple para búsquedas veloces)
// e 'inventarioPorTalla' (Array de subdocumentos para gestión granular de stock por SKU).
db.productos.insertMany([
  {
    _id: "PROD-001",
    nombre: "Camiseta Oversize Algodón Orgánico",
    marcaId: "MAR-001",
    categoriaId: "CAT-001",
    precioQ: 175.00,
    colores: ["Negro", "Blanco", "Gris Jaspe"],
    tallasDisponibles: ["S", "M", "L", "XL"],
    inventarioPorTalla: [
      { talla: "S", stock: 8, sku: "TSH-OVR-S" },
      { talla: "M", stock: 15, sku: "TSH-OVR-M" },
      { talla: "L", stock: 20, sku: "TSH-OVR-L" },
      { talla: "XL", stock: 4, sku: "TSH-OVR-XL" }
    ],
    detallesMaterial: {
      composicion: "100% Algodón Orgánico",
      gramajeGsm: 220,
      instruccionesLavado: "Lavar con agua fría, no usar secadora"
    },
    genero: "Unisex"
  },
  {
    _id: "PROD-002",
    nombre: "Pantalón Jean Slim Fit Stretch",
    marcaId: "MAR-003",
    categoriaId: "CAT-002",
    precioQ: 350.00,
    colores: ["Azul Indigo", "Negro"],
    tallasDisponibles: ["28", "30", "32", "34", "36"],
    inventarioPorTalla: [
      { talla: "28", stock: 0, sku: "JNN-SLM-28" },
      { talla: "30", stock: 10, sku: "JNN-SLM-30" },
      { talla: "32", stock: 12, sku: "JNN-SLM-32" },
      { talla: "34", stock: 5, sku: "JNN-SLM-34" },
      { talla: "36", stock: 2, sku: "JNN-SLM-36" }
    ],
    detallesMaterial: {
      composicion: "98% Algodón, 2% Elastano",
      gramajeGsm: 340,
      instruccionesLavado: "Lavar al revés con colores similares"
    },
    genero: "Masculino"
  },
  {
    _id: "PROD-003",
    nombre: "Chaqueta Cortavientos Impermeable",
    marcaId: "MAR-002",
    categoriaId: "CAT-003",
    precioQ: 490.00,
    colores: ["Verde Olivo", "Negro"],
    tallasDisponibles: ["XS", "S", "M"],
    inventarioPorTalla: [
      { talla: "XS", stock: 3, sku: "JKT-WND-XS" },
      { talla: "S", stock: 7, sku: "JKT-WND-S" },
      { talla: "M", stock: 0, sku: "JKT-WND-M" }
    ],
    detallesMaterial: {
      composicion: "100% Poliéster Reciclado",
      gramajeGsm: 150,
      instruccionesLavado: "Lavar a mano, no planchar"
    },
    genero: "Femenino"
  },
  {
    _id: "PROD-004",
    nombre: "Top Deportivo High Impact",
    marcaId: "MAR-002",
    categoriaId: "CAT-001",
    precioQ: 210.00,
    colores: ["Rosado Neón", "Negro", "Azul Marino"],
    tallasDisponibles: ["XS", "S", "M", "L"],
    inventarioPorTalla: [
      { talla: "XS", stock: 5, sku: "TOP-SPT-XS" },
      { talla: "S", stock: 14, sku: "TOP-SPT-S" },
      { talla: "M", stock: 18, sku: "TOP-SPT-M" },
      { talla: "L", stock: 0, sku: "TOP-SPT-L" }
    ],
    detallesMaterial: {
      composicion: "85% Nylon, 15% Spandex",
      gramajeGsm: 280,
      instruccionesLavado: "Secado rápido, no usar suavizante"
    },
    genero: "Femenino"
  }
]);
