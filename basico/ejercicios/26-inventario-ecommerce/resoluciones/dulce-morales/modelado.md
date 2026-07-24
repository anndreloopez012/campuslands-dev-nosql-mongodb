# Solución Ejercicio 26: Inventario E-commerce (Autos y Motos)

## Descripción del Problema
Construcción de una solución en MongoDB para gestionar el inventario de una tienda en línea enfocada en la venta de repuestos y accesorios para autos y motos. El sistema permite controlar el stock disponible, categorías, precios y alertas de bajo inventario de manera eficiente.

## Decisiones de Diseño 
- **Colección Principal**: Se utiliza `productos` en plural y minúsculas, cumpliendo con la convención estándar.
- **Subdocumentos **: Se emplea un objeto anidado (`detalles_tecnicos`) para almacenar especificaciones particulares del producto (compatibilidad, tipo de motor, material) que se leen en conjunto con el producto principal.
- **Arrays**: Se usa un array de `etiquetas` (`tags`) para facilitar filtros por características y palabras clave.
- **Actualización Atómica**: Uso de operadores como `$inc` para disminuir o reponer stock y `$set` para modificar precios o estados.