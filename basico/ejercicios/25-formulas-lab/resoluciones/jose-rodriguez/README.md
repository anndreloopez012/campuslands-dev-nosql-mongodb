# Solución NoSQL MongoDB: Fórmulas Químicas (Arrays de Componentes y Propiedades)

Este proyecto implementa un modelo de base de datos en **MongoDB** para la gestión de **Fórmulas Químicas y Propiedades Fisicoquímicas**, optimizado para el análisis de la estequiometría molecular mediante **Arrays de Subdocumentos**.

---

## 1. Criterios de Modelado NoSQL

| Colección | Campo / Estructura | Estrategia | Razón Técnica / Criterio DBA |
| :--- | :--- | :--- | :--- |
| `compuestos` | `componentes` | **Array de Subdocumentos** | Modela la composición estequiométrica (`simboloElemento`, `cantidadAtomos`, `porcentajeMasa`). Permite consultar por presencia de elementos sin cruzar tablas. |
| `compuestos` | `propiedadesFisicas` | **Subdocumento Embebido** | Datos atómicos de la sustancia (`masaMolarGmol`, `puntoEbullicionC`, `densidadGcm3`) que pertenecen 1:1 al compuesto. |
| `compuestos` | `usosIndustriales` | **Array Simple de Cadenas** | Lista de aplicaciones comerciales o industriales. Permite indexación multiclave (*Multikey Index*). |
| `compuestos` | `estadoMateria` | **Atributo Escalar** | Cadena de control (`"LÍQUIDO"`, `"GASEOSO"`, `"SÓLIDO"`) para categorización y filtrado rápido. |
| `elementos` | `_id` | **Colección Independiente** | Funciona como catálogo de referencia de la tabla periódica (`simbolo`, `numeroAtomico`, `masaAtomicaGmol`). |

---

## 2. Explicación de las Consultas Avanzadas (`queries.mongodb.js`)

1. **Búsqueda en Arrays (`.find()` en Subdocumento):**
   * Consulta documentos evaluando si el valor `"C"` (Carbono) existe dentro de alguno de los objetos del array `componentes`.
2. **Top por Masa Molar (`.sort()` + `.limit()`):**
   * Ordena los compuestos descendentemente por `propiedadesFisicas.masaMolarGmol` y limita la respuesta a los 3 más pesados.
3. **Métricas por Estado de Materia (`$group` + `$avg`):**
   * Agrupa los registros según su estado físico y calcula los promedios de masa molar y punto de fusión por categoría.
4. **Descomposición Estequiométrica (`$unwind` + `$group`):**
   * Desestructura el array `componentes` para sumar (`$sum`) la cantidad total de átomos por molécula y contar cuántos elementos químicos distintos la integran.
5. **Análisis de Usos en Compuestos Seguros (`$match` + `$unwind` + `$push`):**
   * Filtra compuestos calificados como `"NO_PELIGROSO"`, desglosa sus aplicaciones industriales y construye un array (`$push`) con los nombres de las sustancias empleadas en cada sector.

---

## 3. Estrategia de Índices Recomendados

Para acelerar las búsquedas por elementos químicos constitutivos y atributos físicos:

```javascript
use('quimica_formulas_db');

// Índice multiclave para búsquedas rápidas por símbolo de elemento químico
db.compuestos.createIndex({ "componentes.simboloElemento": 1 });

// Índice compuesto para ordenamientos por masa molar y estado físico
db.compuestos.createIndex({ estadoMateria: 1, "propiedadesFisicas.masaMolarGmol": -1 });

// Índice multiclave para filtrado por usos industriales
db.compuestos.createIndex({ usosIndustriales: 1 });
