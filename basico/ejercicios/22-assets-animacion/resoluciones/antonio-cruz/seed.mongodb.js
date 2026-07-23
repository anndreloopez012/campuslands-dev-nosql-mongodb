// Base de datos del ejercicio
use("campus_assets_animacion");

// Limpio la colección para que el script siempre genere el mismo resultado
db.assets.drop();

// Cada documento representa un asset completo.
// El estado pertenece al mismo recurso, por lo que no hace falta dividir
// esta información en otra colección.

db.assets.insertMany([
  {
    nombre: "Robot Guardian",
    tipo: "Personaje",
    formato: "FBX",
    pesoMB: 85,
    autor: "Carlos Méndez",
    fechaCreacion: ISODate("2026-06-05"),
    estado: "aprobado"
  },
  {
    nombre: "Bosque Fantástico",
    tipo: "Escenario",
    formato: "BLEND",
    pesoMB: 210,
    autor: "Andrea López",
    fechaCreacion: ISODate("2026-06-12"),
    estado: "revision"
  },
  {
    nombre: "Espada Épica",
    tipo: "Prop",
    formato: "OBJ",
    pesoMB: 24,
    autor: "Kevin Morales",
    fechaCreacion: ISODate("2026-06-18"),
    estado: "aprobado"
  },
  {
    nombre: "Dragón Volador",
    tipo: "Personaje",
    formato: "FBX",
    pesoMB: 165,
    autor: "María García",
    fechaCreacion: ISODate("2026-07-02"),
    estado: "pendiente"
  },
  {
    nombre: "Casa Medieval",
    tipo: "Escenario",
    formato: "BLEND",
    pesoMB: 190,
    autor: "José Ramírez",
    fechaCreacion: ISODate("2026-07-10"),
    estado: "revision"
  }
]);