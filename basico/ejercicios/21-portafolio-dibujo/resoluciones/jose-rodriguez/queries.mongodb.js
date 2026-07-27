// Base de Datos de Galería de Dibujo - Consultas Simplificadas de Búsqueda y Tags
use('galeria_dibujo_db');

// =============================================================================
// CONSULTA 1: Búsqueda simple por un Tag específico
// Encuentra todos los dibujos que contengan el tag "boceto" dentro de su array.
// =============================================================================
db.obras.find({ 
  tags: "boceto" 
});


// =============================================================================
// CONSULTA 2: Búsqueda que debe cumplir TODOS los Tags requeridos ($all)
// Busca obras que contengan al mismo tiempo los tags "digital" Y "personajes".
// =============================================================================
db.obras.find({ 
  tags: { $all: ["digital", "personajes"] } 
});


// =============================================================================
// CONSULTA 3: Búsqueda por CUALQUIERA de los Tags listados ($in)
// Encuentra obras que tengan el tag "acuarela" O "tinta".
// =============================================================================
db.obras.find({ 
  tags: { $in: ["acuarela", "tinta"] } 
});


// =============================================================================
// CONSULTA 4: Búsqueda de texto parcial en el título ($regex)
// Busca obras cuyo título contenga la palabra "Retrato" (sin importar mayúsculas/minúsculas).
// =============================================================================
db.obras.find({ 
  titulo: { $regex: "retrato", $options: "i" } 
});


// =============================================================================
// CONSULTA 5: Proyección limpia ordenada por popularidad
// Muestra únicamente el título, la técnica y los likes de las obras con tag "boceto",
// ordenadas de mayor a menor número de likes.
// =============================================================================
db.obras.find(
  { tags: "boceto" },
  { _id: 0, titulo: 1, tecnica: 1, likes: "$metricas.likes" }
).sort({ "metricas.likes": -1 });
