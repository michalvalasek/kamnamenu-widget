var gulp = require('gulp');
var react = require('gulp-react');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
    return gulp.src('src/widget.jsx')
        .pipe(react())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.*',['default'])
});
