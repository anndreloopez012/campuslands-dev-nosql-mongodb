# Evidencias Tecnicas de validacion - MongoDB Compass

Este docunmento recopila las pruebas de funcionamiento de la base de datos 'campus_skins_battle_royale' ejecutadas interactivamente a travez.

## 1. Poblamiento e Insercion de Datos (Seed)

Se ejecuto el script de inicializacion en la consola integrada a mongosh de compass. A continuacion se evidencia el arbol de documentos creado exitosamente dentro de la coleccion plurizada 'skins':

![Insercion Exitosa de 5 Documentos](<Captura de pantalla 2026-06-22 a la(s) 1.55.56 p. m..png>)

## 2. Validacion de Consultas mediante filtros visuales
Se comprobo la flexibilidad del modelo NoSQL aplicando las consultas logicas directamente en la barra superior de filtrado de Compass:

* **Filtro por Rango de Rareza Alta:** Visualizacion en Compass tras aplicar el filtro {"rareza": { $in: ["Epica", :Legendaria"]}}.

![Filtrado de rareza](<Captura de pantalla 2026-06-22 a la(s) 1.56.46 p. m..png>)

* **Filtro por atributo embedido (Estadisticas de Uso):** Evidencia de busqueda esitosa accediendo al subdocumento de rendimiento con { "estadisticas_uso.victorias_con_skin": { $gt: 200}}.

![Evidencia Filtro Subdocumento](<Captura de pantalla 2026-06-22 a la(s) 1.57.27 p. m..png>)

## 3. Ejecucion de Modificadores 
Evidencia del documento actualizado en la interfaz grafica, mostrando la alteracion del estado de disponibilidad y el incremento del precio en creditos del item seleccionado de forma inmediata 

![Evidencia Update en Compass](<Captura de pantalla 2026-06-22 a la(s) 2.00.32 p. m..png>)

