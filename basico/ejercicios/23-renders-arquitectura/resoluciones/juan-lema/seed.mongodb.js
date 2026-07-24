// Renders arquitectura 3D — juan-lema
use campus_renders_arquitectura;

db.registros.drop();

db.registros.insertMany([
  {
    proyecto: "Casa Mirador Norte",
    cliente: { nombre: "Laura Fonseca", ciudad: "Guatemala" },
    tipo: "exterior",
    especificaciones: { resolucion: "4K", motor: "Corona", tiempoHoras: 6 },
    estado: "entregado",
    puntaje: 92,
    etiquetas: ["residencial", "moderno"]
  },
  {
    proyecto: "Torre Empresarial Ceiba",
    cliente: { nombre: "Constructora Alba", ciudad: "Guatemala" },
    tipo: "exterior",
    especificaciones: { resolucion: "8K", motor: "V-Ray", tiempoHoras: 14 },
    estado: "en_proceso",
    puntaje: 0,
    etiquetas: ["corporativo", "gran_escala"]
  },
  {
    proyecto: "Loft Zona 14",
    cliente: { nombre: "Diego Marín", ciudad: "Antigua" },
    tipo: "interior",
    especificaciones: { resolucion: "2K", motor: "Corona", tiempoHoras: 3 },
    estado: "entregado",
    puntaje: 88,
    etiquetas: ["residencial", "minimalista"]
  },
  {
    proyecto: "Restaurante Fuego Azul",
    cliente: { nombre: "Grupo Sabores", ciudad: "Quetzaltenango" },
    tipo: "interior",
    especificaciones: { resolucion: "4K", motor: "Blender Cycles", tiempoHoras: 5 },
    estado: "revision",
    puntaje: 0,
    etiquetas: ["comercial", "acogedor"]
  },
  {
    proyecto: "Parque Residencial Sauce",
    cliente: { nombre: "Inmobiliaria Norte", ciudad: "Guatemala" },
    tipo: "urbanismo",
    especificaciones: { resolucion: "4K", motor: "V-Ray", tiempoHoras: 10 },
    estado: "entregado",
    puntaje: 95,
    etiquetas: ["residencial", "paisajismo"]
  },
  {
    proyecto: "Clinica Vida Sana",
    cliente: { nombre: "Salud Integral SA", ciudad: "Antigua" },
    tipo: "interior",
    especificaciones: { resolucion: "2K", motor: "Corona", tiempoHoras: 4 },
    estado: "cancelado",
    puntaje: 0,
    etiquetas: ["comercial", "salud"]
  }
]);

db.registros.find({});
