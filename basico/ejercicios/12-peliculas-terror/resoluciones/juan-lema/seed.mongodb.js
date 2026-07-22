// Ejercicio 12 - Catalogo de peliculas de miedo (juan-lema)
use campus_peliculas_terror

db.registros.drop();

db.registros.insertMany([
  {
    titulo: "El Sotano de Ceniza",
    anio: 2016,
    director: "Rosa Fontibon",
    genero: "posesion",
    etiquetas: ["posesion", "casa embrujada", "exorcismo"],
    rating: 7.4,
    duracion_min: 98,
    disponible: true,
    premios: [{ nombre: "Fantasfest Mejor Guion", anio: 2016 }]
  },
  {
    titulo: "Cinta de Vigilancia 7",
    anio: 2019,
    director: "Marco Uribe",
    genero: "found footage",
    etiquetas: ["found footage", "criatura", "bosque"],
    rating: 6.1,
    duracion_min: 84,
    disponible: true,
    premios: []
  },
  {
    titulo: "La Ultima Cosecha",
    anio: 2021,
    director: "Ines Padron",
    genero: "slasher",
    etiquetas: ["slasher", "pueblo", "culto"],
    rating: 8.2,
    duracion_min: 105,
    disponible: true,
    premios: [
      { nombre: "Sitges Mejor Direccion", anio: 2021 },
      { nombre: "Fantasfest Mejor Fotografia", anio: 2022 }
    ]
  },
  {
    titulo: "Susurros del Manicomio",
    anio: 2014,
    director: "Rosa Fontibon",
    genero: "posesion",
    etiquetas: ["posesion", "hospital abandonado", "psicologico"],
    rating: 5.8,
    duracion_min: 92,
    disponible: false,
    premios: []
  },
  {
    titulo: "Marea Nocturna",
    anio: 2023,
    director: "Diego Salcedo",
    genero: "criatura",
    etiquetas: ["criatura", "isla", "supervivencia"],
    rating: 7.9,
    duracion_min: 110,
    disponible: true,
    premios: [{ nombre: "Morbido Fest Mejor Efectos", anio: 2023 }]
  },
  {
    titulo: "El Reflejo Vacio",
    anio: 2018,
    director: "Camila Restrepo",
    genero: "sobrenatural",
    etiquetas: ["espejos", "posesion", "psicologico"],
    rating: 4.9,
    duracion_min: 87,
    disponible: true,
    premios: []
  }
]);

db.registros.find({});
