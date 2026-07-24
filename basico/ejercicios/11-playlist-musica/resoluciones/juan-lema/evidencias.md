# Evidencias — Playlist por energia

## 1) Listar todas las canciones
Retorna los 6 documentos con `nombre` y `energia`. Confirma la carga inicial del seed.

## 2) Canciones activas con energia alta (>= 7)
Antes del update del punto 5, retorna:
- Levantate (9)
- Subida (7)

## 3) Canciones con etiqueta "chill"
Retorna:
- Atardecer Lento
- Noche Calma (antes de ser eliminada en el punto 6)

## 4) Update — incrementar reproducciones de "Modo Foco"
`reproducciones` pasa de 512 a 513. Verificado con `findOne`.

## 5) Update — reactivar "Corre o Cae"
`activo` pasa de `false` a `true` y `etiquetas` queda `["gym", "correr", "reactivada"]`. Con este cambio, la consulta 2 (energia alta >= 7) pasaria a incluir tambien "Corre o Cae" (8) si se ejecuta de nuevo.

## 6) Delete — eliminar "Noche Calma"
`deleteOne` elimina el documento. `countDocuments({ nombre: "Noche Calma" })` retorna `0`, confirmando el borrado.

## Conclusion
El modelo con array simple (`etiquetas`) permitio filtrar canciones por estado de animo sin necesidad de una coleccion aparte, y las operaciones CRUD sobre `registros` cubren insercion masiva, lectura filtrada, actualizacion parcial (`$inc`, `$set`, `$push`) y eliminacion puntual.
