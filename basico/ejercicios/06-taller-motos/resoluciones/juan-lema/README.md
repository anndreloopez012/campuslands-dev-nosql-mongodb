# Modelo documental — Taller de motos

## Colecciones
- **`ordenes`**: colección única para las ordenes de servicio del taller. Se usa un modelo embebido porque cada orden es autocontenida (cliente y moto asociados no se comparten entre ordenes de forma relevante) y siempre se consultan juntos.

## Documentos
Cada documento representa una orden de trabajo: quien la solicita, la moto involucrada, los servicios realizados, su estado y costo.

## Subdocumentos y Arrays
- **`moto` (Subdocumento)**: `marca`, `modelo`, `placa`, `anio`. Se embebe porque los datos de la moto solo tienen sentido dentro del contexto de la orden.
- **`cliente` (Subdocumento)**: `nombre`, `telefono`. Embebido por la misma razon; el taller no necesita un historial cruzado de clientes en este alcance.
- **`servicios` (Array de Strings)**: lista de servicios aplicados (ej. `["cambio de aceite", "frenos"]`). Un array simple evita una coleccion aparte para datos que siempre se leen junto a la orden.

## Referencias
No se usan referencias: el volumen de datos es pequeno y no hay entidades compartidas entre multiples ordenes que justifiquen normalizar.

## Indices sugeridos
- Indice simple en `estado` para filtrar rapido ordenes pendientes/en proceso.
- Indice simple en `moto.placa` para busquedas por moto especifica.

## Como ejecutar
1. Abrir MongoDB Shell o Compass conectado a `mongodb://localhost:27017`.
2. Ejecutar `seed.mongodb.js` completo.
3. Ejecutar `queries.mongodb.js` bloque por bloque.
