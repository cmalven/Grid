var config       = require('../config');
var gulp         = require('gulp');
var imagemin     = require('gulp-imagemin');

//
//   Images
//
//////////////////////////////////////////////////////////////////////

/*
Lossless optimization of image files
*/

module.exports = gulp.task('images', function() {
  return gulp.src([
    config.paths.imageSrc + '**/*'
  ])
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{
      cleanupIDs: false,
      collapseGroups: false,
      mergePaths: false,
      moveElemsAttrsToGroup: false,
      moveGroupAttrsToElems: false,
      removeUselessStrokeAndFill: false,
      removeViewBox: false
    }]
  }))
  .pipe(gulp.dest(config.paths.imageDist));
});