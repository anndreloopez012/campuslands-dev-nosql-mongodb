# Solución: Viajes Mochileros

## Objetivo
Construir una solución en MongoDB para gestionar itinerarios de viajes mochileros, aplicando criterios de diseño NoSQL orientados al manejo de fechas, presupuestos y filtrado por rangos numéricos.

##  Decisiones de Diseño
- **Colección Principal**: Se utiliza `viajes` utilizando los estandares solicitados.
- **Subdocumentos**: Se emplea un objeto embebido `presupuesto` para agrupar los montos estimados y la moneda, y un objeto `fechas` para controlar el inicio y fin del viaje.
- **Arrays**: Se usan arrays simples como `paises` y `actividades_clave` para almacenar listas de elementos asociados al viaje sin necesidad de colecciones externas.