# Información registrada

Se insertaron cinco libros pertenecientes a distintas áreas de tecnología como programación, JavaScript y bases de datos.

## Validación de consultas

Durante las pruebas se verificó correctamente:

- Consulta general del catálogo.
- Proyección mostrando únicamente título, autor y categoría.
- Consulta de libros disponibles.
- Filtro por categoría.
- Consulta utilizando un filtro por año de publicación.

## Actualización realizada

Se modificó el estado del libro **Clean Code**, marcándolo como no disponible mediante `updateOne()`.

## Comentario técnico

Para este escenario una sola colección es suficiente porque no existen relaciones entre entidades. Si el sistema creciera podrían incorporarse colecciones para préstamos, usuarios o editoriales utilizando referencias para evitar redundancia de datos.