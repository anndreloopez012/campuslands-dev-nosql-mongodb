# Evidencias — Ejercicio 02

## 1. Catalogo completo

Retorna los 6 documentos insertados (Fenix Carmesi, Sombra de Acero, Guardian de Cristal, Vagabundo Oxidado, Espectro Neon, Reina del Abismo).

## 2. Legendarias disponibles

```
{ nombre: "Fenix Carmesi", precio: 1800 }
```

("Reina del Abismo" no aparece porque `disponible: false`)

## 3. Edicion limitada

```
{ nombre: "Fenix Carmesi", temporada: 7 }
{ nombre: "Reina del Abismo", temporada: 8 }
```

## 4. Actualizacion

`matchedCount: 1, modifiedCount: 1`
Verificacion: `{ nombre: "Guardian de Cristal", disponible: true }`

## 5. Eliminacion

`deletedCount: 1`
Verificacion: `countDocuments({}) → 5`

## 6. Reporte por rareza (solo disponibles)

```
{ _id: "Legendaria", total: 1 }
{ _id: "Epica", total: 2 }
{ _id: "Rara", total: 1 }
```
