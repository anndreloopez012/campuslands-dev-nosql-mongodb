# Evidencias — 25. Formula lab

## 1. Find general
Retorna los 6 documentos insertados (Agua, CO2, NaCl, Glucosa,
Amoniaco, Metano).

## 2. Find filtrado (organico + activo)
Retorna 2 documentos: Glucosa (C6H12O6) y Metano (CH4), solo con
`nombre`, `formula`, `masaMolar`.

## 3. Find gases con 2+ componentes
Retorna CO2, Amoniaco y Metano (los 3 gases del seed, cada uno con
2 elementos distintos en `componentes`).

## 4. updateOne (reactivar NH3)
`matchedCount: 1`, `modifiedCount: 1`. La verificacion muestra
`{ nombre: "Amoniaco", activo: true }`.

## 5. deleteOne (quitar CH4)
`deletedCount: 1`. `countDocuments({ formula: "CH4" })` retorna `0`.

## 6. Aggregate por categoria
Tras el delete quedan 5 documentos. Resultado esperado:
- `inorganico`: totalCompuestos = 3, masaMolarPromedio ≈ 40.16
- `organico`: totalCompuestos = 1, masaMolarPromedio = 180.16
