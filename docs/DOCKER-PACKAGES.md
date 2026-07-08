# Docker Packages

Este repositorio publica una imagen Docker en GitHub Container Registry y tambien incluye un entorno local completo para practicar con MongoDB.

## Imagen publicada

```bash
docker pull ghcr.io/anndreloopez012/campuslands-dev-nosql-mongodb:dev
docker run --rm -p 8080:80 ghcr.io/anndreloopez012/campuslands-dev-nosql-mongodb:dev
```

Luego abre:

```text
http://localhost:8080
```

## Entorno completo con MongoDB

Para levantar documentacion, MongoDB y Mongo Express:

```bash
docker compose up -d
```

Servicios principales:

- Documentacion: `http://localhost:8080`
- MongoDB: `localhost:27017`
- Mongo Express: `http://localhost:8081`

Consulta la guia completa en `docs/MONGODB-DOCKER.md`.

## Publicacion automatica

El workflow `.github/workflows/publish-docker-package.yml` publica la imagen cuando hay cambios en `dev` o `main`.

- `dev` publica la etiqueta `ghcr.io/anndreloopez012/campuslands-dev-nosql-mongodb:dev`.
- `main` publica la etiqueta `ghcr.io/anndreloopez012/campuslands-dev-nosql-mongodb:latest`.

## Uso recomendado

- Los estudiantes siguen entregando ejercicios por PR hacia `dev`.
- Los maestros revisan y mezclan a `dev`.
- GitHub Actions actualiza la imagen Docker de consulta.
- Docker Compose levanta la base local para practicar consultas reales.
