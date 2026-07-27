// Base de Datos de Concesionaria Automotriz - Script de Poblado (Seed)
use('automotriz_stock_db');

// Limpieza de colecciones previas
db.sucursales.drop();
db.vehiculos.drop();

// 1. Inserción de Sucursales / Salas de Ventas (Colección: sucursales)
db.sucursales.insertMany([
  {
    _id: "SUC-001",
    nombre: "Sucursal Central - Zona 10",
    ciudad: "Guatemala",
    telefono: "+502 2222-0101",
    activa: true
  },
  {
    _id: "SUC-002",
    nombre: "Sucursal Roosevelt - Agencia Principal",
    ciudad: "Mixco",
    telefono: "+502 2222-0202",
    activa: true
  },
  {
    _id: "SUC-003",
    nombre: "Sucursal Quetzaltenango",
    ciudad: "Quetzaltenango",
    telefono: "+502 7777-0303",
    activa: true
  }
]);

// 2. Inserción de Vehículos (Autos y Motos) con Gestión de Stock y Alertas (Colección: vehiculos)
// Modelado: Campo 'tipoVehiculo', Subdocumento 'stockGeneral' con nivel de alerta,
// Array de Subdocumentos 'stockPorSucursal' y Array 'equipamiento'.
db.vehiculos.insertMany([
  {
    _id: "VEH-001",
    vin: "1HGCR2F83HA000101",
    tipoVehiculo: "AUTO", // AUTO, MOTO
    marca: "Toyota",
    modelo: "Hilux Doble Cabina 4x4",
    anio: 2026,
    categoria: "Pick-up",
    precioUSD: 38500.00,
    especificaciones: {
      motorCC: 2800,
      combustible: "Diésel",
      transmision: "Manual 6 Vel"
    },
    stockGeneral: {
      actual: 3,
      minimoAlerta: 8,
      nivelAlerta: "CRITICO" // NORMAL, STOCK_BAJO, CRITICO
    },
    stockPorSucursal: [
      { sucursalId: "SUC-001", sucursalNombre: "Sucursal Central - Zona 10", cantidad: 1 },
      { sucursalId: "SUC-002", sucursalNombre: "Sucursal Roosevelt - Agencia Principal", cantidad: 2 },
      { sucursalId: "SUC-003", sucursalNombre: "Sucursal Quetzaltenango", cantidad: 0 }
    ],
    equipamiento: ["4x4", "Pantalla Táctil", "Camara Reversa", "Frenos ABS"],
    fechaUltimoIngreso: ISODate("2026-06-01T00:00:00Z")
  },
  {
    _id: "VEH-002",
    vin: "3FA6P08U7HR000202",
    tipoVehiculo: "AUTO",
    marca: "Mazda",
    modelo: "CX-5 Grand Touring",
    anio: 2026,
    categoria: "SUV",
    precioUSD: 32900.00,
    especificaciones: {
      motorCC: 2500,
      combustible: "Gasolina",
      transmision: "Automática Skyactiv"
    },
    stockGeneral: {
      actual: 6,
      minimoAlerta: 10,
      nivelAlerta: "STOCK_BAJO"
    },
    stockPorSucursal: [
      { sucursalId: "SUC-001", sucursalNombre: "Sucursal Central - Zona 10", cantidad: 3 },
      { sucursalId: "SUC-002", sucursalNombre: "Sucursal Roosevelt - Agencia Principal", cantidad: 2 },
      { sucursalId: "SUC-003", sucursalNombre: "Sucursal Quetzaltenango", cantidad: 1 }
    ],
    equipamiento: ["Cuero", "Sunroof", "Apple CarPlay", "Frenado Autónomo"],
    fechaUltimoIngreso: ISODate("2026-06-15T00:00:00Z")
  },
  {
    _id: "VEH-003",
    vin: "JH2PC4008HK000303",
    tipoVehiculo: "MOTO",
    marca: "Honda",
    modelo: "CBR600RR",
    anio: 2026,
    categoria: "Super Sport",
    precioUSD: 13800.00,
    especificaciones: {
      motorCC: 599,
      combustible: "Gasolina Premium",
      transmision: "Manual 6 Vel con Quickshifter"
    },
    stockGeneral: {
      actual: 2,
      minimoAlerta: 5,
      nivelAlerta: "CRITICO"
    },
    stockPorSucursal: [
      { sucursalId: "SUC-001", sucursalNombre: "Sucursal Central - Zona 10", cantidad: 1 },
      { sucursalId: "SUC-002", sucursalNombre: "Sucursal Roosevelt - Agencia Principal", cantidad: 1 },
      { sucursalId: "SUC-003", sucursalNombre: "Sucursal Quetzaltenango", cantidad: 0 }
    ],
    equipamiento: ["Control de Tracción", "Modos de Manejo", "Frenos Brembo", "Escape Akrapovic"],
    fechaUltimoIngreso: ISODate("2026-05-20T00:00:00Z")
  },
  {
    _id: "VEH-004",
    vin: "JYARN43E8HA000404",
    tipoVehiculo: "MOTO",
    marca: "Yamaha",
    modelo: "MT-07 ABS",
    anio: 2026,
    categoria: "Naked",
    precioUSD: 9200.00,
    especificaciones: {
      motorCC: 689,
      combustible: "Gasolina",
      transmision: "Manual 6 Vel"
    },
    stockGeneral: {
      actual: 15,
      minimoAlerta: 6,
      nivelAlerta: "NORMAL"
    },
    stockPorSucursal: [
      { sucursalId: "SUC-001", sucursalNombre: "Sucursal Central - Zona 10", cantidad: 6 },
      { sucursalId: "SUC-002", sucursalNombre: "Sucursal Roosevelt - Agencia Principal", cantidad: 5 },
      { sucursalId: "SUC-003", sucursalNombre: "Sucursal Quetzaltenango", cantidad: 4 }
    ],
    equipamiento: ["Frenos ABS", "Pantalla TFT", "Iluminación LED"],
    fechaUltimoIngreso: ISODate("2026-07-01T00:00:00Z")
  },
  {
    _id: "VEH-005",
    vin: "WBA8E1C55HK000505",
    tipoVehiculo: "AUTO",
    marca: "BMW",
    modelo: "320i M Sport",
    anio: 2026,
    categoria: "Sedán Premium",
    precioUSD: 52000.00,
    especificaciones: {
      motorCC: 2000,
      combustible: "Gasolina Turbo",
      transmision: "Automática 8 Vel Steptronic"
    },
    stockGeneral: {
      actual: 12,
      minimoAlerta: 4,
      nivelAlerta: "NORMAL"
    },
    stockPorSucursal: [
      { sucursalId: "SUC-001", sucursalNombre: "Sucursal Central - Zona 10", cantidad: 7 },
      { sucursalId: "SUC-002", sucursalNombre: "Sucursal Roosevelt - Agencia Principal", cantidad: 5 },
      { sucursalId: "SUC-003", sucursalNombre: "Sucursal Quetzaltenango", cantidad: 0 }
    ],
    equipamiento: ["Paquete M Sport", "Asientos Eléctricos", "Asistente de Parqueo", "Head-Up Display"],
    fechaUltimoIngreso: ISODate("2026-07-10T00:00:00Z")
  }
]);
