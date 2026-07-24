# Ejercicio 21 - Portafolio de dibujo

**Autor:** juan-lema

## Modelo elegido

Coleccion unica `registros` en la base `campus_portafolio_dibujo`, con un documento por obra. Se usa un solo nivel de documentos (sin colecciones separadas) porque cada obra tiene un unico artista y no hay relaciones que crezcan de forma independiente. Se embebe:

- `dimensiones` como subdocumento (`ancho_cm`, `alto_cm`): siempre se lee junto con la obra.
- `etiquetas` como arreglo: permite busqueda flexible por tema/estilo sin tablas intermedias.

No se referencia al artista en una coleccion aparte porque el volumen es bajo y no se requieren consultas independientes sobre artistas fuera de este contexto.

## Que se practico

- Insercion de 6 documentos coherentes con el dominio (tecnica, categoria, etiquetas, valoracion, dimensiones).
- Consultas con filtros combinados (`$in`, `$gte`) y proyecciones.
- Reporte agregado (`$group`, `$avg`) de obras por artista.
- `updateOne` con `$set` y `$push`, validando `matchedCount`.
- `deleteOne` controlado, verificando existencia previa con `findOne`.

## Aprendizajes

Modelar pensando primero en las preguntas del negocio (obras publicadas, por tecnica, por artista) ayuda a decidir que campos indexar mentalmente y cuales conviene embeber vs. referenciar.
