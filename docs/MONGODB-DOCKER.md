# MongoDB local con Docker

Este repositorio incluye una configuracion completa para levantar MongoDB local, una interfaz web con Mongo Express y la documentacion del repositorio en un contenedor de consulta.

## Servicios incluidos

| Servicio | Uso | URL / puerto local |
|---|---|---|
| `campuslands-package` | Navegar la documentacion y archivos del repo | `http://localhost:8080` |
| `mongo` | Base de datos MongoDB local | `localhost:27017` |
| `mongo-express` | Interfaz web para ver/editar la BD | `http://localhost:8081` |

## Levantar todo

```bash
docker compose up -d
```

Ver estado:

```bash
docker compose ps
```

Detener sin borrar datos:

```bash
docker compose down
```

Detener y borrar la base local:

```bash
docker compose down -v
```

## Credenciales locales

Estas credenciales son solo para ambiente local de practica.

### Usuario administrador

| Campo | Valor |
|---|---|
| Usuario | `campus_admin` |
| Password | `campus_admin_123` |
| Auth DB | `admin` |

URI de administrador:

```text
mongodb://campus_admin:campus_admin_123@localhost:27017/admin
```

### Usuario estudiante

| Campo | Valor |
|---|---|
| Usuario | `campus_student` |
| Password | `campus_student_123` |
| Base de datos | `campuslands` |
| Auth DB | `campuslands` |

URI recomendada para ejercicios:

```text
mongodb://campus_student:campus_student_123@localhost:27017/campuslands?authSource=campuslands
```

Dentro de otros contenedores Docker, usa el host `mongo`:

```text
mongodb://campus_student:campus_student_123@mongo:27017/campuslands?authSource=campuslands
```

## Interfaz Mongo Express

Abre:

```text
http://localhost:8081
```

Credenciales de la interfaz:

| Campo | Valor |
|---|---|
| Usuario | `campus` |
| Password | `campus_123` |

Mongo Express se conecta con el usuario administrador para que los estudiantes puedan inspeccionar colecciones, documentos e indices desde navegador.

## Personalizar credenciales o puertos

Copia el archivo de ejemplo:

```bash
cp .env.example .env
```

Luego cambia los valores que necesites. Por ejemplo, si el puerto de MongoDB ya esta ocupado:

```env
MONGO_PORT=27019
```

Reinicia los servicios:

```bash
docker compose down
docker compose up -d
```

Si ya habias creado la base y cambiaste usuarios/passwords, borra el volumen para que MongoDB vuelva a ejecutar la inicializacion:

```bash
docker compose down -v
docker compose up -d
```

## Ejecutar scripts de ejercicios

Ejemplo usando `mongosh` dentro del contenedor:

```bash
docker compose exec mongo mongosh "mongodb://campus_student:campus_student_123@localhost:27017/campuslands?authSource=campuslands"
```

Desde tu maquina, si tienes `mongosh` instalado:

```bash
mongosh "mongodb://campus_student:campus_student_123@localhost:27017/campuslands?authSource=campuslands"
```
