var gulp = require('gulp'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect');

gulp.task('sass', function(){
  return gulp.src('./assets/css/src/application.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css/'))
});

gulp.task('server', function() {
  connect.server({
    root: '.',
    livereload: true,
    port: 8888
  });
});
 
gulp.task('html', function () {
  gulp.src('./index.html')
    .pipe(gulp.dest('.'))
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./assets/css/application.css')
    .pipe(gulp.dest('./assets/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch('./assets/css/src/**/*.scss', ['sass']); 
  gulp.watch(['./index.html'], ['html']);
  gulp.watch(['./assets/css/application.css'], ['css']);	
});

gulp.task('default', ['sass', 'server', 'watch']);