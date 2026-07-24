# Ejercicio 20 - Agenda de tatuajes (juan-lema)

## Modelo elegido

Base de datos `campus_tattoo_agenda`, coleccion unica `registros`. Cada documento representa una cita de tatuaje con su cliente, tatuador, estado y fecha.

Se embebe todo en un solo documento porque cliente y tatuador son datos simples que se leen siempre junto con la cita; no crecen de forma independiente ni se comparten en listas largas, asi que separar en colecciones adicionales solo agregaria `$lookup` innecesarios para un caso basico centrado en estados y fechas.

## Campos principales

- `cliente`: nombre de quien agenda la cita.
- `tatuador`: nombre del artista asignado.
- `estilo`: linea fina, blackwork, realismo, tradicional, etc.
- `zona_cuerpo`: parte del cuerpo a tatuar.
- `fecha`: fecha de la cita (ISODate).
- `estado`: agendado, completado o cancelado.
- `precio`: costo estimado de la sesion.
- `notas`: observaciones cortas de la cita.

## Que se practico

- Insercion masiva con `insertMany`.
- Filtro por estado y por rango de fechas.
- Actualizacion de estado con `updateOne` y `$set`.
- Eliminacion controlada de una cita cancelada con `deleteOne`.
- Reporte agrupado con `aggregate` para contar citas por tatuador.

## Que aprendi

Modelar la cita como un solo documento simplifica las consultas de agenda diaria: no se necesitan joins para saber quien tiene turno o que citas siguen pendientes. El campo `estado` como cadena controlada facilita filtrar y agrupar sin logica adicional.
