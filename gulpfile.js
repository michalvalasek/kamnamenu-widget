var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var streamify = require('gulp-streamify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var replace = require('gulp-replace');

function onError(err) {
  console.log('error: ',err);
}

function getBuildFunction(type) {
  type = type=='small' ? 'small' : 'large';
  var path = {
    OUT: 'kamnamenu-widget-'+type+'.min.js',
    DEST: 'dist',
    ENTRY_POINT: './src/'+type+'/main.jsx'
  };
  return function(){
    browserify({
      entries: [path.ENTRY_POINT],
      transform: [reactify]
    })
      .bundle()
      .pipe(source(path.OUT))
      .pipe(replace(/#IMAGES_LOCATION#/g,'images'))
      .pipe(streamify(uglify(path.OUT)))
      .pipe(gulp.dest(path.DEST))
      .on('error', onError);
  }
}

gulp.task('build-small', getBuildFunction('small'));

gulp.task('build-large', getBuildFunction('large'));

gulp.task('watch', function(){
 gulp.watch('src/small/**/*.*',['build-small']);
 gulp.watch('src/large/**/*.*',['build-large']);
});

gulp.task('default',['build-small','build-large']);
