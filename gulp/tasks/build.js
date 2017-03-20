var gulp         = require('gulp');
var runSequence  = require('run-sequence');

//
//   Build
//
//////////////////////////////////////////////////////////////////////

/*
Runs all tasks needed to produce a deployable project
*/

module.exports = gulp.task('build', function(callback) {
  runSequence(
    'clean',
    [
      'templates',
      'scripts:lint',
      'scripts:bundle',
      'styles',
      'styles:copy',
      'scripts:copy',
      'images',
      'svg'
    ],
    'rev:clear',
    'rev',
    callback
  );
});
