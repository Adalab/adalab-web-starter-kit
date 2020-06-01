![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)

# Adalab web starter kit

Ahoy! Este es nuestro Starter Kit creado en **node y gulp**. ¿Y qué es un Starter kit? Pues es una **plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas**.

Este Kit incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local y muchas cosas más. El Kit nos ayuda a trabajar más cómodamente, nos automatiza tareas.

En el Kit hay 3 tipos de ficheros y carpetas:

- Los ficheros que están sueltos en la raíz del repositorio, como gulpfile.js, package.json... Son la configuración del proyecto y no necesitamos modificarlos.
- La carpeta `src/`: son los ficheros de nuestra página web, como HTML, CSS, JS...
- Las carpetas `public/` y `docs/`, que son generadas automáticamente cuando arrancamos el proyecto. El Kit lee los ficheros que hay dentro de `src/`, los procesa y los genera dentro de `public/` y `docs/`.

## Guía de inicio rápido

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit:

### Pasos a seguir cada vez que queremos arrancar un proyecto desde cero:

1. **Crea tu propio repositorio.**
1. Descarga este **Starter kit desde GitHub**.
   - No recomendamos que clones este repo puesto que no podrás añadir commits.
1. **Copia todos los ficheros** de este Starter kit en la carpeta raíz de tu repositorio.
   - Recuerda que debes copiar **también los ficheros ocultos**.
   - Si has decidido clonar este repo, no debes copiar la carpeta `.git`. Si lo haces estarás machacando tu propio repositorio.
1. **Abre una terminal** en la carpeta raíz de tu repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando `npm install`.

#### ¿Y qué estoy haciendo con el comando `npm install`?

[Node package manager o npm](https://npmjs.com) es un sistema de gestión de dependencias que viene dentro de `node`. Hemos comentado que nuestro Starter kit tiene un motor de plantillas HTML, SASS y un servidor. Esto son dependencias, paquetes o módulos creados por terceras personas. Estas dependencias están configuradas dentro del fichero [`./package.json`](./package.json).

El comando `npm install` lee el apartado `dependencies` del fichero `package.json`, las busca en Internet, las descarga e instala en vuestro proyecto en una carpeta llamada `node_modules/`.

Como `npm install` lo que hace es instalar dependencias, solo debemos ejecutar este comando la primera vez que arrancamos el proyecto. Tampoco pasa nada si lo ejecutamos más veces, pero no es necesario.

### Pasos a seguir en un proyecto colaborativo

Si el proyecto que estás creando es un proyecto de equipo y vas a trabajar con más compañeras continúa realizando los siguientes pasos:

1. **Sube** todo el código actual a tu repositorio.
1. Dile a tus compañeras que se **clonen** tu repositorio.
1. Cada compañera debe ejecutar `npm install` para **installar todos los módulos y dependencias**.

### Pasos para arrancar el proyecto

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. **El proyecto hay que arrancarlo cada vez que te pongas a programar.** Para ello ejecuta el comando `npm start`.

Este comando:

- **Abre una ventana de Chrome y muestra tu página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
   - Convierte los ficheros SASS en CSS.
   - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Después de ejecutar `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.

### Pasos para publicar el proyecto en GitHub Pages

Cuando ejecutamos `npm start` los ficheros se generan en la carpeta `public/` en modo desarrollo. Esto quiere decir que se generan con una estructura cómoda para poder desarrollar, para poder inspeccionarlos en el DevTools...

Para publicar los ficheros en GitHub Pages











## Tareas de gulp incluidas

### Inicio de un web server para desarrollo

```
npm start
```

o lo que en este proyecto es lo mismo:

```
gulp
```

Lanza un webserver con BrowserSync y varios watchers estarán pendientes de los archivos SCSS/JS/HTML, en la carpeta **public/**, para recargar el navegador cuando se necesite.

### Versión lista para subir a producción

Para generar los ficheros para producción ejecuta:

```
npm run docs
```

o lo que en este proyecto es lo mismo:

```
gulp docs
```

En la carpeta **docs/** se generarán los CSS y JS minimizados y sin sourcemaps listos para subir al repo. A continuación súbelos al repo y activa en GitHub Pages la opción **master/docs/**, para que GitHub Pages sirva la página desde la carpeta **docs/**.

---

Si quieres generar los ficheros listos para producción y además subirlos a GitHub directamente ejecuta el siguiente comando:

```
npm run push-docs
```

Este comando borra la carpeta **docs/**, la vuelve a generar, crea un commit con los nuevos ficheros y hace un `git push`, todo del tirón. ¿Cómo se te queda el cuerpo?. Si quieres saber cómo funciona échale un ojo al fichero `package.json`.

## Flujo de archivos con gulp

Estas tareas de gulp producen el siguiente flujo de archivos:

![Gulp flow](./gulp-flow.png)

## Estructura del proyecto

Nuestro **gulpfile.js** usa un JSON de configuración con las rutas de los archivos a generar/vigilar.

La estructura de carpetas tiene esta pinta:

```
/
`- _src
   |- api
   |  |- data.json // para crearnos un servidor de datos local
   |- assets
   |  |- icons
   |  |- images
   |  |- js
   |  `- scss
   |     `- core
   |
   `- templates
      `- partials

```

## HTML

Viene incluído el paquete [**gulp-html-partial**](https://www.npmjs.com/package/gulp-html-partial) que nos va a permitir tener un sistema de plantillas html

## Imágenes e iconos

Tenemos en **\_src/** una carpeta para las imágenes del proyecto y una para los iconos como el favicon o los iconos de dispositivos móviles. Estos últimos se generan en la raíz de las carpetas **public/** y **docs/**

## CSS

Viene incluído el paquete [**gulp-combine-mq**](https://www.npmjs.com/package/gulp-combine-mq) que agrupa todas las mediaqueries al final del documento css.

## JS

Podemos usar parciales de JS: en el JSON de configuración, **config.json** especificamos los archivos JS que utilizamos y en el orden que deben procesarse.

## ¿Cómo actualizo si tengo una versión anterior?

En principio puedes descargar todos los archivos fuera de **\_src/** y sustituir los de tu proyecto. Además deberías replicar la estructura de carpetas dentro de **\_src/**.

## Falta algo?

Echas de menos que el kit haga algo en concreto? Pidelo sin problema a través de los Issues o si te animas a mejorarlo mándanos un PR :)
