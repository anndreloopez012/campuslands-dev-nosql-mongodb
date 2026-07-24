# Modelo documental — Viajes mochileros

## Base de datos
`campus_viajes_mochileros`

## Colección principal
`registros` — un documento por viaje.

## Entidades identificadas
- Viaje (entidad central: fechas, presupuesto, estado)
- Viajero (dueño del viaje)
- Destino (país/ciudad)
- Gastos (desglose del presupuesto)
- Transporte y actividades (listas cortas asociadas al viaje)

## Estructura del documento

```js
{
  viajero: { nombre: String, edad: Number, nacionalidad: String },
  destino: { pais: String, ciudad: String },
  fechaInicio: Date,
  fechaFin: Date,
  duracionDias: Number,
  presupuesto: {
    total: Number,
    moneda: String,
    gastos: [ { categoria: String, monto: Number } ]
  },
  alojamiento: String,
  transporte: [String],
  actividades: [String],
  estado: String,     // "planificado" | "en curso" | "finalizado"
  calificacion: Number | null
}
```

## Decisiones: embebido vs referencia

**Embebido (elegido):**
- `viajero`, `destino`, `presupuesto.gastos`, `transporte`, `actividades` van embebidos porque:
  - Se leen siempre junto al viaje (no tiene sentido consultar un gasto sin su viaje).
  - Son arrays acotados (pocos gastos, pocas actividades por viaje) → no crecen sin límite.
  - Evitan `$lookup`/joins para una consulta tan frecuente como "ver el viaje completo".

**Referencia (descartada aquí):**
- No se crean colecciones separadas para viajero o destino porque en este dominio (mochileros) el viajero no se comparte entre múltiples viajes de otros usuarios en este ejercicio, y el destino es solo metadata descriptiva. Si el sistema creciera para reutilizar perfiles de viajero entre muchos viajes, ahí sí convendría referenciar por `viajero_id`.

## Índices sugeridos
- `{ "destino.pais": 1 }` — consultas frecuentes por país.
- `{ fechaInicio: 1 }` — filtros y ordenamientos por fecha.
- `{ "presupuesto.total": 1 }` — consultas por rango de presupuesto.
