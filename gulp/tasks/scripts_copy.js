var config       = require('../config');
var gulp         = require('gulp');

//
//   Scripts: Copy
//
//////////////////////////////////////////////////////////////////////

/*
Copies script files from src to dist
*/

module.exports = gulp.task('scripts:copy', ['scripts:bundle'], function() {
  var scriptSrc = [];

  config.paths.scriptCopyPaths.forEach(function(path) {
    scriptSrc.push(config.paths.scriptSrc + path + '**/*.js');
  });

  return gulp.src(scriptSrc)
    .pipe(gulp.dest(config.paths.scriptDist));
});