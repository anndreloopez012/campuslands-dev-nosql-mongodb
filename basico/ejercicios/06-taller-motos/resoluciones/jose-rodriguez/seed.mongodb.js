// 1. Crear y seleccionar la base de datos del taller de motos
use('campus_taller_motos');

// 2. Insertar 5 documentos coherentes y realistas con datos estructurados
db.motos.insertMany([
  {
    placa: "M-123XYZ",
    marca: "Honda",
    modelo: "Invicta 150",
    anio: 2022,
    propietario: "Carlos López",
    estado: "En Reparación",
    repuestos_cambiados: ["Pastillas de freno", "Cable de embrague"],
    historial_mantenimiento: { fecha_ingreso: "2026-06-15", mecanico_asignado: "Jorge Juárez", diagnostico_inicial: "Frenos desgastados y embrague duro" }
  },
  {
    placa: "M-456ABC",
    marca: "Yamaha",
    modelo: "R3",
    anio: 2024,
    propietario: "Sofía Martínez",
    estado: "Listo para Entrega",
    repuestos_cambiados: ["Aceite sintético 10W40", "Filtro de aceite"],
    historial_mantenimiento: { fecha_ingreso: "2026-06-18", mecanico_asignado: "Alex Samcam", diagnostico_inicial: "Mantenimiento periódico de kilometraje" }
  },
  {
    placa: "M-789DEF",
    marca: "Suzuki",
    modelo: "Gixxer 155",
    anio: 2021,
    propietario: "Pedro Ramírez",
    estado: "En Diagnóstico",
    repuestos_cambiados: [],
    historial_mantenimiento: { fecha_ingreso: "2026-06-22", mecanico_asignado: "Jorge Juárez", diagnostico_inicial: "Falla eléctrica en el tablero" }
  },
  {
    placa: "M-321GHI",
    marca: "KTM",
    modelo: "Duke 390",
    anio: 2023,
    propietario: "Estuardo Rodas",
    estado: "En Reparación",
    repuestos_cambiados: ["Kit de arrastre", "Cadena reforzada"],
    historial_mantenimiento: { fecha_ingreso: "2026-06-14", mecanico_asignado: "Alex Samcam", diagnostico_inicial: "Kit de arrastre con desgaste crítico" }
  },
  {
    placa: "M-654JKL",
    marca: "Bajaj",
    modelo: "Pulsar NS200",
    anio: 2020,
    propietario: "Juan Alvarado",
    estado: "Entregado",
    repuestos_cambiados: ["Bujía triple chispa", "Limpieza de carburador"],
    historial_mantenimiento: { fecha_ingreso: "2026-06-10", mecanico_asignado: "Ramiro Pérez", diagnostico_inicial: "Pérdida de potencia en alta" }
  }
]);