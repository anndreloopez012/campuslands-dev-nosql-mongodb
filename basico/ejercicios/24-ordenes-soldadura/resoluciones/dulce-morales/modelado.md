# Solución: Órdenes de Soldadura 

## Descripción del Problema
Se requiere una solución en MongoDB para gestionar el control y los estados de inspección en proyectos o talleres de soldadura. El sistema almacena órdenes detalladas con especificaciones técnicas, soldador asignado y estado actual de la inspección de calidad.

## Decisiones de Diseño (NoSQL)
- **Colección Principal**: Se utiliza una colección `ordenes` haciendo referencia a lo que almacena.
- **Estructura Embebida**: 
  - Se embeben los detalles técnicos del proceso de soldadura (tipo de soldadura, material, espesor) y los datos del soldador responsable dentro del documento de la orden. Esto se debe a que se leen en conjunto frecuentemente al consultar el estado de un trabajo.
  - Se emplea un array de etiquetas/requisitos (`etiquetas`) para categorizar y filtrar las órdenes de forma rápida.