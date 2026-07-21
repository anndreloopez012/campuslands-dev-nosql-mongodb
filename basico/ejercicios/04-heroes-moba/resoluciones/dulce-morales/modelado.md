# Solución: 04. Héroes MOBA por Rol

## Modelo NoSQL
Utilice una sola colección principal llamada `heroes`. Busque utilizar un diseño embebido para incluir las habilidades, estadísticas base y roles secundarios dentro del propio documento del héroe, ya que esta información se consulta de forma conjunta casi siempre.

### Criterios de Diseño
- **Embebido de subdocumentos**: Las `estadisticas` y `habilidades` viven dentro del documento principal porque dependen 100% de la identidad del héroe y no crecen indefinidamente.
- **Arrays**: Los `roles` y `etiquetas` son arreglos simples que permiten filtrar héroes que desempeñan múltiples funciones (ej. Tanque / Iniciador).

## Estructura de la Base de Datos
- **Base de Datos**: `campus_heroes_moba`
- **Colección**: `heroes`