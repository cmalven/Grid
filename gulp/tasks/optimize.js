var gulp         = require('gulp');
var runSequence  = require('run-sequence');

//
//   Build
//
//////////////////////////////////////////////////////////////////////

/*
Runs all tasks needed to produce a deployable project
*/

module.exports = gulp.task('optimize', function(callback) {
  runSequence(
    'build',
    'scripts:uglify',
    callback
  );
});
