# Solución NoSQL MongoDB: Gestión de Libros y Proyecciones Limpias

Este proyecto implementa una arquitectura de base de datos NoSQL en **MongoDB** diseñada para optimizar la entrega de datos en sistemas literarios, enfocándose en la técnica de **Proyecciones Limpias** (*Clean Projections*).

---

## Criterios de Modelado de Datos

El diseño del esquema aplica patrones de optimización NoSQL decidiendo cuidadosamente entre embeber o referenciar campos:

| Colección | Campo | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `libros` | `_id` | **Cadena de Texto** | Identificadores formateados (ej. `"LIB-001"`) para simplicidad en consultas nativas. |
| `libros` | `editorial` / `detallesFisicos` | **Subdocumentos Embebidos** | Relaciones 1:1 fuertemente ligadas al libro. Se leen habitualmente juntas y no cambian de forma aislada. |
| `libros` | `generos` / `idiomasDisponibles` | **Arrays Simples** | Permiten filtrados veloces con índices multiclave (`multikey index`). |
| `libros` | `camposInternos` | **Subdocumento Embebido Confidencial** | Contiene metadatos de auditoría y almacén. Ideal para demostrar exclusión en proyecciones públicas. |
| `libros` | `autorId` | **Referencia Manual Normalizada** | Un autor puede tener múltiples libros. Normalizar previene duplicación si los datos del autor cambian. |

---

## Importancia de las Proyecciones Limpias (`queries.mongodb.js`)

En entornos de producción con alto tráfico, consultar documentos completos que poseen subdocumentos extensos produce cuello de botella. Las proyecciones resuelven esto:

1. **Inclusión Estricta (`_id: 0`, campos seleccionados):**  
   Permite devolver **únicamente** los campos necesarios para las tarjetas de catálogo, eliminando el payload superfluo de red.
2. **Exclusión Táctica de Datos Sensibles:**  
   Garantiza que información técnica como `camposInternos` (costos de adquisición, hashes, datos de almacén) jamás llegue al cliente/frontend.
3. **Control de Arrays mediante `$slice`:**  
   Evita sobrecargar la respuesta recortando el número de elementos devueltos en campos tipificados como array (`idiomasDisponibles`).
4. **Transformación de Documentos con `$project`:**  
   Permite renombrar llaves sobre la marcha y evaluar campos calculados mediante condicionales (`$cond`), desacoplando la estructura interna de la base de datos respecto al contrato JSON del API.
5. **Proyección en Pipelines de Agregación (`$lookup` + Limpieza):**  
   Al realizar cruces (*JOINs*) NoSQL, la etapa `$lookup` genera campos planos o temporales. El `$project` final remueve la basura estructural, entregando una entidad limpia.

---

## Estrategia de Índices y Proyecciones Cubiertas (*Covered Queries*)

Cuando una consulta utiliza proyecciones inclusivas y todos los campos requeridos forman parte de un índice, MongoDB responde la consulta leyendo directamente del índice en RAM sin acceder al disco (*Covered Query*).

```javascript
use('biblioteca_db');

// Índice compuesto para Covered Query en búsquedas de catálogo
db.libros.createIndex({ "metricas.calificacionPromedio": -1, titulo: 1, añoPublicacion: 1 });

// Índice multiclave para optimización de búsquedas por género
db.libros.createIndex({ generos: 1 });

// Índice para resolución ágil de referencias en $lookup
db.libros.createIndex({ autorId: 1 });
