var gulp = require('gulp')
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var merge = require('merge-stream');

var tsProject = ts.createProject('tsconfig.json', { sortOutput: true });

gulp.task('ts', function() {
	var tsResult = gulp.src([
			'src/**/*.ts*'
		])
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject));

	return tsResult.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/'));
});

gulp.task('sass', function () {
	var sassStream = gulp.src('style/**/*.scss')
		.pipe(sass().on('error', sass.logError));
	
	var depStream = gulp.src('node_modules/normalize.css/normalize.css');
	
	return merge(depStream, sassStream)
		.pipe(concat('style.css'))
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', ['ts', 'sass']);

// ./node_modules/.bin/jspm bundle dist/app.js dist/deps.lib.js --minify
