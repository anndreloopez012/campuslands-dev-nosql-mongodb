# Evidencias

## Validación

Se creó la colección `dispositivos` utilizando `$jsonSchema`.

La validación requiere los campos:

- nombre
- categoria
- marca
- precio
- activo

También se agregó una restricción para evitar valores negativos en el precio.

## Inserción

Se ejecutó correctamente `seed.mongodb.js` y se registraron cinco documentos que cumplen con la estructura definida.

## Consultas

Se verificó el funcionamiento de consultas para:

- Mostrar todos los dispositivos.
- Filtrar dispositivos activos.
- Buscar por categoría.
- Consultar productos con precio mayor a Q2000.
- Generar reporte ordenado por precio.

## Actualización

Se actualizó el dispositivo **Monitor 27 pulgadas**, cambiando su estado de `activo: false` a `activo: true`.

La consulta de validación confirmó que el documento mantiene la estructura esperada.