# Modelo documental - Sagas de ciencia ficción

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script para inicializar las colecciones `sagas` y `peliculas` con las sagas más taquilleras de ciencia ficción (Star Wars, Avengers, Avatar).
- `queries.mongodb.js`: Script con consultas relacionales por referencias manuales (`saga_id`), agregaciones con `$lookup` y actualizaciones.

## 1. Identificación de Entidades y Atributos
- **Saga:** `nombre`, `creador`, `universo`, `activa`, `total_entregas`.
- **Película:** `titulo`, `estreno`, `director`, `recaudacion_m_usd`, `saga_id` (referencia manual), `personajes_clave`.

## 2. Decisiones de Diseño
- **Referencias Manuales (`saga_id`):** Permite vincular cada película con su saga correspondiente evitando incrustar arreglos masivos de datos dentro del documento principal de la saga, optimizando así la escalabilidad.

## 3. Estructura de las Colecciones
- Colección 1: `sagas`
- Colección 2: `peliculas`

### Ejemplo de documento en `peliculas`:
```json
{
  "_id": "ObjectId",
  "titulo": "Avengers: Endgame",
  "estreno": 2019,
  "director": "Anthony y Joe Russo",
  "recaudacion_m_usd": 2798,
  "saga_id": "60c72b2f9b1d8b2b8c8b4562",
  "personajes_clave": ["Iron Man", "Captain America", "Thanos"]
}
```
### Índices implementados
{ nombre: 1 }: Optimiza la búsqueda de sagas.

{ saga_id: 1 }: Índice clave para agilizar cruces mediante $lookup.

### Checklist
[x] Nombres de colecciones en plural y minúsculas (sagas, peliculas).

[x] Uso de sagas populares y taquilleras de ciencia ficción.

[x] Inserción de al menos 5 documentos coherentes.

[x] Implementación de referencias manuales con saga_id.

[x] Consultas relacionales manuales y combinación con $lookup.

[x] Operación de actualización (updateOne con $inc).

[x] Archivos creados únicamente dentro de la carpeta personal de resolución.