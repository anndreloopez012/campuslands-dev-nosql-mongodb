# Solución NoSQL MongoDB: Catálogo de Tecnología (Schema Validation Introductorio)

Este proyecto implementa una arquitectura NoSQL en **MongoDB** para la gestión de **Productos y Dispositivos Tecnológicos**, centrada en el uso de **Schema Validation (`$jsonSchema`)** para gobernar la integridad de datos desde la capa de persistencia.

---

## 1. Criterios de Modelado NoSQL

| Colección | Campo / Estructura | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `productos_tech` | `sku` | **Cadena Validad por Regex** | Código de inventario estandarizado que sigue la expresión regular `^[A-Z]{3}-[0-9]{4}$`. |
| `productos_tech` | `especificacionesTecnicas` | **Subdocumento Embebido** | Características de hardware (`procesador`, `ramGB`, `almacenamientoGB`) con tipos estrictos (`int`, `minimum`). |
| `productos_tech` | `stock` | **Subdocumento Embebido** | Guarda la disponibilidad en tiempo real (`actual`, `disponible`) garantizando enteros no negativos. |
| `productos_tech` | `etiquetas` | **Array Simple de Cadenas** | Atributos de búsqueda rápida (`"DDR5"`, `"5G"`, `"NVMe"`). Permite indexación multiclave (*Multikey Index*). |
| `categorias` | `_id` | **Referencia Manual (1:N)** | Catálogo maestro de categorías de hardware (`"CAT-COMP"`, `"CAT-MOBI"`). |

---

## 2. Explicación del Schema Validation (`$jsonSchema`)

Para evitar que datos inconsistentes o tipos incorrectos afecten el sistema, se define la validación directamente en la colección con `db.createCollection`:

* **Estructura Requerida (`required`):** Asegura que ningún producto sea creado sin campos indispensables como `sku`, `precioUSD` o `stock`.
* **Validación de Tipos de Datos (`bsonType`):** Exige que valores como la memoria RAM o el inventario sean de tipo entero (`int`), previniendo errores por cadenas de texto o flotantes mal formateados.
* **Restricciones Numéricas y Patrones:** 
  * `precioUSD`: Debe ser un valor numérico estrictamente positivo (`minimum: 0.01`).
  * `sku`: Exige cumplimiento de patrón estandarizado mediante expresión regular.
* **Modo de Acción (`validationAction: "error"`):** Bloquea cualquier comando `insert` o `update` no conforme de manera inmediata.

---

## 3. Explicación de las Consultas Avanzadas (`queries.mongodb.js`)

1. **Búsqueda Técnica en Subdocumento:** Filtra componentes de hardware examinando atributos internos del subdocumento `especificacionesTecnicas.ramGB`.
2. **Top Productos Premium (`.sort()` + `.limit()`):** Muestra los dispositivos con mayor precio de catálogo.
3. **Métricas Financieras de Inventario (`$group` + `$avg` + `$multiply`):** Agrupa productos por categoría, calculando el precio promedio e integrando la multiplicación del stock por el precio para calcular el capital total invertido.
4. **Frecuencia de Tecnologías (`$unwind` + `$group`):** Desestructura las etiquetas para identificar qué prestaciones técnicas son las más frecuentes en la oferta.
5. **Prueba de Rechazo de Validación:** Incluye un bloque de código comentado que demuestra el fallo estricto de inserción cuando se intenta ingresar un documento con SKU inválido o precio negativo.

---

## 4. Estrategia de Índices Recomendados

Para acelerar la búsqueda de dispositivos por especificaciones técnicas y categoría:

```javascript
use('tecnologia_db');

// Índice único para asegurar que los SKUs validados sean irrepetibles
db.productos_tech.createIndex({ sku: 1 }, { unique: true });

// Índice compuesto para consultas por categoría y rango de precio
db.productos_tech.createIndex({ categoriaId: 1, precioUSD: -1 });

// Índice multiclave para búsquedas por etiquetas tecnológicas
db.productos_tech.createIndex({ etiquetas: 1 });

// Índice en subdocumento para filtros de memoria RAM
db.productos_tech.createIndex({ "especificacionesTecnicas.ramGB": 1 });
