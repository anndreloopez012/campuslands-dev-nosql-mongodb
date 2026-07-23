# Usuarios streaming

## Base de datos

`campus_usuarios_streaming`

## Colección

- usuarios

## Decisiones de modelado

Se utilizó una colección principal llamada `usuarios`, donde cada documento representa el perfil completo de un usuario del servicio streaming.

Las preferencias de películas, música y favoritos se almacenan como documentos embebidos y arreglos porque pertenecen únicamente al usuario y normalmente se consultan junto con su información principal.

No se utilizaron referencias debido a que el ejercicio no requiere manejar catálogos externos de películas o canciones.

## Operaciones implementadas

- Inserción de 5 usuarios.
- Consulta por tipo de plan.
- Consulta por estado.
- Búsqueda dentro de arrays de preferencias.
- Reporte ordenado por fecha.
- Actualización del estado de usuario.

## Archivos

- `seed.mongodb.js`
- `queries.mongodb.js`
- `evidencias.md`