# Ejercicio 5 - Liga de futbol campus

## Autor
juan-lema

## Modelo documental

Se usa una unica coleccion `registros` dentro de la base `campus_liga_futbol`, donde cada documento representa un jugador.

- **Documento principal (jugador):** nombre, equipo, posicion, estado activo, goles, asistencias y partidos jugados. Se mantiene todo en un solo documento porque siempre se consulta junto (perfil del jugador) y el volumen de datos por jugador es pequeno y estable.
- **Array embebido `tarjetas`:** cada tarjeta (amarilla/roja) se embebe como subdocumento dentro del jugador, en lugar de crear una coleccion aparte, porque las tarjetas no tienen sentido fuera del contexto del jugador, se leen siempre junto con el resto de su informacion y su cantidad es baja (no crecen sin limite).
- No se uso referencia a una coleccion `equipos` separada porque el ejercicio no requiere consultar datos extensos del equipo (como plantilla completa, historial, etc.); el nombre del equipo como string es suficiente para filtrar y agrupar.

## Instrucciones para ejecutar
1. Abrir MongoDB Shell o Compass.
2. Ejecutar `seed.mongodb.js` para crear la base y cargar los 6 jugadores.
3. Ejecutar `queries.mongodb.js` para correr las consultas de proyeccion, ordenamiento, update y delete.
4. Revisar `evidencias.md` para el detalle de resultados esperados.
