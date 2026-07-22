# Resolución: 14. Biblioteca Tech


## Decisión de Diseño 

1. **Autor (Subdocumento):** Se embebe el objeto `autor` (`nombre` y `nacionalidad`) dentro del documento del libro, ya que para un contexto de biblioteca técnica la información del autor suele leerse junto con la ficha del libro.
2. **Embebido de Etiquetas (Array de Strings):** Los temas principales (`etiquetas`) se almacenan como un array para facilitar búsquedas indexables por tecnología.
3. **Embebido de Reseñas (Array de Objetos):** Las valoraciones de lectores se embeben dentro del libro debido a que su número es acotado.
