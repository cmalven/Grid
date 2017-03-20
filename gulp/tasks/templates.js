var config       = require('../config');
var gulp         = require('gulp');
var twig         = require('gulp-twig');
var browserSync  = require('browser-sync');

//
//   Templates
//
//////////////////////////////////////////////////////////////////////

/*
Reloads the browser on changes to templates
*/

module.exports = gulp.task('templates', function() {
  return gulp.src([
    config.paths.templateSrc + '*.twig'
  ])
  .pipe(twig())
  .pipe(gulp.dest(config.paths.templateDist))
  .pipe(browserSync.reload({ stream: true, once: true }));
});