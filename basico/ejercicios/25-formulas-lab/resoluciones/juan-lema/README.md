# 25. Formula lab — juan-lema

## Base de datos
`campus_formulas_lab`

## Coleccion
`registros`: cada documento representa un compuesto quimico con sus
elementos embebidos en un array `componentes` (elemento, simbolo,
cantidad). Se embebe porque los componentes siempre se leen junto con
el compuesto y no se comparten ni crecen de forma independiente, por
lo que no se justifica una coleccion aparte ni referencias.

## Campos principales
- `nombre`, `formula`, `categoria` (organico/inorganico), `estado`
- `masaMolar` (numero)
- `activo` (booleano)
- `componentes` (array de subdocumentos)
- `etiquetas` (array de strings)

## Archivos
- `seed.mongodb.js`: crea/limpia la coleccion e inserta 6 compuestos.
- `queries.mongodb.js`: find general, find filtrado, updateOne,
  deleteOne y una aggregate de resumen por categoria, cada uno con
  su verificacion.
- `evidencias.md`: resultados esperados de cada consulta.

## Como ejecutar
1. Abrir `mongosh` o conectar via extension MongoDB de VS Code.
2. Ejecutar `seed.mongodb.js` completo.
3. Ejecutar `queries.mongodb.js` bloque por bloque.
