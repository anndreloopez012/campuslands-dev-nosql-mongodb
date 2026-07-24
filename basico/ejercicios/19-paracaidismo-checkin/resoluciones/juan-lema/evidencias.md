# Evidencias — 19. Check-in de paracaidismo (juan-lema)

## 1. Find all
Retorna los 5 documentos insertados en `seed.mongodb.js` (Marta Solano, Luis
Cabrera, Carla Nunez, Andres Peralta, Paola Rios).

## 2. Find filtrado (activo, apto, categoria avanzado)
Retorna 2 documentos:
- Carla Nunez — altura_salto_pies: 13000 — instructor: Sofia Ramos
- Paola Rios — altura_salto_pies: 14000 — instructor: Diego Herrera

## 3. updateOne + verificación
Se agrega `"camara-casco"` al array `equipo` de Luis Cabrera (P002).
El `findOne` de verificación muestra:
```json
{ "nombre": "Luis Cabrera", "equipo": ["arnes-individual", "paracaidas-principal", "altimetro", "camara-casco"] }
```

## 4. deleteOne + verificación
Se elimina el registro de Andres Peralta (P004, inactivo y no apto).
- `countDocuments()` pasa de 5 a 4.
- `findOne({ documento: "P004" })` retorna `null`.
