use('campus_personajes_rpg');

// 1.Obtener todos los personajes activos
// Solo muestra el nombre, clase y nivel
db.personajes.find(
  { activo: true },
  { _id: 0, nombre: 1, clase: 1, nivel: 1 }
);

// 2. Consulta personajes con Inteligencia mayor a 80
db.personajes.find(
  { "atributos.inteligencia": { $gt: 80 } },
  { _id: 0, nombre: 1, clase: 1, "atributos.inteligencia": 1 }
);

// 3. Consulta personajes que tienen la habilidad "Escudo de Hielo"
db.personajes.find(
  { habilidades: "Escudo de Hielo" },
  { _id: 0, nombre: 1, habilidades: 1 }
);

// 4. Consulta personajes con equipamiento "Legendario"
db.personajes.find(
  { "equipamiento.rareza": "Legendario" },
  { _id: 0, nombre: 1, equipamiento: 1 }
);

// 5. Actualiza el nivel y salud de "Sombra Nocturna"
db.personajes.updateOne(
  { nombre: "Sombra Nocturna" },
  {
    $inc: { 
      nivel: 1, 
      "atributos.salud_maxima": 100 
    }
  }
);