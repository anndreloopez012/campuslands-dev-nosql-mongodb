# Resolución: 06. Órdenes de taller de motos

## Justificación del Modelo NoSQL

Para este dominio de taller mecánico de motocicletas, opte por un diseño centrado en el documento principal dentro de la colección **`ordenes`**.

### Decisiones de Diseño:
* **Subdocumento `cliente` y `moto`**: Los datos del cliente (nombre, teléfono) y de la motocicleta (marca, modelo, placa) se embeben directamente en la orden. [cite_start]Esto garantiza que cada orden mantenga una trazabilidad histórica del vehículo e información del propietario en el momento del servicio[cite: 15, 43].
* **Array de Objetos `servicios`**: Cada orden incluye una lista de repuestos o mano de obra realizada. [cite_start]Se embebe en forma de array para facilitar lecturas completas y calcular costos de manera directa[cite: 15, 43].
* **Estado y Fechas**: Se definen estados (`"En revisión"`, `"En proceso"`, `"Completado"`, `"Entregado"`) y un subdocumento de `fechas` para llevar un control claro del ciclo de vida del trabajo.
