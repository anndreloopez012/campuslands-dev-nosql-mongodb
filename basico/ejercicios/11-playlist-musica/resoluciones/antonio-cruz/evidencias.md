# Información cargada

Se registraron cinco playlists con distintos géneros musicales, niveles de energía y listas de canciones para validar el uso de arrays en MongoDB.

## Pruebas realizadas

Las consultas permitieron verificar correctamente:

- Listado general de playlists.
- Proyección de información principal.
- Búsqueda por nivel de energía.
- Búsqueda por estado público.
- Consulta utilizando un elemento contenido dentro de un array.

## Actualización ejecutada

A la playlist **Modo Entreno** se le agregó la canción **Eye of the Tiger** mediante el operador `$push`, comprobando el funcionamiento de las actualizaciones sobre arrays.

## Observaciones

El uso de arrays simplifica el modelo cuando los elementos pertenecen exclusivamente al documento principal. Si las canciones necesitaran almacenar información adicional o compartirse entre varias playlists, sería recomendable crear una colección independiente y utilizar referencias.