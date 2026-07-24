## Inserción de datos

Se insertaron correctamente cinco órdenes de servicio con diferentes clientes, motocicletas y estados.

## Consultas realizadas

- Listado completo de órdenes.
- Proyección mostrando código, cliente y estado.
- Consulta de órdenes pendientes.
- Consulta de servicios con costo mayor a Q300.
- Reporte ordenado por costo.

## Actualización realizada

La orden **OT-001** cambió su estado de **Pendiente** a **Finalizada** utilizando `updateOne()`.

## Índice implementado

Se creó un índice sobre el campo **estado**, ya que es uno de los filtros más frecuentes para conocer el avance de los trabajos del taller.

Modelo documental

Base de datos
└── campus_taller_motos

Colección
└── ordenes

Documento

{
    _id,
    codigo,
    cliente,
    moto,
    servicio,
    costo,
    estado
}
Subdocumentos

No fueron necesarios porque toda la información corresponde directamente a la orden.

Arrays

No fueron necesarios para este ejercicio.

Referencias

No se utilizaron debido a que solo existe una entidad principal y no hay información compartida entre documentos.

Índices sugeridos

db.ordenes.createIndex({
    estado: 1
})

db.ordenes.createIndex({
    codigo: 1
}, {
    unique: true
})

El índice por estado mejora las búsquedas de órdenes según su progreso y el índice único sobre código garantiza que cada orden de trabajo sea única dentro del sistema.