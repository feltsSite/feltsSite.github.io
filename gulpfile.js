var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
	gulp.src('lesson/sass/style.sass')
		.pipe(autoprefixer())
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('lesson/styles'));
});

gulp.task('sass:watch', function() {
	gulp.watch('lesson/**/*.sass', ['sass']);
});