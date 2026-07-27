
# Solución NoSQL MongoDB: Concesionaria Automotriz (Stock y Alertas)

Este proyecto implementa una arquitectura NoSQL en **MongoDB** para una red de concesionarias de **Autos y Motos**, diseñada para optimizar la trazabilidad de inventarios, alertas de desabastecimiento (*Stock Reorder Points*) y análisis consolidado por sala de ventas.

---

## 1. Criterios de Modelado NoSQL

| Colección | Campo / Estructura | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `vehiculos` | `stockGeneral` | **Subdocumento Embebido** | Consolida el total global de stock (`actual`, `minimoAlerta`, `nivelAlerta`) para disparar triggers de compra de forma inmediata. |
| `vehiculos` | `stockPorSucursal` | **Array de Subdocumentos** | Desglosa las unidades en existencia por cada agencia (`sucursalId`, `cantidad`). Permite auditar inventario físico sin requerir tablas relacionales cruzadas. |
| `vehiculos` | `especificaciones` | **Subdocumento Embebido** | Atributos técnicos 1:1 (`motorCC`, `combustible`, `transmision`) asociados intrínsecamente al modelo. |
| `vehiculos` | `equipamiento` | **Array Simple de Cadenas** | Lista de prestaciones y accesorios (`"4x4"`, `"Frenos ABS"`). Indexable mediante *Multikey Index*. |
| `sucursales` | `_id` | **Referencia Manual (1:N)** | Catálogo de puntos de venta independientes. Sus IDs (`"SUC-001"`) se referencian dentro del array de inventario de cada vehículo. |

---

## 2. Explicación de las Consultas Avanzadas (`queries.mongodb.js`)

1. **Monitor de Alertas (`$match` + `$in`):** 
   * Filtra y despliega los vehículos que requieren reabastecimiento urgente (`"STOCK_BAJO"`, `"CRITICO"`), ordenados de menor a mayor disponibilidad.
2. **Top Unidades Críticas (`.sort()` + `.limit()`):** 
   * Recupera los 3 modelos con menor stock disponible globalmente para gestión logística prioritaria.
3. **Análisis Financiero por Categoría (`$group` + `$avg` + `$sum`):** 
   * Agrupa los registros por `tipoVehiculo` (`AUTO` vs `MOTO`) calculando la cantidad total de unidades en inventario y el precio promedio de catálogo.
4. **Inventario por Agencia (`$unwind` + `$group` + `$multiply`):** 
   * Desestructura el array `stockPorSucursal` para consolidar el número total de unidades físicas y calcular el valor financiero total del stock almacenado en cada sucursal.
5. **Análisis de Equipamiento Top (`$match` + `$unwind` + `$addToSet`):** 
   * Analiza los vehículos con disponibilidad adecuada (`"NORMAL"`), desglosa su equipamiento y agrupa por accesorios para evaluar patrones de equipamiento popular.

---

## 3. Estrategia de Índices Recomendados

Para garantizar lecturas e informes logísticos inmediatos sobre miles de VINs:

```javascript
use('automotriz_stock_db');

// Índice para filtros instantáneos por nivel de alerta de stock
db.vehiculos.createIndex({ "stockGeneral.nivelAlerta": 1 });

// Índice compuesto por tipo de vehículo y ordenamiento por precio
db.vehiculos.createIndex({ tipoVehiculo: 1, precioUSD: -1 });

// Índice multiclave para búsquedas por equipamiento o características
db.vehiculos.createIndex({ equipamiento: 1 });

// Índice para acelerar agregaciones por sucursal dentro del array
db.vehiculos.createIndex({ "stockPorSucursal.sucursalId": 1 });
