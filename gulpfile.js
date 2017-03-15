var gulp = require ('gulp'),
  browserSync = require ('browser-sync').create(),
  prettyError = require ('gulp-prettyerror'),
  sass = require ('gulp-sass');

gulp.task('browser-sync', function(){
    browserSync.init({
    server: {
      baseDir: "./production-test"
    }
    });
});

gulp.task ('sass', function() {
  gulp.src('./development-test/sass/main.scss')
  .pipe(prettyError())
  .pipe(sass({
    outputStyle: 'compressed',
  }))
  .pipe(gulp.dest ('production-test/css'))
});

gulp.task('watch',   function() {
  gulp.watch('./development-test/sass/**/*.scss', ['sass']).on('change', browserSync.reload);
  gulp.watch('./production-test/index.html').on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'browser-sync', 'watch']);
