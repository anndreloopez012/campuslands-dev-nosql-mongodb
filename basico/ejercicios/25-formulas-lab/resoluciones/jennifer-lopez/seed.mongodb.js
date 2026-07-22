// Formula lab 
// Solución de Denise López - Ejercicio 25

use campus_formulas_lab

// Crear la colección principal en minúsculas y plural
db.createCollection("formulas")

// Insertar 5 fórmulas químicas con enfoque en arrays de componentes, nombres poco comunes y temáticas de ficción
db.formulas.insertMany([
  {
    codigo_formula: "FORM-LAB-001",
    nombre_formula: "Suero del Súper Soldado Vita",
    quimico_principal: "Orestes Vane",
    laboratorio_origen: "Laboratorio Cráter Azul",
    pais: "Guatemala",
    referencia_popular: "Marvel - Capitán América",
    nivel_riesgo: "Alto",
    requiere_autorizacion: true,
    componentes: [
      { elemento: "Dióxido de Radio-Vita", concentracion_porcentaje: 45.0, pureza: "99.9%", funcion: "Agente mutagénico base" },
      { elemento: "Estabilizador Potásico", concentracion_porcentaje: 30.0, pureza: "98.5%", funcion: "Prevención de choque celular" },
      { elemento: "Catalizador de Rayos Vita", concentracion_porcentaje: 25.0, pureza: "99.0%", funcion: "Activación metabólica" }
    ],
    densidad_g_cm3: 1.42,
    fecha_elaboracion: ISODate("2026-03-10T00:00:00Z")
  },
  {
    codigo_formula: "FORM-LAB-002",
    nombre_formula: "Poción Multijugos Concentrada",
    quimico_principal: "Zephyrine Valdivia",
    laboratorio_origen: "Laboratorio Laguna Lachúa",
    pais: "Guatemala",
    referencia_popular: "Harry Potter",
    nivel_riesgo: "Medio",
    requiere_autorizacion: false,
    componentes: [
      { elemento: "Extracto de Crisopa", concentracion_porcentaje: 40.0, pureza: "95.0%", funcion: "Base de transfiguración" },
      { elemento: "Polvo de Cuerno de Bicornio", concentracion_porcentaje: 35.0, pureza: "97.2%", funcion: "Fijador de ADN" },
      { elemento: "Sanguijuela de la Ciénaga", concentracion_porcentaje: 25.0, pureza: "90.0%", funcion: "Disolvente orgánico" }
    ],
    densidad_g_cm3: 1.15,
    fecha_elaboracion: ISODate("2026-04-18T00:00:00Z")
  },
  {
    codigo_formula: "FORM-LAB-003",
    nombre_formula: "Sustancia X Mutagénica",
    quimico_principal: "Balthazar Nightshade",
    laboratorio_origen: "Laboratorio Quiriguá",
    pais: "Guatemala",
    referencia_popular: "Las Chicas Superpoderosas",
    nivel_riesgo: "Crítico",
    requiere_autorizacion: true,
    componentes: [
      { elemento: "Isótopo de Azúcar Concentrado", concentracion_porcentaje: 33.3, pureza: "99.9%", funcion: "Endulzante estructural" },
      { elemento: "Esencia de Especias Radiactivas", concentracion_porcentaje: 33.3, pureza: "98.0%", funcion: "Catalizador térmico" },
      { elemento: "Elemento X Sintético", concentracion_porcentaje: 33.4, pureza: "100.0%", funcion: "Inductores de súper poderes" }
    ],
    densidad_g_cm3: 2.10,
    fecha_elaboracion: ISODate("2026-05-02T00:00:00Z")
  },
  {
    codigo_formula: "FORM-LAB-004",
    nombre_formula: "Nootrópico Cereal NZT-48",
    quimico_principal: "Cyrene Sterling",
    laboratorio_origen: "Laboratorio Semuc Champey",
    pais: "Guatemala",
    referencia_popular: "Limitless",
    nivel_riesgo: "Alto",
    requiere_autorizacion: true,
    componentes: [
      { elemento: "Sintético Talamocortical B", concentracion_porcentaje: 60.0, pureza: "99.8%", funcion: "Estimulante neuronal masivo" },
      { elemento: "Inhibidor de Recaptación Synapse", concentracion_porcentaje: 25.0, pureza: "96.5%", funcion: "Retención de memoria" },
      { elemento: "Agente Aglutinante Cristalino", concentracion_porcentaje: 15.0, pureza: "99.0%", funcion: "Soporte de gragea" }
    ],
    densidad_g_cm3: 1.08,
    fecha_elaboracion: ISODate("2026-06-12T00:00:00Z")
  },
  {
    codigo_formula: "FORM-LAB-005",
    nombre_formula: "Elixir Félix Felicis (Suerte Líquida)",
    quimico_principal: "Melantho Frost",
    laboratorio_origen: "Laboratorio Tikal",
    pais: "Guatemala",
    referencia_popular: "Harry Potter",
    nivel_riesgo: "Bajo",
    requiere_autorizacion: false,
    componentes: [
      { elemento: "Tintura de Hada Dorada", concentracion_porcentaje: 50.0, pureza: "99.5%", funcion: "Modificador de probabilidad" },
      { elemento: "Esencia de Escarabajo Brillante", concentracion_porcentaje: 30.0, pureza: "94.0%", funcion: "Potenciador de percepción" },
      { elemento: "Solución de Menta Mágica", concentracion_porcentaje: 20.0, pureza: "98.0%", funcion: "Saborizante y estabilizador" }
    ],
    densidad_g_cm3: 1.30,
    fecha_elaboracion: ISODate("2026-07-01T00:00:00Z")
  }
])

// create indeces 

// Sirve para filtrar rápidamente las fórmulas según qué tan peligrosas son (Crítico, Alto, Medio, Bajo).
db.formulas.createIndex({ nivel_riesgo: 1 })

// Sirve para buscar qué fórmulas contienen un ingrediente o reactivo específico sin revisar todo el catálogo.
db.formulas.createIndex({ "componentes.elemento": 1 })

// Sirve para encontrar de golpe todas las fórmulas creadas por un químico en particular.
db.formulas.createIndex({ quimico_principal: 1 })