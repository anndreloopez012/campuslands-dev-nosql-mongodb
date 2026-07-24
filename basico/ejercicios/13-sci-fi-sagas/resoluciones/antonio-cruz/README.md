# Sagas de ciencia ficción

## Descripción

En este ejercicio se implementó una base de datos para almacenar sagas y películas de ciencia ficción utilizando MongoDB.

El objetivo principal fue practicar el uso de **referencias manuales**, donde un documento almacena el identificador de otro sin necesidad de utilizar `DBRef`.

## Colecciones

- **sagas**
- **peliculas**

## Modelo documental

### Colección `sagas`

```javascript
{
    codigo,
    nombre,
    creador,
    universo
}
```

### Colección `peliculas`

```javascript
{
    titulo,
    anio,
    rating,
    sagaCodigo
}
```

El campo **sagaCodigo** funciona como una referencia manual hacia la colección **sagas**. Este enfoque evita repetir información de la saga en cada película y facilita futuras actualizaciones.

## Índice implementado

```javascript
db.peliculas.createIndex({
    sagaCodigo: 1
})
```

El índice permite localizar rápidamente todas las películas que pertenecen a una misma saga.

## Archivos incluidos

- seed.mongodb.js
- queries.mongodb.js
- evidencias.md