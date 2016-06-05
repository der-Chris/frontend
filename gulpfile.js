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
	'es6-shim',
	'pouchdb'
];

gulp.task('ts', function () {
	var tsResult = gulp.src([
			'src/**/*.ts*'
		])
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject));

	return tsResult.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/src/'));
});

gulp.task('app', ['ts'], function () {
	return browserify('build/src/app.js', {
			debug: true
		})
		.external(vendorLibs)
		.bundle()
		.pipe(source('a.js'))
		.pipe(gulp.dest('build/'));
});

gulp.task('vendor', function () {
	var b = browserify({ debug: false });

	vendorLibs.forEach(function (id) {
		b.require(resolve.sync(id), { expose: id });
	});

	return b.bundle()
		.on('error', function (err){
			console.log(err.message);
			this.emit('end');
		})
		.pipe(source('v.js'))
		.pipe(gulp.dest('build/'));
});

gulp.task('style', function () {
	var sassStream = gulp.src('style/**/*.scss')
		.pipe(sass().on('error', sass.logError));
	
	var depStream = gulp.src([
		'node_modules/spectre.css/dist/spectre.min.css'
	]);

	return merge(depStream, sassStream)
		.pipe(concat('s.css'))
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(gulp.dest('build/'));
});

gulp.task('assets', function () {
	return gulp.src('assets/*')
  		.pipe(gulp.dest('build/'));
});

gulp.task('app:minify', ['bundle'], function () {
	gulp.src('build/a.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/'));
});

gulp.task('vendor:minify', ['vendor'], function () {
	gulp.src('build/v.js')
		.pipe(uglify({
			preserveComments: 'license'
		}))
		.pipe(gulp.dest('build/'));
});

gulp.task('minify', ['app:minify', 'vendor:minify']);
gulp.task('default', ['app', 'vendor', 'assets', 'style']);
