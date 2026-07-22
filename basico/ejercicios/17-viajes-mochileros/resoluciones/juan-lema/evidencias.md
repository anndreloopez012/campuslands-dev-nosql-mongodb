# Evidencias — Viajes mochileros

## Seed
`db.registros.countDocuments()` → **6** documentos insertados.

## Consulta 1 — Find all (proyección básica)
Devuelve los 6 viajes con `viajero.nombre`, `destino.pais`, `destino.ciudad`, `fechaInicio` y `fechaFin`.

## Consulta 2 — Presupuesto ≤ 500 USD y estado "planificado"
Resultado esperado: **1 documento**
- Andres Paredes — Guatemala/Flores — presupuesto 300 USD — planificado

(Sofia Ramirez tiene 650 USD y Laura Gomez 900 USD, ambos superan el límite; Diego Fernandez y Mateo Rios ya están "finalizado"; Camila Torres está "en curso".)

## Consulta 3 — Viajes a Guatemala ordenados por fechaInicio ascendente
Resultado esperado: **2 documentos**, en este orden:
1. Diego Fernandez — Antigua — 2026-03-01
2. Andres Paredes — Flores — 2026-04-18

## Consulta 4 — updateOne (Camila Torres)
Antes: `estado: "en curso"`, `calificacion: null`
Después: `estado: "finalizado"`, `calificacion: 5`
Resultado: `matchedCount: 1`, `modifiedCount: 1`. El `findOne` de verificación confirma los nuevos valores.

## Consulta 5 — deleteOne (Andres Paredes)
Resultado: `deletedCount: 1`.
- `countDocuments()` → **5** documentos restantes.
- `findOne({ "viajero.nombre": "Andres Paredes" })` → **null** (ya no existe).
