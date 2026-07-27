# Solución NoSQL MongoDB: Caso de Estudio Música

Este proyecto aborda la gestión de datos para un catálogo musical (artistas, álbumes y listas de reproducción) en **MongoDB**, poniendo foco en la eficiencia del modelado mediante **arrays simples**.

---

## Decisiones de Arquitectura NoSQL

El diseño prioriza la simplicidad, flexibilidad de consultas y velocidad de lectura, aplicando criterios NoSQL para decidir entre documentos, subdocumentos, arrays y referencias:

| Colección | Campo | Tipo de Dato | Criterio DBA / Justificación |
| :--- | :--- | :--- | :--- |
| `artistas` | `generos` | **Array Simple (Strings)** | Una lista acotada de etiquetas textuales. Permite indexación multiclave (`multikey index`) para búsquedas rápidas por género. |
| `artistas` | `integrantes` | **Array Simple (Strings)** | La lista de nombres no requiere entidades independientes a menos que se necesite gestionar sus carreras solistas como entidades separadas. |
| `albumes` | `canciones` | **Array Simple (Strings)** | Mantiene el orden de las pistas (*tracklist*) como una lista simple embebida dentro del álbum, evitando colecciones secundarias de baja cardinalidad. |
| `albumes` | `paisesDistribucion` | **Array Simple (Strings)** | Códigos de país ISO (3 letras) ideales para filtrado rápido mediante operadores como `$in` o `$all`. |
| `listasReproduccion` | `albumesIncluidosIds` | **Array Simple de Referencias** | Mantiene una relación 1:N acotada hacia la colección `albumes`. Permite cruces mediante `$lookup` directo. |

---

## Explicación de Consultas (`queries.mongodb.js`)

1. **Búsqueda en Array Simple con `$all`:**  
   Garantiza que un documento contenga **todos** los elementos especificados en la lista del array sin importar el orden.
2. **Conteo con `$in` en Array Simple:**  
   Utiliza la capacidad multiclave de MongoDB para contar documentos cuyo array simple coincida con al menos uno de los valores pasados.
3. **Filtro Combinado con `$size` y `$in`:**  
   Demuestra cómo validar tanto la longitud exacta del array como la existencia de un elemento específico en la misma condición.
4. **Agregación con `$unwind`:**  
   Descompone el array simple de géneros para convertir cada elemento en un documento temporal, permitiendo agrupar y calcular promedios analíticos por género.
5. **Agregación y Join sobre Array de IDs con `$lookup`:**  
   Muestra la potencia de MongoDB para resolver relaciones 1:N donde la llave de origen es un array simple de llaves foráneas (`albumesIncluidosIds`).

---

## Estrategia de Índices Recomendados

Para optimizar el rendimiento en producción, se recomienda aplicar los siguientes índices:

```javascript
use('musica_db');

// Índice multiclave para búsquedas por género
db.artistas.createIndex({ generos: 1 });

// Índice compuesto para álbumes por artista y año
db.albumes.createIndex({ artistaId: 1, añoLanzamiento: -1 });

// Índice multiclave para etiquetas de listas de reproducción
db.listasReproduccion.createIndex({ etiquetas: 1 });
