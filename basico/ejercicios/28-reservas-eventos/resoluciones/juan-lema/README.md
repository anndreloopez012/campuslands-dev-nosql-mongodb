# Ejercicio 28 - Reservas de eventos campus (deportes)

Autor: juan-lema

Modela reservas de eventos deportivos del campus en la coleccion `registros` (BD `campus_reservas_eventos`). Cada evento embebe sus `participantes` y su `ubicacion`, ya que ambos se consultan siempre junto al evento y no se comparten entre entidades.

## Archivos
- `modelado.md`: justificacion del diseno (embebido vs referencia).
- `seed.mongodb.js`: 5 documentos originales con distintos deportes y estados.
- `queries.mongodb.js`: find general, find filtrado, updateOne (x2) y un delete controlado con verificacion antes/despues.
- `evidencias.md`: resultados esperados de cada consulta.

## Delete controlado
El `deleteOne` solo elimina eventos con `estado: "cancelada"` **y** sin participantes inscritos (`$size(participantes) = 0`), evitando borrar por error un evento cancelado que aun tenga gente registrada.

## Como ejecutar
1. Ejecutar `seed.mongodb.js` en `mongosh` o MongoDB Compass.
2. Ejecutar `queries.mongodb.js` en orden.
3. Comparar resultados contra `evidencias.md`.
