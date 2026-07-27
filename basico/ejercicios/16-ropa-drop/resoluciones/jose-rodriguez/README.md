# Solución NoSQL MongoDB: Catálogo e Inventario de Ropa (Manejo de Tallas)

Este proyecto propone un modelo de datos en **MongoDB** para la industria del vestuario y *e-commerce*, centrado en la estructuración eficiente de **arrays de tallas** para equilibrar velocidad de búsqueda y precisión de inventario.

---

## Criterios de Modelado de Datos

En el dominio de la ropa, las tallas representan una dimensión de variabilidad crítica. Se optó por una estrategia **híbrida de arrays** dentro del mismo documento:

| Colección | Campo | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `productos` | `tallasDisponibles` | **Array Simple de Cadenas** | Permite consultas de alta velocidad mediante índices *Multikey*. Ideal para los filtros de la interfaz gráfica donde el usuario selecciona tallas ("S", "M", "L"). |
| `productos` | `inventarioPorTalla` | **Array de Subdocumentos** | Mantiene la relación de 1:1 entre una talla específica, su stock en bodega y su código único de barras / SKU. |
| `productos` | `colores` | **Array Simple de Cadenas** | Facilita búsquedas por paleta de color sin generar colecciones adicionales. |
| `productos` | `detallesMaterial` | **Subdocumento Embebido** | Datos técnicos del textil (composición, instrucciones) de lectura constante junto con el producto. |
| `productos` | `marcaId` / `categoriaId` | **Referencias Normalizadas** | Relaciones 1:N hacia catalogación general que cambia con muy baja frecuencia. |

---

## Explicación de las Consultas (`queries.mongodb.js`)

1. **Filtrado Múltiple con `$in`:**  
   MongoDB evalúa el array `tallasDisponibles` y devuelve cualquier documento que contenga al menos uno de los elementos buscados.
2. **Evaluación de Conjuntos Completa con `$all`:**  
   Garantiza que el producto cumpla con disponer de **todas** las tallas requeridas simultáneamente (útil para campañas de tallas completas).
3. **Consulta Atómica con `$elemMatch`:**  
   Garantiza que la condición de búsqueda (`talla == "M"` Y `stock > 10`) se cumpla **en el mismo subdocumento del array**, evitando falsos positivos que ocurrirían si se buscaran los campos por separado.
4. **Modificación Fina de Arrays (`$addToSet` y `arrayFilters`):**  
   - `$addToSet`: Previene duplicados al agregar nuevas tallas a la oferta comercial.
   - `arrayFilters`: Permite actualizar únicamente el stock del subdocumento de la talla "30" sin alterar las demás ni reescribir todo el array.
5. **Aplanamiento Operacional (`$unwind` + `$group`):**  
   Descompone las estructuras compuestas para ejecutar sumatorias de inventario real distribuido por cada talla en el sistema.

---

## Estrategia de Índices Multiclave (*Multikey Indexes*)

Para optimizar las consultas que involucran filtrado sobre arrays de tallas e inventario:

```javascript
use('tienda_ropa_db');

// Índice multiclave sobre el array simple de tallas (Filtros de e-commerce)
db.productos.createIndex({ tallasDisponibles: 1 });

// Índice multiclave compuesto para búsquedas complejas de stock por talla
db.productos.createIndex({ "inventarioPorTalla.talla": 1, "inventarioPorTalla.stock": 1 });

// Índice compuesto para filtros por categoría y disponibilidad de talla
db.productos.createIndex({ categoriaId: 1, tallasDisponibles: 1 });
