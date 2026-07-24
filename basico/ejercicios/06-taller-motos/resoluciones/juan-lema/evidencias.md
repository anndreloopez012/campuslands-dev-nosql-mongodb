# Evidencias — Ejercicio 06

## 1. Catalogo completo
Retorna los 6 documentos insertados (Hector Ramos, Lucia Fernandez, Marco Antonio Sic, Andrea Solis, Diego Morales, Paola Guerra).

## 2. Ordenes pendientes
```
{ cliente: { nombre: "Marco Antonio Sic", ... }, moto: { marca: "Suzuki", modelo: "GN 125" }, costo: 420 }
{ cliente: { nombre: "Andrea Solis", ... }, moto: { marca: "Bajaj", modelo: "Pulsar NS200" }, costo: 610 }
```

## 3. Alta prioridad con costo > 500
```
{ moto: { placa: "P321JKL" }, costo: 610, estado: "pendiente" }
{ moto: { placa: "P987PQR" }, costo: 890, estado: "en_proceso" }
```

## 4. Update de estado y costo
`matchedCount: 1, modifiedCount: 1`
Verificacion: `{ estado: "finalizada", costo: 800 }` (placa P456DEF)

## 5. Push de servicio adicional
`matchedCount: 1, modifiedCount: 1`
Verificacion: `servicios: ["afinacion general", "cambio de filtro de aire"]` (placa P789GHI)

## 6. Eliminacion
`deletedCount: 1`
Verificacion: `countDocuments({}) → 5`

## 7. Reporte por estado
```
{ _id: "en_proceso", totalCosto: 890, ordenes: 1 }
{ _id: "finalizada", totalCosto: 1300, ordenes: 2 }
{ _id: "pendiente", totalCosto: 1030, ordenes: 2 }
```
