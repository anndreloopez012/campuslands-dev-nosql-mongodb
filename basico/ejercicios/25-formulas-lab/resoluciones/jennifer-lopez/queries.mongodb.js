// Formula lab - Consultas y Operaciones
// Solución de Denise López - Ejercicio 25

use campus_formulas_lab

// 1. Consulta general requerida por la plantilla base
db.formulas.find({})

// 2. Consulta sobre el array de componentes: Buscar fórmulas que contengan reactivos con pureza superior al 99%
db.formulas.find(
  { "componentes.pureza": "99.9%" },
  { codigo_formula: 1, nombre_formula: 1, quimico_principal: 1, "componentes.elemento": 1, _id: 0 }
)

// 3. Consulta por nivel de riesgo y autorización requerida
db.formulas.find(
  { nivel_riesgo: "Alto", requiere_autorizacion: true },
  { codigo_formula: 1, nombre_formula: 1, laboratorio_origen: 1, nivel_riesgo: 1, _id: 0 }
)

// 4. Consulta dentro del array utilizando $elemMatch para evaluar un componente específico
db.formulas.find(
  {
    componentes: {
      $elemMatch: {
        concentracion_porcentaje: { $gte: 40.0 },
        funcion: { $regex: "Base", $options: "i" }
      }
    }
  },
  { codigo_formula: 1, nombre_formula: 1, componentes: 1, _id: 0 }
)

// 5. Operación de actualización (Update): Añadir un nuevo componente estabilizador al array de 'Sustancia X Mutagénica' usando $push
db.formulas.updateOne(
  { codigo_formula: "FORM-LAB-003" },
  {
    $push: {
      componentes: {
        elemento: "Buffer Térmico Anti-Explasión",
        concentracion_porcentaje: 5.0,
        pureza: "99.5%",
        funcion: "Modulador de reacción"
      }
    },
    $set: {
      nivel_riesgo: "Alto",
      fecha_elaboracion: ISODate("2026-07-22T00:00:00Z")
    }
  }
)

// 6. Inserción de una nueva fórmula procesada en Quiriguá, Guatemala
db.formulas.insertOne({
  codigo_formula: "FORM-LAB-006",
  nombre_formula: "Elixir de Curación Acelerada X",
  quimico_principal: "Xanthos Escandón",
  laboratorio_origen: "Laboratorio Quiriguá",
  pais: "Guatemala",
  referencia_popular: "Wolverine - X-Men",
  nivel_riesgo: "Medio",
  requiere_autorizacion: false,
  componentes: [
    { elemento: "Factor de Células Madre Súper", concentracion_porcentaje: 70.0, pureza: "99.9%", funcion: "Regeneración tisular" },
    { elemento: "Solución Salina Inmunológica", concentracion_porcentaje: 30.0, pureza: "98.0%", funcion: "Soporte metabólico" }
  ],
  densidad_g_cm3: 1.12,
  fecha_elaboracion: ISODate("2026-07-22T00:00:00Z")
})