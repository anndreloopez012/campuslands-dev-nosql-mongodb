# Solucion - 16. Drop de ropa urbana

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_ropa_drop`, coleccion `prendas`.
- `tallasDisponibles` se modela como array simple de strings porque el enfoque del ejercicio es manejar arrays de tallas: filtrar por talla (`$all`), quitar una talla agotada (`$pull`), agregar una talla sin duplicar (`$addToSet`) y contar tallas (`$size`).
- `colores` tambien se embebe como array corto: es un dato de lectura conjunta con la prenda, no requiere coleccion propia.

## Archivos

- `seed.mongodb.js`: crea la coleccion `prendas` con 6 prendas y sus tallas/colores.
- `queries.mongodb.js`: consultas y actualizaciones sobre el array `tallasDisponibles`.
- `evidencias.md`: resultados esperados de cada consulta.
