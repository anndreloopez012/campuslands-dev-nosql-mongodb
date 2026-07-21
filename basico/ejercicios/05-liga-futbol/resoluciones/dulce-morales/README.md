# 05. Liga de futbol campus

## Dificultad

Basico

## Tematica usada

futbol

## Contexto del problema

Vas a construir una solucion MongoDB para un caso de futbol. El ejercicio se enfoca en proyecciones y ordenamiento, usando datos realistas y consultas que respondan preguntas utiles.

## Objetivo

Modelar datos NoSQL, insertar documentos, consultar informacion y documentar evidencias claras. La solucion debe mostrar criterio para decidir entre documentos, subdocumentos, arrays y referencias.

## Explicacion paso a paso

1. Identifica las entidades principales del problema.
2. Decide que datos se embeben y que datos se referencian.
3. Crea la base de datos `campus_liga_futbol`.
4. Inserta al menos 5 documentos coherentes.
5. Escribe consultas que validen el modelo.
6. Documenta resultados y decisiones tecnicas.
7. Entrega solo dentro de tu carpeta personal.

## Instrucciones detalladas

- Crea minimo 1 coleccion principal.
- Incluye inserts, consultas y al menos una operacion de actualizacion o reporte.
- Usa nombres de colecciones en plural y minusculas.
- Agrega comentarios cortos en tus scripts para explicar cada bloque.
- Prueba los comandos en MongoDB Shell o Compass antes del Pull Request.

## Ejemplos

```javascript
use campus_liga_futbol

db.registros.insertOne({
  nombre: "Demo",
  categoria: "practica",
  activo: true,
  puntaje: 85,
  etiquetas: ["mongodb", "campus"]
})

db.registros.find({ activo: true }, { nombre: 1, puntaje: 1, _id: 0 })
```

## Entregable esperado

```text
basico/ejercicios/05-liga-futbol/resoluciones/nombre-apellido/
├── README.md
├── seed.mongodb.js
├── queries.mongodb.js
└── evidencias.md
```

## Reglas

- No modifiques el README del ejercicio.
- No modifiques archivos de plantilla como entrega final.
- No subas archivos fuera de `resoluciones/nombre-apellido/`.
- No abras Pull Request hacia `main`.
- No subas credenciales, archivos `.env`, dumps ni archivos pesados.

## Consejos

- Disena pensando en las consultas que necesitas responder.
- Embebe datos que se leen juntos con frecuencia.
- Usa referencias cuando un dato crece mucho o se comparte entre muchas entidades.
- Mantén los scripts ordenados y repetibles.

## Errores comunes

- Copiar un modelo SQL sin adaptarlo a documentos.
- Usar colecciones con nombres vagos.
- Entregar archivos sueltos fuera de tu carpeta personal.
- Modificar archivos base del repositorio.

## Pistas opcionales

- En nivel basico, enfocate en CRUD claro y consultas simples.
- En nivel medio, agrega aggregation, indices o validacion cuando aporte al caso.
- Usa `explain` cuando quieras justificar indices.

## Como validar si quedo bien

1. Ejecuta los scripts en MongoDB.
2. Comprueba que las consultas retornan datos correctos.
3. Revisa que tus evidencias expliquen resultados.
4. Confirma con `git status` que solo agregaste tu carpeta personal.
5. Abre PR hacia `dev`.
