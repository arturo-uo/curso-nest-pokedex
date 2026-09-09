<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
npm install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```
## Stack usado
* MongoDB
* Nest

# Subir código

```
git init
git add .
git commit -m "Primer commit"

git remote add origin https://github.com/arturo-uo/curso-nest-pokedex.git

git branch -M main
git push -u origin main
```

Comandos para subir código con los siguientes cambios
```
git add .
git commit -m "Descripción de cambios"
git push
```