# Solución: Assets de animación 3D

## Descripción del Caso
Solución para la gestión de assets de animación 3D en MongoDB. Permite administrar modelos 3D, texturas y rigs, controlando su estado de aprobación, poligonaje, formato de archivo y especificaciones técnicas embebidas.

## Decisiones de Diseño
- **Colección Principal**: Se utiliza `assets` en plural y minúsculas.
- **Subdocumentos**: Se embeben los detalles técnicos (`especificaciones` como polígonos, vértices, formato y resolución de texturas) ya que se consultan y modifican junto al asset principal.
- **Arrays**: Se emplean arrays simples (`etiquetas`) para categorizar las búsquedas por tipo de proyecto o motor de render.
