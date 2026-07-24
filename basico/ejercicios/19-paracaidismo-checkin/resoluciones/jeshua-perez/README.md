# Solucion - 19. Check-in de paracaidismo

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_paracaidismo_checkin`, coleccion `saltos`.
- Documento plano por check-in de salto, con `certificadoMedico` (booleano), `pesoKg` (numero) y `apto` (booleano) como campos independientes: en nivel basico las reglas de negocio (peso permitido, certificado obligatorio) se validan manualmente con consultas, no con `$jsonSchema` (eso corresponde al ejercicio 29/nivel medio).
- `apto` se guarda como campo calculado a mano en el seed y se corrige por consulta cuando no cumple las reglas, evidenciando el proceso de validacion manual pedido por el enfoque.

## Archivos

- `seed.mongodb.js`: crea la coleccion `saltos` con 6 check-ins, incluyendo casos validos e invalidos a proposito.
- `queries.mongodb.js`: consultas que detectan incumplimientos de reglas (sin certificado, peso fuera de rango, inconsistencias en `apto`) y una correccion.
- `evidencias.md`: resultados esperados de cada consulta.
