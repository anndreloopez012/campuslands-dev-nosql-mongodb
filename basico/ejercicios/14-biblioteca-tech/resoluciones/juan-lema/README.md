# Ejercicio 14 — Biblioteca tech (juan-lema)

## Contexto
Solucion MongoDB para una biblioteca de libros tecnicos. Base de datos
`campus_biblioteca_tech`, coleccion principal `registros` (libros).

## Modelo documental
- **Coleccion unica (`registros`)**: cada documento es un libro completo.
  No se referencian colecciones externas porque toda la informacion se
  consulta siempre junto al libro (no hay reuso masivo de autores ni
  crecimiento independiente de esos datos en este alcance basico).
- **`autor` como subdocumento embebido**: se lee siempre junto al libro y
  no necesita consultarse de forma aislada, por lo que embeber evita un
  `$lookup` innecesario. Si el catalogo creciera y los autores necesitaran
  perfiles propios (biografia, mas libros, busqueda por autor a gran
  escala), se moverian a una coleccion `autores` y se referenciaria por
  `autorId`.
- **`etiquetas` como array de strings**: permite filtrar por tema sin
  crear una coleccion aparte; es una lista corta y de solo lectura.
- **`resenas` como array de subdocumentos**: cada resena (`usuario`,
  `calificacion`, `comentario`) pertenece exclusivamente a ese libro y se
  muestra siempre junto a el, por eso se embebe en vez de referenciar.
- Nombres de campos en minuscula y consistentes (`disponible`,
  `copiasDisponibles`, `puntaje`) para facilitar filtros y proyecciones.

## Que se hizo
1. Se creo la coleccion `registros` y se insertaron 6 libros con
   `insertMany`, cubriendo distintas categorias y autores.
2. Se ejecutaron consultas de lectura con filtros, proyecciones limpias
   (`_id: 0`) y orden (`sort`).
3. Se actualizaron campos concretos con `updateOne` (`$set`, `$inc`,
   `$push`), cada una verificada con una consulta posterior.
4. Se genero un reporte con `aggregate` (`$group` + `$avg`) para contar
   libros por categoria y su puntaje promedio.
5. Se elimino un documento con `deleteOne` usando una condicion compuesta
   para evitar borrados accidentales, y se conto el total final con
   `countDocuments`.

## Que aprendi
- A distinguir cuando embeber (autor, resenas) frente a cuando referenciar
  seria mejor si los datos crecieran o se compartieran entre entidades.
- A construir un pipeline de `aggregate` simple para responder una
  pregunta de negocio (libros por categoria) en vez de solo hacer `find`.
- A verificar cada escritura con una consulta inmediata para confirmar que
  el resultado es el esperado antes de continuar.
