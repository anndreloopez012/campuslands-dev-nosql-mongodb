# 18. Rutas turísticas — juan-lema

## Base de datos
`campus_rutas_turisticas` → colección `rutas`

## Modelo documental
Cada documento de `rutas` representa una ruta turística completa. Se decidió **embeber** en vez de referenciar:

- **`paradas` (array de subdocumentos)**: se leen siempre junto con la ruta (nadie consulta una parada sin su ruta), no crecen de forma descontrolada (una ruta tiene pocas paradas) y no se comparten entre rutas distintas. Cumple el criterio "se lee junto, se escribe junto".
- **`guia` (subdocumento)**: es información propia y exclusiva de esa ruta (un guía asignado a un horario/ruta específica), de tamaño fijo y pequeño, así que no amerita una colección aparte ni una referencia.
- **`etiquetas` (array de strings)**: valores simples usados para filtrar (`$in`), no requieren metadata propia.

No se usaron referencias porque ninguna entidad relacionada crece de forma independiente ni se comparte entre múltiples rutas en este alcance del ejercicio (nivel básico).

### Esquema
```
{
  nombre: String,
  ciudad: String,
  categoria: String,        // aventura | cultural | gastronomica | naturaleza | playa
  duracionHoras: Number,
  dificultad: String,       // baja | media | alta
  precioUSD: Number,
  activa: Boolean,
  calificacion: Number,     // 0 a 5
  etiquetas: [String],
  guia: { nombre: String, telefono: String, idiomas: [String] },
  paradas: [{ nombre: String, tipo: String, duracionMinutos: Number }]
}
```

## Archivos
- `seed.mongodb.js`: creación de la base, la colección y la carga de 5 documentos originales.
- `queries.mongodb.js`: CRUD completo (find general, find filtrado, updateOne, deleteOne) con verificación tras cada operación.
- `evidencias.md`: resultados esperados de cada consulta.

## Cómo ejecutar
1. Abrir `seed.mongodb.js` en MongoDB Shell / Compass / extensión de VS Code y ejecutarlo completo.
2. Ejecutar `queries.mongodb.js` bloque por bloque.
3. Comparar la salida con `evidencias.md`.
