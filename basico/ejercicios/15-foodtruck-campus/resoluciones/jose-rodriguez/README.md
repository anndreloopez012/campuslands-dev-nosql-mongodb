# Solución NoSQL MongoDB: Gestión y Modificación de Pedidos de Comida

Este proyecto implementa una arquitectura de base de datos NoSQL en **MongoDB** diseñada para plataformas de entrega de comida a domicilio (*Food Delivery*), enfocándose en la **alta frecuencia de inserciones (`insert`) y actualizaciones evolutivas (`update`)** de pedidos en tiempo real.

---

## Criterios de Modelado de Datos NoSQL

El modelado resuelve las necesidades de atomicidad y velocidad de respuesta requeridas en la gestión de restaurantes:

| Colección | Campo | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `pedidos` | `items` | **Array de Subdocumentos (Snapshot)** | Almacena los platos comprados con su precio al momento de la transacción. Previene que cambios futuros en el menú alteren historiales contables. |
| `pedidos` | `direccionEntrega` | **Subdocumento Embebido (Snapshot)** | Copia la dirección en el instante de compra. Si el cliente actualiza su libreta de direcciones más tarde, el pedido mantiene su destino original. |
| `pedidos` | `historialEstados` | **Array de Subdocumentos Embebidos** | Mantiene una línea de tiempo auditable de la evolución del pedido (`RECIBIDO`, `EN_PREPARACION`, `EN_CAMINO`, `ENTREGADO`). |
| `pedidos` | `clienteId` / `restauranteId` | **Referencias Normalizadas** | Relaciones 1:N hacia las colecciones independientes de `clientes` y `restaurantes`. |
| `restaurantes` | `menu` | **Array de Subdocumentos** | Menú integrado dentro del restaurante para lectura en una sola operación de E/S. |

---

## Justificación de Operaciones de Manipulación de Datos (`queries.mongodb.js`)

1. **Inserción Atómica (`insertOne`):**  
   Crea la entidad de orden garantizando que los datos de entrega y el detalle de ítems queden guardados en un único documento de forma consistente.
2. **Modificación de Carrito con `$push` e `$inc`:**  
   Demuestra la potencia de los operadores atómicos de MongoDB. Permite incrustar un nuevo elemento al array de `items` y recalcular inmediatamente el `montoTotalQ` y `granTotalQ` sin necesidad de leer y sobreescribir el documento completo.
3. **Transición de Estado y Asignación con `$set` y `$push`:**  
   Asigna información de transporte (`repartidor`) y actualiza el estado general a la vez que registra la traza temporal dentro del array `historialEstados`.
4. **Actualización Masiva con `$updateMany`:**  
   Simula eventos operacionales por lote en la cocina del restaurante para actualizar múltiples pedidos en paralelo.
5. **Reporte Consolidado con `$lookup` y `$group`:**  
   Une las métricas acumuladas de la colección `pedidos` con la metadata del negocio (`restaurantes`), calculando promedios de tickets de venta.

---

## Estrategia de Índices para Entornos de Alta Demanda

Para respaldar consultas frecuentes de estado de pedidos y asignaciones de repartidores en tiempo real:

```javascript
use('comida_db');

// Índice compuesto para consultar pedidos activos de un cliente ordenados por fecha
db.pedidos.createIndex({ clienteId: 1, estado: 1 });

// Índice para el tablero de cocina de restaurantes
db.pedidos.createIndex({ restauranteId: 1, estado: 1 });

// Índice para consultar historial por rango de fechas
db.pedidos.createIndex({ "historialEstados.fechaHora": -1 });
