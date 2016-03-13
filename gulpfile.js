var gulp = require('gulp')
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var sass = require('gulp-sass');
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

gulp.task('app:ts', function() {
	var tsResult = gulp.src([
			'src/**/*.ts*'
		])
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject));

	return tsResult.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/app/'));
});

gulp.task('app:bundle', function() {
	return browserify('build/app/app.js', {
			debug: true,
		})
		.external(vendorLibs)
		.bundle()
		.pipe(source('a.js'))
		.pipe(gulp.dest('build/'));
});

gulp.task('vendor', function() {
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
		.pipe(gulp.dest('build/'));
});

gulp.task('style', function () {
	var sassStream = gulp.src('style/**/*.scss')
		.pipe(sass().on('error', sass.logError));
	
	var depStream = gulp.src('node_modules/normalize.css/normalize.css');
	
	return merge(depStream, sassStream)
		.pipe(concat('s.css'))
		.pipe(gulp.dest('build/'));
});

gulp.task('app', ['app:ts', 'app:bundle']);
gulp.task('default', ['app', 'vendor', 'style']);
