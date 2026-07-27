# Solución NoSQL MongoDB: Gestión de Viajes (Fechas y Presupuestos)

Este proyecto implementa una arquitectura de base de datos en **MongoDB** diseñada para agencias de viajes e itinerarios turísticos, optimizada para procesar **operaciones basadas en rangos de fechas (`ISODate`) y cálculos financieros de presupuesto**.

---

## Criterios de Modelado de Datos NoSQL

El esquema equilibra la normalización de catálogo con el embebido estratégico de itinerarios y finanzas:

| Colección | Campo | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `viajes` | `fechas` | **Subdocumento Embebido** | Agrupa la ventana temporal (`fechaInicio`, `fechaFin`, `duracionDias`). Permite aplicar filtros e índices de rango coordinados. |
| `viajes` | `presupuesto` | **Subdocumento Embebido** | Consolida los rubros financieros (vuelo, hospedaje, viáticos, totales). Facilita operaciones atómicas de validación de crédito o margen. |
| `viajes` | `desgloseActividades` | **Array de Subdocumentos** | Registra las excursiones o itinerarios diarios asociados directamente al viaje con sus costos individuales. |
| `viajes` | `etiquetas` | **Array Simple** | Palabras clave para filtros rápidos de preferencias de usuario (ej. "Trekking", "Relax"). |
| `viajes` | `pasajeroId` / `destinoId` | **Referencias Normalizadas** | Vinculan con `pasajeros` y `destinos`. Previene duplicar datos maestros si el cliente realiza múltiples viajes. |

---

## Explicación de las Consultas (`queries.mongodb.js`)

1. **Rango Temporal Estándar (`$gte`, `$lte`):**  
   Utiliza objetos nativos `ISODate` para filtrar viajes planificados en períodos específicos (segundo semestre de 2026) aprovechando el ordenamiento cronológico binario de BSON.
2. **Evaluación de Margen Financiero (`$subtract`, `$expr`):**  
   Demuestra cómo comparar dinámicamente dos campos del mismo documento (`totalGastosUSD` vs `presupuestoMaximoUSD`) para proyectar el remanente a favor.
3. **Filtro de Arrays de Actividades (`$elemMatch`):**  
   Asegura que la coincidencia de fecha y costo mínimo de una excursión ocurran dentro del **mismo objeto** del array `desgloseActividades`.
4. **Cálculos de Fechas Avanzados (`$dateDiff`):**  
   Calcula la diferencia exacta en días entre la salida y el retorno directamente en el servidor de base de datos, obteniendo el costo real promedio por día.
5. **Agregación Temporal (`$year`, `$month`, `$group`):**  
   Descompone las fechas de inicio para construir métricas consolidadas mensuales de presupuesto e ingresos proyectados.

---

## Estrategia de Índices para Consultas Temporales y Financieras

Para garantizar un rendimiento óptimo (*IXSCAN*) en consultas que combinan calendario y presupuesto:

```javascript
use('agencia_viajes_db');

// Índice compuesto para búsquedas por rango de fecha de inicio y estado
db.viajes.createIndex({ "fechas.fechaInicio": 1, estadoReserva: 1 });

// Índice para filtros de presupuesto y costo total
db.viajes.createIndex({ "presupuesto.totalGastosUSD": 1, "presupuesto.presupuestoMaximoUSD": 1 });

// Índice multiclave para búsqueda de actividades por fecha
db.viajes.createIndex({ "desgloseActividades.fecha": 1 });
