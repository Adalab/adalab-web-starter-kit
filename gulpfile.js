var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var combineMq    = require('gulp-combine-mq');
var concat       = require('gulp-concat');
var cssminifiy   = require('gulp-clean-css');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var reload       = browserSync.reload;
var rename       = require('gulp-rename');
var runSequence  = require('run-sequence');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');
var zip          = require('gulp-zip');





// > Variables
config = {
	"scss": {
		"src": "scss/**/*.scss",
		"dest": "css/"
	},
	"js": {
		"src": [
			"js/main.js"
		],
		"dest": "js/"
	},
	"images": "images/**/*.{gif,jpg,png,svg}",
	"html": "**/*.html"
};
var sassSourceFolder = 'scss/**/*.scss';
var sassDestFolder = 'css/';
var imgFolder = 'images/**/*.{gif,jpg,png,svg}';
var htmlFolder = '**/*.html';
var jsSourceFiles = [
	'js/main.js'
];
var jsDestFolder = 'js/';




// > Gestiona los errores
var onError = function (err) {
	gutil.beep();
	console.log(err);
};





// > Procesa los archivos SASS/SCSS, añade sourcempas y autoprefixer
gulp.task('styles', function(cb) {
	return gulp.src(config.scss.src)
		.pipe(sourcemaps.init())
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
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
		.pipe(browserSync.reload({ stream:true }))
		.pipe(notify({message: 'CSS OK', onLast: true}));
});





// > Procesa los scripts concatenando y minimizando
gulp.task('scripts', function(){
	return gulp.src(config.js.src)
		.pipe(sourcemaps.init())
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(concat('main.min.js'))
		//.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.js.dest))
		.pipe(browserSync.reload({ stream:true }))
		.pipe(notify({message: 'JS OK', onLast: true}));
});






// > Create a development server with BrowserSync
gulp.task('default', ['styles', 'scripts'], function () {
	browserSync.init({
		server : {
			baseDir: "./"
		},
		ghostMode: false,
		online: true
	});
	gulp.watch(config.images, ['bs-reload']);
	gulp.watch(config.scss.src, ['styles']);
	gulp.watch(config.js.src, ['bs-reload', ['scripts']]);
	gulp.watch(config.html, ['bs-reload']);
});





// > Recarga las ventanas del navegador
gulp.task('bs-reload', function () {
	browserSync.reload();
});





// > ZIP the public folder
gulp.task('zipit', ['deploy'], function() {
	return gulp.src(config.zip.src)
		.pipe(zip(config.zip.name))
		.pipe(gulp.dest(config.zip.dest));
});
