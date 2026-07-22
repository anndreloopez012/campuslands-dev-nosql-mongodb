# Evidencias - Ejercicio 29

## Seed
- `db.createCollection("registros", {...validator})` crea la coleccion con
  reglas `$jsonSchema` (validationAction: "error").
- `insertMany` inserta 5 documentos validos.
- `countDocuments()` → `5`.

## Queries

**1) Find all** → retorna los 5 documentos completos.

**2) Find filtrado (disponibles, ordenado por precio)**
Antes del update solo 3 son `disponible: true`:
```
Teclado Mecanico Click   45.9
Celular Orion X          549.5
Laptop Nimbus 14         899.99
```

**3) updateOne** sobre "Monitor Vista 27" → `{ disponible: true }`.
`findOne` posterior confirma `disponible: true`. `modifiedCount: 1`.

**4) deleteOne** sobre "Teclado Mecanico Click" → `deletedCount: 1`.
`countDocuments()` → `4`.

**5) Prueba del validator**
Insertar `categoria: "tablet"` (fuera del enum) lanza error de MongoDB
`Document failed validation` (codigo 121). El `try/catch` lo captura e
imprime: `Insert rechazado por el validator: ...`. No se agrega el
documento invalido; la coleccion permanece con 4 documentos.
