var config       = require('../config');
var gulp         = require('gulp');
var del          = require('del');
var rev          = require('gulp-rev');
var replace      = require('gulp-replace');

//
//   Rev
//
//////////////////////////////////////////////////////////////////////

/*
Adds revision hash to assets and stores hashes in a manifest file
*/

gulp.task('rev', ['rev:clear'], function() {
  return gulp.src([
    config.paths.styleDist + '**/*.css',
    config.paths.scriptDist + '**/*.js'
  ], { base: "./" })
    .pipe(rev())
    .pipe(gulp.dest('.'))
    .pipe(rev.manifest())
    .pipe(replace('public', ''))
    .pipe(gulp.dest(config.paths.craftPath));
});

gulp.task('rev:clear', function() {
  return del([config.paths.craftPath + 'rev-manifest.json']);
});