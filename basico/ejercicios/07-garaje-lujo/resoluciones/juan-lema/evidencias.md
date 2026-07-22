# Evidencias — Garaje de autos de lujo (juan-lema)

## 1. Listar todos los autos
Retorna los 5 documentos insertados en el seed (Ferrari, Rolls-Royce, Lamborghini, Porsche, Aston Martin).

## 2. Precio mayor a 220000 USD
```text
{ marca: "Ferrari", modelo: "Roma", precio: 247000 }
{ marca: "Rolls-Royce", modelo: "Ghost", precio: 332000 }
{ marca: "Lamborghini", modelo: "Urus", precio: 229000 }
```

## 3. Deportivos con potencia >= 600 hp
```text
{ marca: "Ferrari", modelo: "Roma", potencia_hp: 612 }
{ marca: "Porsche", modelo: "911 Turbo S", potencia_hp: 640 }
```

## 4. Update — Urus disponible
```text
{ modelo: "Urus", disponible: true }
```
`matchedCount: 1`, `modifiedCount: 1`.

## 5. Reporte — disponibles ordenados por precio descendente
```text
{ marca: "Rolls-Royce", modelo: "Ghost", precio: 332000 }
{ marca: "Ferrari", modelo: "Roma", precio: 247000 }
{ marca: "Lamborghini", modelo: "Urus", precio: 229000 }
{ marca: "Porsche", modelo: "911 Turbo S", precio: 216000 }
```
(el Aston Martin no aparece porque `disponible: false`)

## 6. Delete — Aston Martin DB5
`deletedCount: 1`. Inventario final:
```text
Ferrari Roma
Rolls-Royce Ghost
Lamborghini Urus
Porsche 911 Turbo S
```
