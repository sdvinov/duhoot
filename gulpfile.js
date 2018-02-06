var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	gulp.src('./proj/**/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./proj'));
});

gulp.task('sass:watch', function(){
	gulp.watch('./proj/**/*.scss', ['sass']);
});