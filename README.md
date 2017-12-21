![Adalab](images/logo-adalab-80px.png)
# Adalab web starter kit
Ahoy! Esta es nuestro Starter Kit en node/gulp para este primer contacto con el desarrollo web
Incluye SCSS y un web server.

## Guía de inicio rápido
Necesitarás instalar [Node.js](https://nodejs.org/) y [Gulp](https://gulpjs.com) para trabajar con este Starter Kit, luego:  
1. Descarga o clona el repositorio
2. Instala las dependencias locales con  `$ npm install`
3. Arranca el kit con `$ gulp`

## Tareas de gulp incluidas
### Inicio de un web server para desarrollo
```
$ gulp
```
Lanza un webserver con BrowserSync y varios watchers estarán pendientes de los archivos SCSS/JS/HTML para recargar el navegador cuando se necesite.

### Versión lista para subir a producción
```
$ gulp deploy
```
Genera los CSS y JS minimizados y sin sourcemaps, listos para subir a producción.


## Estructura del proyecto
Nuestro **gulpfile.js** usa un JSON de configuración con las rutas de los archivos a generar/vigilar.

La estructura de carpetas tiene esta pinta:
```
/
|- css
|- images
|- js
`- scss
   |- core
   |- layout
   |- components
   `- pages
```


## CSS
Viene incluído el paquete [**gulp-combine-mq**](https://www.npmjs.com/package/gulp-combine-mq) que agrupa todas las medaqueries al final del documento css.


## JS
En el JSON de configuración especificamos los archivos JS que utilizamos y en el orden que deben procesarse.

## Falta algo?
Echas de menos que el kit haga algo en concreto? Pidelo sin problema a través de los Issues o si te animas a mejorarlo mándanos un PR :)
