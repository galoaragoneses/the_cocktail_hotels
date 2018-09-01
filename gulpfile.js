var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('./assets/css/src/application.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css/'))
});

gulp.task('watch', function(){
  gulp.watch('./assets/css/src/**/*.scss', ['sass']); 
})