# Solución NoSQL MongoDB: Catálogo de Películas de Miedo

Este proyecto implementa una base de datos **MongoDB** para un sistema analítico de cine de terror, especializado en **búsqueda de texto completo** y **filtros estadísticos por rating**.

---

## Estrategia de Modelado NoSQL

El diseño equilibra el rendimiento de lectura y la flexibilidad mediante la elección adecuada de estructuras NoSQL:

| Colección | Campo / Elemento | Técnica Aplicada | Criterio DBA / Justificación |
| :--- | :--- | :--- | :--- |
| `peliculas` | `_id` | **Cadena de Texto** | Se utilizan IDs formateados (ej. `"PEL-001"`) para simplificar la referenciación nativa sin dependencias de wrappers. |
| `peliculas` | `calificaciones` | **Subdocumento Embebido** | Los puntajes de IMDb, Rotten Tomatoes y Metacritic forman una unidad atómica que siempre se consulta junto a la película. |
| `peliculas` | `subgeneros` / `etiquetas` | **Arrays Simples** | Permite indexación multiclave (`multikey`) para categorización múltiple ("Slasher", "Sobrenatural", etc.). |
| `peliculas` | `directorId` | **Referencia Normalizada** | Relación N:1. Un director puede dirigir múltiples películas; normalizar evita duplicar su biografía y premios. |
| `resenas` | `peliculaId` | **Referencia Normalizada** | Relación 1:N no acotada. Las reseñas crecen continuamente con el tiempo, por lo que deben residir en su propia colección. |

---

## Búsquedas por Texto y Métricas de Rating (`queries.mongodb.js`)

1. **Búsqueda por Texto Completo (`$text`):**  
   Aprovecha el índice multicampo `idx_texto_pelicula` (`titulo`, `sinopsis`, `etiquetas`) configurado en idioma español para buscar términos clave y ordenar los resultados según la puntuación de relevancia (`textScore`).
2. **Filtros por Rangos Numéricos de Rating:**  
   Combina múltiples condiciones sobre subdocumentos (`calificaciones.imdb` y `calificaciones.rottenTomatoes`) para extraer películas aclamadas por la crítica.
3. **Filtros de Texto con Expresiones Regulares (`$regex`):**  
   Permite búsquedas parciales e insensibles a mayúsculas/minúsculas sobre campos de texto largo.
4. **Agregación por Subgéneros (`$unwind` + `$group`):**  
   Descompone los arrays de subgéneros para calcular promedios de ratings numéricos y totales acumulados de recaudación por categoría.
5. **Cruce de Colecciones (`$lookup`):**  
   Realiza una combinación nativa entre `peliculas` y `directores` filtrando únicamente aquellas cintas que superan un umbral de calificación crítica.

---

## Índices Recomendados para Producción

Para garantizar tiempos de respuesta óptimos bajo alta carga de lectura:

```javascript
use('terror_db');

// Índice compuesto para filtros frecuentes por rating de IMDb y año
db.peliculas.createIndex({ "calificaciones.imdb": -1, añoEstreno: -1 });

// Índice multiclave para filtrado rápido por subgéneros
db.peliculas.createIndex({ subgeneros: 1 });

// Índice de referencia para optimizar los $lookup desde reseñas y películas
db.resenas.createIndex({ peliculaId: 1 });
db.peliculas.createIndex({ directorId: 1 });
