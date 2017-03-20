var config       = require('../config');
var gulp         = require('gulp');
var svgSprite    = require('gulp-svg-sprite');


//
//   Images
//
//////////////////////////////////////////////////////////////////////

/*
Lossless optimization of image files
*/

module.exports = gulp.task('svg', function() {
  var svgSpriteConfig = {
    mode: {
      symbol: {
        render: {
          css: true
        }
      }
    }
  };

  return gulp.src([
    config.paths.imageSrc + 'svg/*.svg'
  ])
  .pipe(svgSprite(svgSpriteConfig))
  .pipe(gulp.dest(config.paths.imageDist + 'svg'));
});
