# Check-in de Paracaidismo 

## Descripción del Problema
Solución para la gestión del proceso de check-in de saltos en una escuela de paracaidismo, modelando saltadores, equipo asignado, tipo de salto (tándem, solo, práctica) y estado del chequeo de seguridad mediante MongoDB.

## Decisiones de Diseño
- **Colección Principal**: Se utiliza una colección llamada `checkins`.
- **Subdocumentos**: Se embeben los detalles del salto (`detalles_salto` que incluye altura, aeronave y instructor si aplica) y el equipo de seguridad (`equipo` como arnés, paracaídas principal y reserva), ya que se consultan y actualizan juntos con frecuencia.
- **Arrays**: Se utiliza un array de etiquetas/requisitos (`requisitos_cumplidos`) para validar las verificaciones previas al embarque.