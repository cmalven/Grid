var config       = require('../config');
var gulp         = require('gulp');
var uglify       = require('gulp-uglify');

//
//   Scripts : Uglify
//
//////////////////////////////////////////////////////////////////////

/*
Minimizes the size of the javascript bundle file
*/

module.exports = gulp.task('scripts:uglify', ['scripts:bundle'], function() {
  return gulp.src([
    config.paths.scriptDist + '**/*.js'
  ])
  .pipe(uglify())
  .pipe(gulp.dest(config.paths.scriptDist));
});