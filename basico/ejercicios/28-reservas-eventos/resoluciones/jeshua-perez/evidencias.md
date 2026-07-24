# Evidencias - 28. Reservas de eventos campus

## Ejecucion

1. `seed.mongodb.js` sobre `campus_reservas_eventos`: `insertMany` reporta `insertedCount: 6` en `reservas`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Reservas canceladas antes del delete: retorna 2 documentos (Sesion de Yoga al Aire Libre, Torneo Relampago de Ajedrez).
2. Reservas confirmadas: retorna 4 documentos.
3. `deleteOne` sobre "Sesion de Yoga al Aire Libre": `deletedCount: 1`.
4. `deleteMany` sobre canceladas anteriores a julio 2026: `deletedCount: 1` (elimina "Torneo Relampago de Ajedrez", ya que "Sesion de Yoga" ya se habia borrado en el paso anterior).
5. Reservas confirmadas tras los deletes: siguen siendo las mismas 4 (no se vieron afectadas).
6. `countDocuments({})`: retorna `4`.

## Conclusion

Combinar `find` de verificacion con `deleteOne`/`deleteMany` usando filtros compuestos (nunca `{}`) permitio eliminar solo las reservas canceladas sin arriesgar las confirmadas.
