var config       = require('../config');
var gulp         = require('gulp');
var del          = require('del');

//
//   Clean
//
//////////////////////////////////////////////////////////////////////

/*
Clears all distribution directories
*/

module.exports = gulp.task('clean', function() {
  return del(config.paths.dist);
});