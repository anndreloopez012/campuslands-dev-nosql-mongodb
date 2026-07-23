# Datos cargados

Se registraron cinco pedidos iniciales con diferentes productos y estados para simular el funcionamiento diario del foodtruck.

## Consultas verificadas

Las pruebas realizadas permitieron comprobar:

- Consulta completa de pedidos.
- Proyección con la información principal.
- Búsqueda de pedidos pendientes.
- Inserción de un nuevo pedido utilizando `insertOne()`.
- Actualización del estado de un pedido mediante `updateOne()`.

## Actualización realizada

El pedido correspondiente a **María Gómez** cambió de **Pendiente** a **Entregado**, simulando el flujo normal de atención del negocio.

## Comentario técnico

Un documento por pedido resulta suficiente para este escenario básico. En una implementación más completa podrían separarse clientes, productos y pagos en colecciones independientes para evitar duplicidad de información y facilitar futuras consultas.