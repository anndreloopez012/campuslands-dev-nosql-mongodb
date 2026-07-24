# Modelo documental — Assets de animacion 3D

## Coleccion principal
`assets_animacion`

## Entidades identificadas
- Asset (modelo, rig, textura, animacion, prop) como documento raiz.
- Metadata tecnica (formato, peso, resolucion) como subdocumento embebido.
- Etiquetas (tags) como array de strings.
- Historial de revisiones como array de subdocumentos (embebido, se lee siempre junto al asset).

## Decisiones de diseno
- **Embebido, no referenciado:** la metadata tecnica y el historial de revisiones se consultan siempre junto al asset, no crecen sin control y no se comparten entre documentos, por lo tanto se embeben en vez de usar una coleccion aparte. Esto evita `$lookup` innecesarios en un caso de uso de lectura frecuente.
- **Array de tags:** permite filtrar por categoria de uso (personaje, entorno, prop) sin normalizar en otra coleccion.
- **Sin referencias externas:** al no existir relacion muchos-a-muchos real entre assets (cada asset es independiente), no se justifica una coleccion separada ni `ObjectId` de referencia.

## Estructura de un documento
```javascript
{
  nombre: String,
  tipo: String,        // "modelo" | "rig" | "textura" | "animacion" | "prop"
  categoria: String,   // "personaje" | "entorno" | "utileria"
  activo: Boolean,
  poligonos: Number,
  duracionSegundos: Number, // 0 si no aplica (ej. texturas)
  etiquetas: [String],
  metadata: {
    formato: String,
    pesoMB: Number,
    resolucion: String
  },
  revisiones: [
    { version: Number, autor: String, nota: String }
  ]
}
```

## Indices sugeridos
- Indice simple en `tipo` para filtrar rapido por tipo de asset.
- Indice simple en `activo` para separar assets vigentes de obsoletos.
