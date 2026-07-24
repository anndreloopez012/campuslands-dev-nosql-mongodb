# Modelado - Reservas de eventos campus (deportes)

## Base de datos
`campus_reservas_eventos`

## Coleccion principal
`registros`

## Documento
```json
{
  evento: string,
  deporte: string,
  fecha: date,
  cupo_maximo: int,
  participantes: [ { nombre: string, documento: string, confirmado: bool } ],
  ubicacion: { sede: string, ciudad: string },
  estado: "activa" | "cancelada",
  creado_en: date
}
```

## Decisiones de diseno
- **participantes embebido (array de subdocumentos):** se lee siempre junto con el evento (quien reservo, si confirmo). No crece de forma ilimitada (esta acotado por `cupo_maximo`), por lo que no justifica una coleccion separada ni referencias.
- **ubicacion embebida (subdocumento):** relacion 1 a 1 con el evento, se consulta siempre junto al evento, no se comparte entre eventos, no aporta referenciarla.
- **Sin referencias:** no existe una entidad "usuario" reutilizada entre eventos en el alcance de este ejercicio, asi que embeber participantes evita joins (`$lookup`) innecesarios en un nivel basico.
- **estado como string controlado:** permite implementar el delete controlado (solo se eliminan eventos `cancelada` y sin participantes), en vez de borrar cualquier documento sin validacion.
- **Indice sugerido:** `{ estado: 1, deporte: 1 }` para acelerar los filtros usados en las consultas de este ejercicio.
