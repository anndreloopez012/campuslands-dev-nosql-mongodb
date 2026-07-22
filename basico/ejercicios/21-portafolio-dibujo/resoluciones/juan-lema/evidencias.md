# Evidencias - Ejercicio 21 (Portafolio de dibujo)

## 1. Obras publicadas
Devuelve titulo, artista y valoracion de las obras con `publicado: true` (5 de 6 documentos, antes de la actualizacion).

## 2. Etiqueta "estudio" + tecnica lapiz/carboncillo
Devuelve "Retrato al carboncillo", "Boceto de personaje anime" y "Estudio de manos": las tres obras cumplen ambos filtros.

## 3. Valoracion >= 4.3, orden descendente
Orden esperado: Naturaleza muerta con frutas (4.9), Escena urbana nocturna (4.4), Retrato al carboncillo (4.6) reordenado -> queda 4.9, 4.6, 4.4.

## 4. Reporte por artista (aggregate)
- Lucia Fonseca: 2 obras, promedio 4.2
- Diego Serna: 2 obras, promedio 4.1
- Marco Vidal: 2 obras, promedio 4.65

## 5. Actualizacion
`matchedCount: 1`, `modifiedCount: 1`. El documento "Boceto de personaje anime" queda con `publicado: true` y la etiqueta `"portafolio"` agregada al arreglo `etiquetas`.

## 6. Eliminacion
Se elimina "Escena urbana nocturna" tras confirmar su existencia con `findOne`. La coleccion queda con 5 documentos.

## 7. Estado final
`db.registros.find()` retorna 5 documentos, reflejando la actualizacion y la eliminacion aplicadas.
