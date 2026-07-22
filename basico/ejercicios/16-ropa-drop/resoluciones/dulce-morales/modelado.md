# Solucion Ejercicio 16: Drop de Ropa Urbana

## Modelado de Datos NoSQL

Para este problema se eligio un modelo enfocado en documentos embebidos. La entidad principal es la coleccion de prendas dentro del drop de ropa urbana.

## Justificacion de Decisiones Tecnicas

* **Uso de Arreglos Simples:** El campo `tallas` se modela como un arreglo de cadenas para facilitar la busqueda de disponibilidad por talla.
* **Subdocumentos Embebidos:** Las especificaciones tecnicas (material, coleccion y corte) se embeben directamente en cada prenda, ya que no cambian de forma independiente y siempre se leen con el producto.
* **Coleccion Unica:** Se utiliza la coleccion `prendas` en plural y minusculas, evitando referencias innecesarias para un nivel basico.