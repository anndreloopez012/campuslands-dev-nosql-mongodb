# Solucion - 27. Usuarios streaming

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_usuarios_streaming`, coleccion `usuarios`.
- Documento por usuario con `generosFavoritos` como array embebido: son pocas preferencias que siempre se leen junto con el perfil del usuario, sin necesitar una coleccion de generos aparte.
- `plan` y `activo` son campos simples que permiten segmentar usuarios (activos/inactivos, por tipo de plan) tal como pide el enfoque "documentos de usuario".

## Archivos

- `seed.mongodb.js`: crea la coleccion `usuarios` con 6 perfiles de distintos planes.
- `queries.mongodb.js`: segmentacion por plan/estado/genero favorito, un conteo agrupado por plan y actualizaciones de reactivacion/preferencias.
- `evidencias.md`: resultados esperados de cada consulta.
