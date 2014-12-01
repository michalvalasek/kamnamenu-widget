var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('default', function(){
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    b.transform(reactify)
    return b.bundle();
  });

  return gulp.src(['./src/*.jsx'])
    .pipe(browserified)
    .pipe(uglify())
    .pipe(rename('kamnamenu-widget.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.*',['default'])
});
