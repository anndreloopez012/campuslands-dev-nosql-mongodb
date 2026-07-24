# Evidencias - Ejercicio 13

## 1. Todas las sagas
Retorna los 5 documentos de `sagas` (Horizonte Estelar, Cronicas de Andromeda, El Ultimo Reactor, Nexus Cuantico, Guardianes del Vacio).

## 2. Personajes activos de SAGA001
Retorna 2 documentos: "Kael Rion" y "Vex-9".

## 3. Referencia manual resuelta
`personaje.saga_id` de "Nira Solis" es `SAGA002`; la segunda consulta retorna el documento de la saga "Cronicas de Andromeda".

## 4. Update
`sagas.updateOne` sobre `SAGA003` retorna `{ matchedCount: 1, modifiedCount: 1 }`. La verificacion muestra `activa: false`.

## 5. Delete
`personajes.deleteOne` sobre "Dr. Ezra Kahn" retorna `{ deletedCount: 1 }`. La consulta de verificacion sobre `SAGA003` retorna arreglo vacio.

## 6. Reporte por saga
Retorna 5 grupos, cada uno con `total: 1`, excepto `SAGA001` con `total: 2` (antes del delete del punto 5, que no afecta SAGA001).
