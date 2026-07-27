# Solución NoSQL MongoDB: Caso Ciencia Ficción (Referencias Manuales)

Este proyecto implementa una arquitectura de base de datos en **MongoDB** diseñada para catalogar el dominio de la **Ciencia Ficción** (Autores, Obras, Universos y Planetas), demostrando el uso técnico de **Referencias Manuales** (*Manual References*).

---

## Criterios de Modelado NoSQL

En el modelo relacional tradicional se depende estrictamente de claves foráneas con integridad referencial. En MongoDB, las **referencias manuales** nos permiten mantener documentos desacoplados pero vinculados mediante identificadores de tipo cadena (`string`), evitando esquemas monolíticos embebidos.

### Tabla de Estrategias de Modelado

| Colección | Campo | Estrategia Aplicada | Justificación DBA |
| :--- | :--- | :--- | :--- |
| `autores` | `_id` | **Identificador de Texto** | Claves formateadas (ej. `"AUT-001"`) que facilitan la legibilidad y referencia cruzada manual. |
| `universos` | `creadorId` | **Referencia Manual (1:N)** | Vincula el universo a su autor principal. Evita embeber al autor dentro del universo si este ha escrito otras obras independientes. |
| `obras` | `autorId`, `universoId` | **Referencias Manuales (1:N)** | Relaciona la obra con su autor y universo. Si la información del autor cambia, no requiere actualizar miles de documentos de obras. |
| `obras` | `metricas` | **Subdocumento Embebido** | Datos métricos (páginas, calificación) fuertemente ligados a la obra que no cambian de forma independiente. |
| `planetas` | `obrasDondeApareceIds` | **Array de Referencias Manuales (N:M)** | Permite asociar un planeta a múltiples obras sin duplicar el objeto planeta en cada documento de obra. |

---

## Explicación de las Consultas (`queries.mongodb.js`)

1. **Resolución de Referencia Manual Simple (`$lookup`):**  
   Demuestra cómo resolver una clave foránea manual (`autorId`) contra la colección de `autores` para construir una vista combinada en lectura.
2. **Resolución Doble en Cadena:**  
   Ejecuta múltiples etapas `$lookup` para consolidar información proveniente de tres colecciones distintas (`obras`, `autores` y `universos`).
3. **Array de Referencias Manuales (N:M):**  
   Muestra la capacidad nativa de MongoDB para resolver relaciones muchos a muchos cuando la clave local es un array de cadenas (`obrasDondeApareceIds`).
4. **Conteo por Clave Referencial Directa:**  
   Aprovecha el índice sobre el campo referencial (`universoId`) para contar rápidamente elementos asociados sin necesidad de un `JOIN`.
5. **Agregación Analítica por Entidad Referenciada:**  
   Agrupa obras por su referencia (`universoId`), realiza cálculos de promedio sobre subdocumentos y enriquece la salida con los datos del universo.

---

## Índices Recomendados para Producción

Para acelerar la resolución de referencias manuales y prevenir escaneos completos de colecciones (*COLLSCAN*):

```javascript
use('ciencia_ficcion_db');

// Índice sobre las claves referenciales en 'obras'
db.obras.createIndex({ autorId: 1 });
db.obras.createIndex({ universoId: 1 });

// Índice multiclave sobre el array de referencias en 'planetas'
db.planetas.createIndex({ obrasDondeApareceIds: 1 });
