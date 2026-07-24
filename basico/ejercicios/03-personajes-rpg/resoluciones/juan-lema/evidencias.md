# Evidencias — Ejercicio 03 Personajes RPG (juan-lema)

## Seed
Se insertan 6 personajes en `campus_personajes_rpg.registros`: Kaelor, Sira, Brock, Nael, Grom y Vesna.

## 1. find({})
Devuelve los 6 documentos completos insertados.

## 2. Personajes activos (nombre y nivel)
Antes del update: Kaelor (12), Sira (15), Nael (11), Grom (14). Brock y Vesna quedan fuera por `activo: false`.

## 3. Inteligencia > 15
Sira Lunaplata (20). Es el único personaje que supera el umbral.

## 4. Guerreros con nivel >= 12
Kaelor Vientonorte (12) y Grom Rocaferrea (14).

## 5. Update Brock Colmillo
`matchedCount: 1, modifiedCount: 1`. Verificación: nivel pasa de 9 a 10 y `activo` pasa a `true`.

## 6. Push habilidad a Sira
`matchedCount: 1, modifiedCount: 1`. Verificación: `habilidades` queda como `["bola de fuego", "escudo magico", "teletransporte corto", "invocar meteoro"]`.

## 7. Delete Vesna Sombraclara
`deletedCount: 1`. La consulta de verificación posterior no retorna documentos.

## 8. countDocuments
Resultado esperado: `5` (6 insertados − 1 eliminado).