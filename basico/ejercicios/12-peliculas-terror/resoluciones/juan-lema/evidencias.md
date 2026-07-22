# Evidencias — Ejercicio 12 Catalogo de peliculas de miedo (juan-lema)

## Seed
Se insertan 6 peliculas en `campus_peliculas_terror.registros`: El Sotano de Ceniza, Cinta de Vigilancia 7, La Ultima Cosecha, Susurros del Manicomio, Marea Nocturna y El Reflejo Vacio.

## 1. find({})
Devuelve los 6 documentos completos insertados.

## 2. Peliculas disponibles (titulo y rating)
El Sotano de Ceniza (7.4), Cinta de Vigilancia 7 (6.1), La Ultima Cosecha (8.2), Marea Nocturna (7.9) y El Reflejo Vacio (4.9). Susurros del Manicomio queda fuera por `disponible: false`.

## 3. Rating >= 8
La Ultima Cosecha (8.2). Es la unica pelicula que supera el umbral.

## 4. Filtro por etiqueta "posesion"
El Sotano de Ceniza, Susurros del Manicomio y El Reflejo Vacio.

## 5. Update Cinta de Vigilancia 7
`matchedCount: 1, modifiedCount: 1`. Verificacion: `rating` pasa de 6.1 a 6.5 y `premios` queda como `[{ nombre: "Morbido Fest Mencion Especial", anio: 2019 }]`.

## 6. Update El Reflejo Vacio
`matchedCount: 1, modifiedCount: 1`. Verificacion: `disponible` pasa de `true` a `false`.

## 7. Delete El Reflejo Vacio
`deletedCount: 1`. La consulta de verificacion posterior no retorna documentos.

## 8. countDocuments
Resultado esperado: `5` (6 insertados − 1 eliminado).
