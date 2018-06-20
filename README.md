# Proyecto Integrador 2018-1T
Repositorio para el proyecto de la Materia integradora del 1er termino 2018.
<br/><br/>

## Dependencias
- [Babel](https://babeljs.io/)
- [Concurrently](https://github.com/kimmobrunfeldt/concurrently)
- [ESLint](https://eslint.org/)
- [Express](http://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [Prettier](https://prettier.io/)
- [React](https://reactjs.org)
- [Sass](https://sass-lang.com/)
- [Webpack](https://webpack.js.org/)
<br/><br/>

## Desarrollo

En el modo de desarrollo, hay 2 servidores ejecutandose: cliente y servidor. 
El servidor del cliente es manejado por Webpack ([webpack dev server](https://webpack.js.org/configuration/dev-server/)) en tiempo real. 
El servidor para Nodejs es manejado en tiempo real utilizando [nodemon](https://nodemon.io/), el cual reinicia el servidor ante cualquier cambio realizado.
<br/><br/>

## Produccion

En el modo de produccion solo existe 1 servidor ejecutandose (Nodejs). Los archivos del lado del cliente han sido compilados como archivos estaticos y son manejados por el servidor Nodejs.
<br/><br/>

## Uso
Entre parentesis constan los comandos equivalentes en npm.

```bash

# Clonar el repositorio
git clone https://github.com/JulianAdams4/Proyecto-Integrador-2018-1T

# Ingresar al directorio
cd Proyecto-Integrador-2018-1T

# Instalar dependencias
yarn (npm install)


# 1. Script para desarrollo
yarn dev (npm run dev)

# .. o ...

# 1. Preparar para produccion
yarn build (npm run build)

# 2. Script de produccion
yarn start (npm start)

```

## Autores
- Julian Adams
- Luis Andrade