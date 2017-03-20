var gulp         = require('gulp');
var runSequence  = require('run-sequence');

//
//   Default
//
//////////////////////////////////////////////////////////////////////

module.exports = gulp.task('default', function(callback) {
  runSequence(
    'build',
    [
      'browserSync',
      'watch'
    ],
    callback
  );
});