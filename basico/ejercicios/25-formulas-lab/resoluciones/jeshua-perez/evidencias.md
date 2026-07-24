# Evidencias - 25. Formula lab

## Ejecucion

1. `seed.mongodb.js` sobre `campus_formulas_lab`: `insertMany` reporta `insertedCount: 5` en `formulas`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Componente "Agua destilada": retorna 2 documentos (Limpiador Multiusos Citrico, Shampoo Base Neutro).
2. Experimentales inestables: retorna 2 documentos (Solucion Reactiva X12, Compuesto Termico Z9).
3. Formulas con mas de 2 componentes: retorna 3 documentos (Limpiador Multiusos Citrico, Gel Antibacterial, Shampoo Base Neutro).
4. Proyeccion con total de componentes: retorna 5 documentos, por ejemplo `{ nombre: "Solucion Reactiva X12", totalComponentes: 2 }`.
5. `updateOne` con `$push` sobre "Solucion Reactiva X12": `matchedCount: 1`, `modifiedCount: 1`; su array pasa a 3 componentes.
6. `updateOne` con `arrayFilters` sobre "Gel Antibacterial": `matchedCount: 1`, `modifiedCount: 1`; el componente "Carbomer" pasa de 10 gr a 15 gr.

## Conclusion

Los arrays de subdocumentos permitieron modelar formulas con multiples componentes, y operadores como `$push`, `$expr`/`$size` y `arrayFilters` cubrieron tanto la busqueda como la edicion puntual de un componente dentro del array.
