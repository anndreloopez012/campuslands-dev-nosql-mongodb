## Datos registrados

Se insertaron cinco jugadores pertenecientes a diferentes facultades y categorías para disponer de información suficiente durante las pruebas.

## Consultas comprobadas

Durante la validación se ejecutaron correctamente las siguientes operaciones:

- Consulta general de jugadores.
- Proyección de campos específicos.
- Búsqueda por categoría.
- Búsqueda por estado del jugador.
- Conteo total de documentos con `countDocuments()`.
- Conteo de jugadores activos mediante filtros.

## Actualización realizada

Se incrementó en una unidad la cantidad de victorias del jugador **Diego Morales** utilizando el operador `$inc`.

## Consideraciones del diseño

Para este escenario un único documento por jugador resulta suficiente. Si la aplicación evolucionara podrían agregarse colecciones para torneos, partidos o resultados individuales y relacionarlas mediante referencias para evitar duplicar información.