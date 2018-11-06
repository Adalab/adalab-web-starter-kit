'use strict';

const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('browser-sync');
const combineMq    = require('gulp-combine-mq');
const concat       = require('gulp-concat');
const config       = require('./config.json');
const del          = require('del');
const gulp         = require('gulp');
const htmlPartial  = require('gulp-html-partial');
const notify       = require('gulp-notify');
const plumber      = require('gulp-plumber');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const uglify       = require('gulp-uglify');


// > Dev tasks
// >> Delete Public folder
gulp.task('clean', del.bind(null, ['public']));



// >> Process HTML files
gulp.task('html', function(done) {
  gulp.src(config.html.src)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(htmlPartial({
      basePath: config.html.partials
    }))
    .pipe(gulp.dest(config.html.dest));
  done();
});



// >> Process SCSS files (extended + sourcemaps +  autoprefixer)
gulp.task('styles', function(done) {
  gulp.src(config.scss.src)
    .pipe(sourcemaps.init())
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(sass({
      outputStyle: 'extended',
    }))
    .pipe(combineMq({
      beautify: true
    }))
    .pipe(autoprefixer({
      browsers: [
        'last 2 versions',
        'ie >= 10'
      ],
      cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.scss.dest))
    .pipe(browserSync.reload({ stream:true }));
  done();
});



// >> Concatenate JS files with sourcemaps
gulp.task('scripts', function(done){
  gulp.src(config.js.src)
    .pipe(sourcemaps.init())
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.js.dest))
    .pipe(browserSync.reload({ stream:true }));
  done();
});



// >> Copy image files
gulp.task('images', function(done) {
  gulp.src(config.images.src)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(gulp.dest(config.images.dest));
  done();
});



// > Production Tasks
// > Delete Public folder
gulp.task('clean-dist', del.bind(null, ['docs']));



// >> Process HTML files
gulp.task('html-dist', function(done) {
  gulp.src(config.html.src)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(htmlPartial({
      basePath: config.html.partials
    }))
    .pipe(gulp.dest(config.html.dist));
  done();
});



// >> Process SCSS files (compressed + autoprefixer)
gulp.task('styles-dist', function(done) {
  gulp.src(config.scss.src)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(combineMq({
      beautify: false
    }))
    .pipe(autoprefixer({
      browsers: [
        'last 2 versions',
        'ie >= 10'
      ],
      cascade: false
    }))
    .pipe(gulp.dest(config.scss.dist));
  done();
});



// >> Concatenate and minify JS files w/o sourcemaps
gulp.task('scripts-dist', function(done){
  gulp.src(config.js.src)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dist));
  done();
});



// >> Copy image files
gulp.task('images-dist', function(done) {
  gulp.src(config.images.src)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(gulp.dest(config.images.dist));
  done();
});



// > Watchers + BrowserSync server
gulp.task('default', gulp.series(['clean','html', 'styles','scripts', 'images'], function(done) {
  browserSync.init({
    server : {
      baseDir: './public/'
    },
    ghostMode: false,
    online: true
  });
  gulp.watch(config.watch.html, gulp.series(['html', 'bs-reload']));
  gulp.watch(config.images.src, gulp.series(['images', 'bs-reload']));
  gulp.watch(config.scss.src, gulp.series('styles'));
  gulp.watch(config.js.src, gulp.series(['scripts', 'bs-reload']));
  done();
}));



// > Build a production-ready version of your proyect
gulp.task('docs', gulp.series(['clean-dist','html-dist','styles-dist','scripts-dist', 'images-dist'], function(done) {
  console.log('🦄 Build OK!');
  done();
}));



// > Recarga las ventanas del navegador
gulp.task('bs-reload', function (done) {
  browserSync.reload();
  done();
});
