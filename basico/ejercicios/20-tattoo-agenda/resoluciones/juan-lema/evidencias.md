# Evidencias - Ejercicio 20 Agenda de tatuajes (juan-lema)

## 1. Consulta general
Devuelve las 6 citas insertadas con `cliente`, `tatuador`, `estado` y `fecha`.

## 2. Citas agendadas
3 citas en estado `agendado` antes de la actualizacion: Renata Solis, Mateo Vargas, Simon Rojas; ordenadas por fecha ascendente.

## 3. Completadas con precio > 350000
2 resultados: Camila Ortiz (600000) y Julian Peña (380000).

## 4. Actualizacion de Valentina Cruz
Su cita pasa de `estado: "cancelado"` a `estado: "agendado"` con nueva `fecha` 2026-08-05.

## 5. Eliminacion de cita cancelada
Como Valentina Cruz ya no esta en `cancelado`, no queda ningun documento con ese estado; `deleteOne` no elimina nada y `countDocuments()` se mantiene en 6.

## 6. Reporte por tatuador
Se agrupan 3 tatuadores (Iker Duarte, Paola Reyes, Bruno Salazar) mostrando `total_citas` e `ingresos`, ordenados de mayor a menor ingreso.
