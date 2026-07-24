// Conectarse a la base de datos
use("campus_formulas_lab");

// Consulta 1: Fórmulas activas con pH menor o igual a 7 con proyección limpia
db.formulas.find(
  { "activa": true, "detalles_laboratorio.ph": { $lte: 7 } },
  { nombre: 1, formula_quimica: 1, "detalles_laboratorio.ph": 1, _id: 0 }
);

// Consulta 2: Búsqueda sobre el array de componentes fórmulas que contienen "Oxigeno"
db.formulas.find(
  { componentes: "Oxigeno" },
  { nombre: 1, componentes: 1, _id: 0 }
);

// Consulta 3: Actualización para cambiar estado y  agregar nueva etiqueta
db.formulas.updateOne(
  { nombre: "Dioxido de Carbono" },
  { 
    $set: { activa: true, "detalles_laboratorio.ph": 5.8 },
    $push: { etiquetas: "revisado" }
  }
);

// Consulta 4: Conteo de registros que se encuentran activos en el laboratorio
db.formulas.countDocuments({ activa: true });