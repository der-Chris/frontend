var gulp = require('gulp')
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject('tsconfig.json', { sortOutput: true });

gulp.task('build', function() {
	var tsResult = gulp.src([
			'src/**/*.ts*'
		])
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject));

	return tsResult.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/'));
});
