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

### Process a production-ready distribution
```
$ gulp deploy
```
Delete and reprocess the public folder with optimized versions of your HTML/CSS/JS files.

### Compress a production-ready distribution
```
$ gulp zipit
```
Delete and reprocess the public folder with optimized versions of your HTML/CSS/JS files and compress it in a .zip file.

## Folder structure
Our **gulpfile.js** uses a configuraton JSON file to set source and destination files of the project.
Check config.json out and edit what you need.

The folder structure looks like:
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
Asteroids does not include a CSS reset stylesheet anymore but we have included two awesome tools:
* A **csscomb** JSON file to use with your code editor as your own risk :)
* The risky [**gulp-combine-mq**](https://www.npmjs.com/package/gulp-combine-mq) package to group ans combine all your mediaqueries.

## Browser Support
That's up to you ;)


## Request a feature
Do you miss something? Feel free to request a feature or contribute to make it better ;)
