# 07. Garaje de autos de lujo — juan-lema

## Modelo documental

Base de datos: `campus_garaje_lujo`
Colección: `registros`

Cada documento representa un auto de lujo disponible en el garaje. Se usa un **solo documento embebido por auto** (sin referencias externas) porque:

- Los datos (marca, modelo, precio, potencia, características) siempre se leen juntos, nunca por separado.
- No hay relación 1-N que crezca sin límite ni datos compartidos entre autos.
- El array `caracteristicas` es corto y pertenece exclusivamente al auto, por lo que se embebe en vez de referenciar.

### Esquema

```js
{
  marca: String,
  modelo: String,
  anio: Number,
  precio: Number,        // en USD
  potencia_hp: Number,
  categoria: String,     // "deportivo" | "sedan" | "suv" | "clasico"
  disponible: Boolean,
  caracteristicas: [String]
}
```

## Archivos

- `seed.mongodb.js`: creación de la base y los 5 documentos.
- `queries.mongodb.js`: consultas de filtro numérico, actualización y reporte.
- `evidencias.md`: resultados esperados de cada consulta.

## Cómo ejecutar

1. Abrir `mongosh` o conectar con MongoDB for VS Code.
2. Ejecutar `seed.mongodb.js` completo.
3. Ejecutar `queries.mongodb.js` bloque por bloque y comparar con `evidencias.md`.
