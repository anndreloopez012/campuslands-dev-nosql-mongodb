# Solución NoSQL MongoDB: Galería de Dibujo (Tags y Búsqueda)

Este proyecto implementa una arquitectura de base de datos en **MongoDB** diseñada para una plataforma de **Dibujo e Ilustración**, optimizada para la **búsqueda ágil por etiquetas (tags) y filtrado de contenido**.

---

## Criterios de Modelado NoSQL

| Colección | Campo | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `obras` | `tags` | **Array Simple de Cadenas** | Permite indexación multiclave (*Multikey Index*). MongoDB busca directamente dentro de los arrays sin necesidad de consultas complejas ni tablas cruzadas. |
| `obras` | `detallesTecnicos` | **Subdocumento Embebido** | Atributos propios del dibujo (software/materiales, dimensiones, tiempo de elaboración) que no cambian de forma independiente. |
| `obras` | `metricas` | **Subdocumento Embebido** | Agrupa contadores de interacción (`vistas`, `likes`) vinculados directamente a la obra para un acceso rápido. |
| `obras` | `artistaId` | **Referencia Manual** | Vincula la obra con el dibujante (`"ART-001"`). Mantiene la información del perfil del artista centralizada. |

---

## Explicación de las Consultas (`queries.mongodb.js`)

1. **Búsqueda Directa en Array:** MongoDB evalúa si la cadena `"boceto"` existe dentro del array `tags` de forma automática.
2. **Coincidencia Múltiple (`$all`):** Exige que la obra posea **todos** los términos indicados (`"digital"` Y `"personajes"`), ideal para filtros avanzados de catálogo.
3. **Coincidencia Disyuntiva (`$in`):** Devuelve documentos que contengan **al menos uno** de los tags indicados (`"acuarela"` O `"tinta"`).
4. **Búsqueda por Texto Parcial (`$regex`):** Permite encontrar títulos mediante expresiones regulares insensibles a mayúsculas (`$options: "i"`).
5. **Filtrado, Proyección y Ordenamiento:** Combina la búsqueda por tag con la proyección de métricas (`$metricas.likes`) ordenando los resultados de mayor a menor popularidad.

---

## Estrategia de Índices para Búsquedas por Tags

Para asegurar un rendimiento óptimo (*IXSCAN*) al buscar entre miles de ilustraciones:

```javascript
use('galeria_dibujo_db');

// Índice multiclave para búsquedas instantáneas por tags
db.obras.createIndex({ tags: 1 });

// Índice compuesto para filtrar por tag y ordenar por popularidad
db.obras.createIndex({ tags: 1, "metricas.likes": -1 });
