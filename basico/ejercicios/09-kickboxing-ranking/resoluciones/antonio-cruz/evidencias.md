## Inserción de información

Se registraron cinco peleadores con diferentes categorías, posiciones del ranking y récord profesional.

## Validación de consultas

Las consultas ejecutadas permiten comprobar:

- Consulta general de documentos.
- Proyección de campos específicos.
- Uso de `$and`.
- Uso de `$or`.
- Uso de `$not`.

## Actualización realizada

Se incrementó en una unidad la cantidad de victorias del peleador **Marco Torres** utilizando el operador `$inc`.

## Comentarios técnicos

El modelo es suficientemente simple para un ejercicio básico. Si el sistema creciera, sería conveniente separar eventos, entrenadores o gimnasios en colecciones independientes y relacionarlos mediante referencias para evitar duplicidad de información.