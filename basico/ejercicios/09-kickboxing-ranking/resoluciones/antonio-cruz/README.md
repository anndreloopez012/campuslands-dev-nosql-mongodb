## Descripción

Se desarrolló una base de datos para administrar un ranking de peleadores de kickboxing utilizando documentos simples en MongoDB.

El ejercicio está orientado al uso de operadores lógicos para construir filtros más completos sobre la información almacenada.

## Colección utilizada

- **peleadores**

## Modelo documental

Cada documento almacena la información completa de un peleador.

```javascript
{
    nombre,
    categoria,
    pais,
    victorias,
    derrotas,
    ranking,
    activo
}
```

No fue necesario utilizar subdocumentos ni referencias porque toda la información pertenece a una única entidad.

## Índice implementado

```javascript
db.peleadores.createIndex({
    ranking: 1
})
```

Este índice mejora las consultas donde se consulta el ranking de los competidores.

## Archivos incluidos

- seed.mongodb.js
- queries.mongodb.js
- evidencias.md