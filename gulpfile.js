var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var source = require('vinyl-source-stream');
var resolve = require('resolve');

var tsProject = ts.createProject('tsconfig.json', { sortOutput: true });

var vendorLibs = [
	'react',
	'react-dom',
	'redux',
	'react-redux',
	'es6-shim'
];

gulp.task('client:ts', function () {
	var tsResult = gulp.src([
			'client/src/**/*.ts*'
		])
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject));

	return tsResult.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/client/src/'));
});

gulp.task('client:bundle', ['client:ts'], function () {
	return browserify('build/client/src/app.js', {
			debug: true
		})
		.external(vendorLibs)
		.bundle()
		.pipe(source('a.js'))
		.pipe(gulp.dest('build/client/'));
});

gulp.task('client:vendor:bundle', function () {
	var b = browserify({ debug: false });

	vendorLibs.forEach(function (id) {
		b.require(resolve.sync(id), { expose: id });
	});

	return b
		.bundle()
		.on('error', function (err){
			console.log(err.message);
			this.emit('end');
		})
		.pipe(source('v.js'))
		.pipe(gulp.dest('build/client/'));
});

gulp.task('client:style', function () {
	var sassStream = gulp.src('client/style/**/*.scss')
		.pipe(sass().on('error', sass.logError));
	
	var depStream = gulp.src('node_modules/normalize.css/normalize.css');
	
	return merge(depStream, sassStream)
		.pipe(concat('s.css'))
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(gulp.dest('build/client/'));
});

gulp.task('client:minify', ['client:bundle'], function () {
	gulp.src('build/client/a.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/client/'));
});

gulp.task('client:vendor:minify', ['client:vendor:bundle'], function () {
	gulp.src('build/client/v.js')
		.pipe(uglify({
			preserveComments: 'license'
		}))
		.pipe(gulp.dest('build/client/'));
});

gulp.task('server:ts', function () {
	var tsResult = gulp.src([
			'server/**/*.ts*'
		])
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject));

	return tsResult.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/server/'));
});

gulp.task('minify', ['client:minify', 'cient:vendor:minify']);
gulp.task('client', ['app:ts', 'client:bundle']);
gulp.task('server', ['server:ts']);
gulp.task('default', ['server', 'client', 'client:vendor:bundle', 'client:style']);