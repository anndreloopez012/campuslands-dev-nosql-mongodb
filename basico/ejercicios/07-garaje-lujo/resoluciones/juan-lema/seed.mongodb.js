// Garaje de autos de lujo - Seed (juan-lema)
use campus_garaje_lujo;

db.registros.drop(); // limpieza para reejecucion repetible

db.registros.insertMany([
  {
    marca: "Ferrari",
    modelo: "Roma",
    anio: 2023,
    precio: 247000,
    potencia_hp: 612,
    categoria: "deportivo",
    disponible: true,
    caracteristicas: ["V8 twin-turbo", "cambio 8 velocidades", "asientos cuero"]
  },
  {
    marca: "Rolls-Royce",
    modelo: "Ghost",
    anio: 2022,
    precio: 332000,
    potencia_hp: 563,
    categoria: "sedan",
    disponible: true,
    caracteristicas: ["suspension magica", "techo estrellado", "insonorizacion premium"]
  },
  {
    marca: "Lamborghini",
    modelo: "Urus",
    anio: 2024,
    precio: 229000,
    potencia_hp: 657,
    categoria: "suv",
    disponible: false,
    caracteristicas: ["4 ruedas motrices", "modo Corsa", "frenos ceramicos"]
  },
  {
    marca: "Porsche",
    modelo: "911 Turbo S",
    anio: 2021,
    precio: 216000,
    potencia_hp: 640,
    categoria: "deportivo",
    disponible: true,
    caracteristicas: ["traccion integral", "suspension activa", "0-100 en 2.7s"]
  },
  {
    marca: "Aston Martin",
    modelo: "DB5",
    anio: 1965,
    precio: 195000,
    potencia_hp: 282,
    categoria: "clasico",
    disponible: false,
    caracteristicas: ["carroceria original", "restaurado", "edicion coleccion"]
  }
]);

db.registros.find({});
