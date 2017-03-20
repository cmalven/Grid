var config       = require('../config');
var gulp         = require('gulp');

//
//   Styles: Copy
//
//////////////////////////////////////////////////////////////////////

/*
Copies style files from src to dist
*/

module.exports = gulp.task('styles:copy', function() {
  var styleSrc = [];

  config.paths.styleCopyPaths.forEach(function(path) {
    styleSrc.push(config.paths.styleSrc + path + '*');
  });

  return gulp.src(styleSrc)
    .pipe(gulp.dest(config.paths.styleDist));
});