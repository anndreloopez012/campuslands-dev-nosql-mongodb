# Modelo documental - Proyecto básico MongoDB

Describe colecciones, documentos, subdocumentos, arrays, referencias e índices sugeridos.

## Contenido de la carpeta

- `seed.mongodb.js`: Script de carga con 5 torneos iniciales de eSports en el campus. Incluye líderes de equipo con nombres poco comunes (Zephyrine, Orestes, Balthazar, Cyrene, Melantho), arenas de gaming en Guatemala (Cráter Azul, Semuc Champey, Quiriguá, Tikal, Laguna Lachúa) y bolsas de premios en quetzales (GTQ).
- `queries.mongodb.js`: Consultas de verificación, filtros por estado y bolsa de premios, consultas en arreglos de plataformas, actualización con `$set` e `$inc`, e inserción de nuevos eventos.

## 1. Identificación de Entidades y Atributos
- **Torneo (Colección principal):** `codigo_torneo`, `nombre_torneo`, `videojuego`, `categoria`, `lider_equipo`, `sede_arena`, `pais`, `equipos_inscritos`, `monto_premio_gtq`, `estado`, `fecha_inicio`.
- **Estadísticas (Subdocumento):** `partidas_jugadas`, `equipo_ganador`, `mvp_jugador`.
- **Plataformas (Array):** Lista de consolas o dispositivos donde se disputa el torneo (`PC`, `PlayStation 5`, `Xbox Series X`, `Nintendo Switch`).

## 2. Decisiones de Diseño
- **Embebido de Estadísticas:** Los resultados principales del torneo (partidas jugadas, ganador, MVP) se consultan frecuentemente junto con la ficha del torneo. Embeber esta información evita joins innecesarios.
- **Uso de Arrays para Plataformas:** Permite asociar múltiples plataformas soportadas en un solo documento de torneo.

## 3. Estructura de la Colección y Documentos
- Nombre de la colección: `torneos`

### Ejemplo de documento:
```json
{
  "_id": "ObjectId",
  "codigo_torneo": "TRN-GAM-001",
  "nombre_torneo": "Copa Campus Valorant 2026",
  "videojuego": "Valorant",
  "categoria": "FPS",
  "lider_equipo": "Zephyrine Valdivia",
  "sede_arena": "Arena Gaming Cráter Azul",
  "pais": "Guatemala",
  "equipos_inscritos": 16,
  "monto_premio_gtq": 2500.0,
  "estado": "Finalizado",
  "estadisticas": {
    "partidas_jugadas": 30,
    "equipo_ganador": "Phoenix Strike",
    "mvp_jugador": "ZephyrineGT"
  },
  "plataformas": [
    "PC"
  ],
  "fecha_inicio": "2026-02-10T00:00:00.000Z"
}
```
### Índices implementados
{ estado: 1 }: Para encontrar rápidamente torneos por su estado.

{ videojuego: 1 }: Para consultar de golpe los eventos según el videojuego disputado.

{ codigo_torneo: 1 } (único): Para garantizar la unicidad del código del torneo en todo el campus.

### Checklist
[x] Nombre de la colección en plural y minúsculas (torneos).

[x] Sin instrucción drop() en el script inicial.

[x] Nombres poco comunes de líderes de equipo, temática de videojuegos y arenas de Guatemala.

[x] Comentarios de índices explicados de forma corta y entendible.

[x] Integración completa de CRUD y actualización con $set e $inc.

[x] Archivos ubicados únicamente en la carpeta de resolución personal.

## Explicación de las Consultas

1. **Consulta General (`find({})`):**
   Muestra el listado de todos los torneos registrados.

2. **Filtro de Torneos Activos (`estado`):**
   Obtiene los torneos que se encuentran actualmente "En Curso".

3. **Filtro de Premios Destacados (`monto_premio_gtq`):**
   Lista los eventos cuya bolsa de premios es igual o mayor a Q2,000.00 GTQ.

4. **Búsqueda por Plataforma (`plataformas`):**
   Encuentra todos los torneos disponibles para la plataforma `"PC"`.

5. **Cierre de Torneo y Actualización (`updateOne` con `$set` e `$inc`):**
   Marca un torneo como finalizado, registra el equipo ganador, asigna al MVP y aumenta las partidas disputadas.

6. **Registro de Nuevo Torneo (`insertOne`):**
   Agrega un nuevo torneo de EA Sports FC 26 en la arena Semuc Champey.