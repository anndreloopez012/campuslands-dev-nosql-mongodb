# Evidencias — 18. Rutas turísticas (juan-lema)

## Carga inicial (`seed.mongodb.js`)
`db.rutas.find()` devuelve **5 documentos** tras `insertMany`, cubriendo las categorías: cultural, aventura, gastronomica, naturaleza y playa.

## Consulta 1 — Find general
Devuelve los 5 nombres y ciudades:
- Centro Historico al Amanecer — Antigua Guatemala
- Ascenso al Volcan Pacaya — San Vicente Pacaya
- Sabores de Mercado Local — Ciudad de Guatemala
- Kayak en Lago de Atitlan — Panajachel
- Playa y Atardecer en Monterrico — Monterrico

## Consulta 2 — Find filtrado (`activa: true`, `calificacion >= 4.5`)
Resultado esperado (orden descendente por calificación):
1. Kayak en Lago de Atitlan — naturaleza — 4.9
2. Centro Historico al Amanecer — cultural — 4.8
3. Ascenso al Volcan Pacaya — aventura — 4.6

*("Sabores de Mercado Local" queda fuera por estar `activa: false`; "Playa y Atardecer en Monterrico" queda fuera por tener 4.4 < 4.5.)*

## Consulta 3 — updateOne
`matchedCount: 1, modifiedCount: 1`. La verificación posterior muestra:
```json
{ "nombre": "Ascenso al Volcan Pacaya", "precioUSD": 32, "etiquetas": ["senderismo", "volcan", "naturaleza", "promo"] }
```

## Consulta 4 — deleteOne
`deletedCount: 1`. La verificación posterior (`findOne`) devuelve `null`: el documento "Sabores de Mercado Local" ya no existe.

## Verificación final
`db.rutas.countDocuments()` → **4** (de 5 iniciales, menos 1 eliminado).
