# Evidencias - Ejercicio 28

## 1. Seed
`db.registros.find({})` retorna 5 documentos: Torneo de Futbol Interno, Clase de Yoga al Aire Libre, Torneo de Baloncesto 3v3, Maraton 5K Campus y Ciclismo Ruta Norte.

## 2. Find filtrado
Con `estado: "activa"` y `cupo_maximo > 15` deben aparecer, ordenados por fecha:
1. Clase de Yoga al Aire Libre (cupo 15 **no** aplica, queda excluida)
2. Torneo de Futbol Interno (cupo 20)
3. Maraton 5K Campus (cupo 100)

## 3. UpdateOne
- `participantes.$.confirmado` de Kevin Silva (documento 1003) pasa de `false` a `true`.
- Se agrega un nuevo participante (Sofia Herrera, documento 1013) al Torneo de Futbol Interno.
- El `findOne` de verificacion muestra 4 participantes en ese evento, todos confirmados excepto ninguno pendiente.

## 4. Delete controlado
- `countDocuments({ estado: "cancelada" })` antes del delete: **2** (Torneo de Baloncesto 3v3, Ciclismo Ruta Norte).
- El `deleteOne` solo borra **Torneo de Baloncesto 3v3**, porque es el unico evento cancelado con `participantes` vacio (`$size = 0`). Ciclismo Ruta Norte no se borra porque tiene 2 participantes.
- `countDocuments({ estado: "cancelada" })` despues del delete: **1**.
- El `find` final de eventos cancelados solo devuelve Ciclismo Ruta Norte.
