# Modelo documental

Describe colecciones, documentos, subdocumentos, arrays, referencias e indices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script para crear la colección `gamers`, poblar 5 documentos.
- `queries.mongodb.js`: Script con consultas de lectura, filtros de subdocumentos/arrays y actualización.

## 1. Identificación de Entidades y Atributos
Para el videojuego se identificamos las siguientes entidades:

- Gamer: `nombre`, `rango`, `nivel`, `activo`.
- Estadísticas de Combate: `partidas_ganadas`,`partidas_perdidas`, `precision`.
- Inventario de Armas/Skins: `armas` .

## 2. Decisiones de Diseño 

- Las estadísticas de combate (`partidas_ganadas`, `partidas_perdidas`, `precision`) pertenecen a un único jugador y no crecen indefinidamente. Asi que estas serán embebidas yas que nos permitira leer y actualizar el perfil completamente en una sola operación.

- Para las armas seran un array embebido ya que el inventario contiene una lista de nombres de ítems equipados. Y siendo un conjunto de datos pequeño que siempre se consulta junto con el usuario, se modela dentro del mismo documento.

- En este ejercicio no se necesitaran referencias, ya que toda la información importante para el jugador se guarda en el mismo documento, mejorando la velocidad de lectura.

## 3. Estructura de la Colección y Documentos

- Nombre de la colección: `gamers` .

### Ejemplo de documento:

```json
{
  "_id": "ObjectId",
  "nombre": "GhostWalker",
  "rango": "Diamante",
  "nivel": 42,
  "activo": true,
  "estadisticas": {
    "partidas_ganadas": 120,
    "partidas_perdidas": 45,
    "precision": 68
  },
  "armas": ["M4A1-S", "Desert Eagle", "Cuchillo Mariposa"]
}
```
## Índices implementados
- `{ nombre: 1 }`: Optimiza la búsqueda directa por el nombre del jugador.
- `{ activo: 1, rango: 1 }`: Indice para acelerar el filtrado en sistemas de matchmaking.

## Checklist
[x] Nombre de la colección en plural y minúsculas (gamers).

[x] Inserción de al menos 5 documentos.

[x] Uso de subdocumento embebido para estadisticas.

[x] Uso de array embebido para armas.

[x] Consultas con filtros sobre subdocumentos y arrays.

[x] Operación de actualización (updateOne con $inc).

[x] Creación de índices para optimización de búsquedas.

[x] Archivos ubicados únicamente dentro de la carpeta personal de resolución.