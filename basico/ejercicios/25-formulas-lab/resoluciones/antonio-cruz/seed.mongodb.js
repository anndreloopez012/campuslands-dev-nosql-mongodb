// Base de datos del ejercicio
use("campus_formulas_lab");

// El script elimina la colección para evitar registros duplicados
db.formulas.drop();

// Los componentes se almacenan como un arreglo porque pertenecen únicamente
// a cada fórmula y normalmente siempre se consultan junto con ella.

db.formulas.insertMany([
  {
    nombre: "Solución Salina",
    codigo: "FQ-001",
    categoria: "Mezcla",
    componentes: ["Agua destilada", "Cloruro de sodio"],
    fechaCreacion: ISODate("2026-07-02"),
    responsable: "Carlos Méndez",
    estado: "aprobada"
  },
  {
    nombre: "Alcohol Antiséptico",
    codigo: "FQ-002",
    categoria: "Desinfectante",
    componentes: ["Etanol", "Agua destilada", "Glicerina"],
    fechaCreacion: ISODate("2026-07-05"),
    responsable: "Andrea López",
    estado: "revision"
  },
  {
    nombre: "Buffer Fosfato",
    codigo: "FQ-003",
    categoria: "Reactivo",
    componentes: ["Fosfato monosódico", "Fosfato disódico", "Agua destilada"],
    fechaCreacion: ISODate("2026-07-08"),
    responsable: "José Ramírez",
    estado: "aprobada"
  },
  {
    nombre: "Reactivo Azul",
    codigo: "FQ-004",
    categoria: "Indicador",
    componentes: ["Azul de metileno", "Etanol"],
    fechaCreacion: ISODate("2026-07-10"),
    responsable: "María García",
    estado: "pendiente"
  },
  {
    nombre: "Gel Conductivo",
    codigo: "FQ-005",
    categoria: "Gel",
    componentes: ["Agua destilada", "Carbopol", "Glicerina"],
    fechaCreacion: ISODate("2026-07-12"),
    responsable: "Kevin Morales",
    estado: "revision"
  }
]);