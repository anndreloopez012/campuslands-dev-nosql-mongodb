# Evidencias — Heroes MOBA por rol

## 1. Seed
`db.registros.countDocuments()` → **6** documentos insertados correctamente.

## 2. Find all
Retorna los 6 heroes con `nombre`, `rol` y `activo`. Confirma que las 5 categorias de rol (tank, soporte, asesino, tirador, mago) estan representadas.

## 3. Find filtrado (tank activos)
Retorna **2** documentos: `Kordan` y `Bram`, ambos con `activo: true`.

## 4. Find filtrado (dificil + dano > 400)
Retorna **1** documento antes del update: `Rhaze` (dano 410). `Nyx` no aparece porque su dano inicial es 450 pero *si* aparece — retorna 2 documentos: `Rhaze` y `Nyx`.

## 5. UpdateOne
`Nyx` pasa de `activo: false` a `activo: true`, y su `estadisticas.dano` sube de 450 a 460.
Resultado esperado: `matchedCount: 1`, `modifiedCount: 1`.

## 6. DeleteOne (caso controlado)
Se intenta borrar un heroe que no existe (`HeroeInexistente`) para verificar manejo de errores.
Resultado esperado: `deletedCount: 0` y mensaje de aviso impreso en consola.

## 7. Reporte (aggregate)
Agrupa por `rol` y muestra `totalHeroes` y `danoPromedio`, ordenado de mayor a menor dano promedio. Con los datos del seed, `mago` (Nyx, 460) y `asesino` (Rhaze, 410) encabezan el reporte, seguidos por `tirador`, `soporte` y `tank`.

## Conclusion
El modelo embebido (estadisticas, habilidades, sinergias dentro del mismo documento) permitio resolver todas las consultas sin necesidad de `$lookup`, manteniendo los scripts compactos y legibles.
