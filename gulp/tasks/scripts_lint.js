var config       = require('../config');
var gulp         = require('gulp');
var eslint       = require('gulp-eslint');

//
//   Scripts : Lint
//
//////////////////////////////////////////////////////////////////////

/*
Reviews files for errors and coding consistency 
*/

module.exports = gulp.task('scripts:lint', function() {
  return gulp.src([
    config.paths.scriptSrc + '**/*.js',
    '!' + config.paths.scriptSrc + 'vendor/**/*.js'
  ])
  .pipe(eslint({
    configFile: './node_modules/eslint-config-odc/eslintrc.json',
    useEslintrc: false
  }))
  .pipe(eslint.format());
});