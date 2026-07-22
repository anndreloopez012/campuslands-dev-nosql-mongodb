# Modelo documental - Liga de pingpong

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script para inicializar la colección `jugadores`, insertar los 5 documentos de prueba y definir índices.
- `queries.mongodb.js`: Script con consultas de búsqueda, operaciones de conteo (`countDocuments`), filtrados por subdocumentos y actualización.

## 1. Identificación de Entidades y Atributos
Para la gestión de la liga de pingpong se estructuraron los siguientes datos:
- **Jugador:** `nombre`, `apodo`, `categoria`, `activo`.
- **Estadísticas:** `partidos_jugados`, `partidos_ganados`, `torneos_ganados`.
- **Equipamiento:** `paleta`, `goma_derecha`, `goma_reves`.
- **Etiquetas:** Array de palabras clave (`zurdo`, `diestro`, `potencia`, `campus-elite`).

## 2. Decisiones de Diseño
- **Estadísticas Embebidas:** Las métricas de rendimiento se consultan de manera recurrente junto al perfil del deportista, por lo que se embeben en un subdocumento `estadisticas`.
- **Equipamiento Embebió:** Mantiene la especificación técnica de la paleta y gomas asociadas directamente a cada jugador.
- **Uso de Conteo (`countDocuments`):** Permite generar métricas rápidas sobre el estado de la liga (ej. total de activos o clasificados en categoría elite) sin transferir todos los documentos.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `jugadores`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "nombre": "Ma Long",
  "apodo": "The Dictator",
  "categoria": "Avanzado",
  "activo": true,
  "estadisticas": {
    "partidos_jugados": 120,
    "partidos_ganados": 110,
    "torneos_ganados": 25
  },
  "equipamiento": {
    "paleta": "DHS Hurricane Long 5",
    "goma_derecha": "Hurricane 3 Neo",
    "goma_reves": "Tenergy 05"
  },
  "etiquetas": ["zurdo", "topspin", "campus-elite"]
}
```
### Índices implementados
{ nombre: 1 }: Optimiza la localización directa por nombre del jugador.

{ categoria: 1, activo: 1 }: Índice compuesto para búsquedas y conteos rápidos por categoría y disponibilidad.

{ etiquetas: 1 }: Multikey index para agilizar filtros por etiquetas de juego.



### Checklist
[x] Nombre de la colección en plural y minúsculas (jugadores).

[x] Inserción de al menos 5 documentos coherentes.

[x] Uso de subdocumentos embebidos para estadisticas y equipamiento.

[x] Consultas de búsqueda y conteos con countDocuments.

[x] Operación de actualización (updateOne con $inc).

[x] Definición e implementación de índices.

[x] Archivos creados únicamente dentro de la carpeta personal de resolución.