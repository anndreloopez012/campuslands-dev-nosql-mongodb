# Evidencias — Renders arquitectura 3D (juan-lema)

## Seed
`db.registros.find({})` retorna 6 documentos: Casa Mirador Norte, Torre Empresarial Ceiba, Loft Zona 14, Restaurante Fuego Azul, Parque Residencial Sauce y Clinica Vida Sana.

## Consulta 2 — Exteriores entregados
Retorna 1 documento:
- Casa Mirador Norte, puntaje 92

(Parque Residencial Sauce no aparece porque su `tipo` es "urbanismo", no "exterior".)

## Consulta 3 — Clientes en Guatemala con puntaje > 90
Retorna 1 documento:
- Casa Mirador Norte — Laura Fonseca — puntaje 92

## Consulta 4 — Update Restaurante Fuego Azul
Antes: `estado: "revision", puntaje: 0`
Después: `estado: "entregado", puntaje: 90`
`matchedCount: 1, modifiedCount: 1`

## Consulta 5 — Delete proyecto cancelado
Elimina "Clinica Vida Sana" (`estado: "cancelado"`).
`deletedCount: 1`
La colección final queda con 5 documentos.
