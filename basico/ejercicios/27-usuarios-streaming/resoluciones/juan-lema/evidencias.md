# Evidencias — Ejercicio 27

## Seed
`insertMany` crea 5 usuarios en `campus_usuarios_streaming.registros`. El `find` final muestra los 5 nombres: Lucia Fernandez, Mario Castillo, Ana Morales, Diego Ramirez, Sofia Herrera.

## 1. Find all
Devuelve los 5 usuarios con `nombre`, `plan` y `activo`.

## 2. Find filtrado (activo + premium)
Devuelve 2 documentos: Lucia Fernandez y Diego Ramirez.

## 3. Find filtrado (genero "drama")
Devuelve 2 documentos: Lucia Fernandez y Diego Ramirez.

## 4. updateOne
`matchedCount: 1`, `modifiedCount: 1`. Ana Morales queda `activo: true` y su `historial` pasa de `[]` a un arreglo con un elemento ("Risas al aire").

## 5. deleteOne
`deletedCount: 1`. Mario Castillo desaparece del `find` posterior; quedan 4 usuarios.

## 6. Verificacion final
`countDocuments({})` retorna `4` tras la eliminacion.
