# Modelo documental

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script para crear la colección `pilotos`, poblar los 5 documentos iniciales y definir índices.
- `queries.mongodb.js`: Script con consultas de ranking (`sort`, `limit`), filtros en subdocumentos/arrays y actualización.

## 1. Identificación de Entidades y Atributos
Para la gestión del campeonato de carreras se identificaron las siguientes entidades y sus atributos:
- **Piloto:** `nombre`, `escuderia`, `numero_auto`, `activo`.
- **Estadísticas de Temporada:** `puntos`, `victorias`, `podios`, `vueltas_rapidas`.
- **Patrocinadores y Pistas:** `sponsors` y `circuitos_favoritos`.

## 2. Decisiones de Diseño 
- **Estadísticas Embebidas:** El puntaje y los podios se actualizan y consultan constantemente al construir el leaderboard del campeonato. Se embeben dentro de un subdocumento para agilizar las lecturas.
- **Sponsors y Circuitos Embebidos:** Son listas cortas de strings fuertemente vinculadas al perfil de cada piloto.
- **Sin referencias externas:** Todo el ranking del campeonato se resuelve de forma directa en una única colección sin realizar operaciones de unión complejas.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `pilotos`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "nombre": "Max Verstappen",
  "escuderia": "Red Bull Racing",
  "numero_auto": 1,
  "activo": true,
  "estadisticas": {
    "puntos": 400,
    "victorias": 15,
    "podios": 18,
    "vueltas_rapidas": 8
  },
  "sponsors": ["Oracle", "Bybit", "Red Bull"],
  "circuitos_favoritos": ["Spa-Francorchamps", "Zandvoort"]
}
```
### Índices implementados
{ nombre: 1 }: Permite buscar un piloto de forma rápida por su nombre exacto.

{ "estadisticas.puntos": -1 }: Optimiza la ordenación descendente del ranking sin sobrecargar la memoria en tiempo de ejecución.

### Checklist
[x] Nombre de la colección en plural y minúsculas (pilotos).

[x] Inserción de al menos 5 documentos coherentes.

[x] Uso de subdocumento embebido para estadisticas.

[x] Uso de array embebido para sponsors y circuitos_favoritos.

[x] Consultas con ordenamiento (sort) y límite (limit).

[x] Operación de actualización (updateOne con $inc).

[x] Creación de índices para optimización de búsquedas.

[x] Archivos ubicados únicamente dentro de la carpeta personal de resolución.