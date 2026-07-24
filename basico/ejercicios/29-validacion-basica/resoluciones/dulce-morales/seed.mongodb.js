use("campus_validacion_basica");

// Insertar documentos iniciales con datos realistas de tecnología
db.registros.insertMany([
  {
    nombre: "Servidor Cloud Pro",
    categoria: "infraestructura",
    activo: true,
    puntaje: 92,
    detalles_tecnicos: {
      arquitectura: "x86_64",
      version: "22.04 LTS",
      memoria_ram_gb: 32
    },
    etiquetas: ["cloud", "linux", "servidor"]
  },
  {
    nombre: "Firewall Perimetral NG",
    categoria: "seguridad",
    activo: true,
    puntaje: 88,
    detalles_tecnicos: {
      arquitectura: "ARM64",
      version: "5.4.1",
      memoria_ram_gb: 16
    },
    etiquetas: ["redes", "seguridad", "firewall"]
  },
  {
    nombre: "Motor de Base de Datos NoSQL",
    categoria: "base_de_datos",
    activo: true,
    puntaje: 95,
    detalles_tecnicos: {
      arquitectura: "x86_64",
      version: "7.0.5",
      memoria_ram_gb: 64
    },
    etiquetas: ["mongodb", "nosql", "datos"]
  },
  {
    nombre: "Pipeline de CI/CD Automation",
    categoria: "devops",
    activo: false,
    puntaje: 74,
    detalles_tecnicos: {
      arquitectura: "Cloud Native",
      version: "2.11.0",
      memoria_ram_gb: 8
    },
    etiquetas: ["devops", "automation", "cicd"]
  },
  {
    nombre: "Plataforma de Contenedores K8s",
    categoria: "infraestructura",
    activo: true,
    puntaje: 90,
    detalles_tecnicos: {
      arquitectura: "Multi-arch",
      version: "1.28.2",
      memoria_ram_gb: 128
    },
    etiquetas: ["kubernetes", "docker", "cloud"]
  }
]);