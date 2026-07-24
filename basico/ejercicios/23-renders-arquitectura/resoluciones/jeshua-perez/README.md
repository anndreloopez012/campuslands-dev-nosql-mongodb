# Solucion - 23. Renders arquitectura 3D

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_renders_arquitectura`, coleccion `renders`.
- `cliente` se guarda como campo de texto simple dentro de cada render (no como referencia a una coleccion `clientes`) porque el enfoque del ejercicio es consultar y agrupar directamente por ese campo, sin necesitar datos adicionales del cliente.
- `entregado` (booleano) y `fechaEntrega` (Date) permiten distinguir el estado de cada proyecto por cliente.

## Archivos

- `seed.mongodb.js`: crea la coleccion `renders` con 6 proyectos de 3 clientes.
- `queries.mongodb.js`: consultas filtradas por cliente, un reporte de facturacion agrupado por cliente y un `distinct`.
- `evidencias.md`: resultados esperados de cada consulta.
