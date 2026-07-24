# 19. Check-in de paracaidismo — juan-lema

## Base de datos
`campus_paracaidismo_checkin`

## Colección
`registros` (colección única, documentos embebidos)

## Modelo elegido
Cada documento representa el check-in de un saltador para un salto específico.
Se embebe el equipo asignado (`equipo`) y el estado médico (`chequeo_medico`)
porque son datos que siempre se leen junto al check-in y no se comparten con
otros documentos ni crecen de forma independiente. No se usan referencias
porque el volumen de datos es pequeño y no hay necesidad de normalizar: separar
`equipo` o `chequeo_medico` en otra colección solo agregaría joins ($lookup)
innecesarios para consultas que siempre piden esa información junta.

## Archivos
- `seed.mongodb.js`: creación de la colección e inserción de 5 documentos.
- `queries.mongodb.js`: find all, find filtrado, updateOne, deleteOne (con
  verificación después de cada operación de escritura).
- `evidencias.md`: resultados esperados de cada consulta.

## Cómo ejecutar
1. Abrir `seed.mongodb.js` en MongoDB Shell / Compass y ejecutarlo completo.
2. Ejecutar `queries.mongodb.js` bloque por bloque.
3. Comparar resultados contra `evidencias.md`.
