# Datos cargados

Se registraron tres sagas de ciencia ficción y cinco películas relacionadas mediante una referencia manual basada en un código.

## Consultas verificadas

Las pruebas realizadas incluyen:

- Consulta completa de sagas.
- Consulta completa de películas.
- Búsqueda de películas pertenecientes a una saga específica.
- Consulta por rating.
- Reporte ordenado por calificación.

## Actualización aplicada

Se modificó el **rating** de la película **Dune**, pasando de **8.0** a **8.2** mediante `updateOne()`.

## Comentario técnico

En este escenario fue preferible utilizar referencias manuales porque varias películas pertenecen a la misma saga. Si el nombre de una saga cambia, únicamente debe actualizarse un documento en la colección **sagas**, evitando duplicar información en todas las películas relacionadas.