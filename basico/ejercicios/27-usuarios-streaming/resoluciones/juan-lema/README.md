# 27. Usuarios streaming — juan-lema

## Base de datos
`campus_usuarios_streaming`, coleccion `registros`.

## Modelo documental
Cada documento representa un usuario. Se embebe el array `historial` (peliculas y canciones consumidas) y `generosFavoritos` porque ambos se leen siempre junto al usuario, tienen tamano acotado y no se comparten entre otros usuarios. No se usan referencias: el ejercicio no requiere un catalogo compartido.

```json
{
  nombre: String,
  email: String,
  pais: String,
  plan: "gratis" | "basico" | "premium",
  activo: Boolean,
  generosFavoritos: [String],
  historial: [ { titulo, tipo: "pelicula"|"cancion", fecha, calificacion } ],
  fechaRegistro: Date
}
```

## Archivos
- `seed.mongodb.js`: creacion de la base y 5 usuarios de ejemplo.
- `queries.mongodb.js`: consultas, actualizacion y eliminacion, con verificacion.
- `evidencias.md`: resultados esperados de cada consulta.

## Como ejecutar
Correr cada archivo en `mongosh` o en la extension MongoDB de VS Code, en orden: `seed.mongodb.js` luego `queries.mongodb.js`.
