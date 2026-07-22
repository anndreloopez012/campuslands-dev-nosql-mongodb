# Evidencias — Ejercicio 14 Biblioteca tech (juan-lema)

## Seed
Se insertan 6 libros en `campus_biblioteca_tech.registros`: Domina las
bases NoSQL, Arquitecturas de microservicios, JavaScript para el mundo
real, Fundamentos de redes modernas, Ciencia de datos aplicada y
Seguridad ofensiva basica.

## 1. find({})
Devuelve los 6 documentos completos insertados.

## 2. Libros disponibles (titulo y copias)
Antes del update: Domina las bases NoSQL (4), Arquitecturas de
microservicios (2), Fundamentos de redes modernas (6), Ciencia de datos
aplicada (3). Quedan fuera "JavaScript para el mundo real" y "Seguridad
ofensiva basica" por `disponible: false`.

## 3. Puntaje >= 85
Ciencia de datos aplicada (95), Arquitecturas de microservicios (92),
Domina las bases NoSQL (88).

## 4. Libros de Elena Vargas
"Domina las bases NoSQL" (2021) y "Ciencia de datos aplicada" (2023).

## 5. Etiqueta "backend"
"Domina las bases NoSQL" y "Arquitecturas de microservicios".

## 6. Update JavaScript para el mundo real
`matchedCount: 1, modifiedCount: 1`. Verificacion: `disponible` pasa a
`true` y `copiasDisponibles` pasa de 0 a 3.

## 7. Push resena a Fundamentos de redes modernas
`matchedCount: 1, modifiedCount: 1`. Verificacion: `resenas` queda con 2
elementos, incluyendo la nueva de "monic_it".

## 8. Reporte por categoria (aggregate)
Cada categoria (bases de datos, arquitectura, programacion, redes, datos,
seguridad) aparece con `totalLibros: 1` y `promedioPuntaje` igual al
puntaje de su unico libro, ya que no hay categorias repetidas en el seed.

## 9. Delete Seguridad ofensiva basica
Cumple `disponible: false`, por lo que la condicion compuesta hace match:
`deletedCount: 1`. La verificacion posterior no retorna documentos.

## 10. countDocuments
Resultado esperado: `5` (6 insertados − 1 eliminado).
