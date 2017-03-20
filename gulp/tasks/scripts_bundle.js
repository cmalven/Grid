var config             = require('../config');
var gulp               = require('gulp');
var browserSync        = require('browser-sync');
var _                  = require('lodash');
var util               = require('gulp-util');
var path               = require('path');
var webpack            = require('webpack');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

//
//   Scripts : Bundle
//
//////////////////////////////////////////////////////////////////////

/*
Bundles javascript files.
*/

gulp.task('scripts:bundle', ['scripts:lint'], function(callback) {
  var webpackConfig = {
    entry: _.reduce(config.scripts.entryFiles, function(result, name) {
      result[name] = './' + config.paths.scriptSrc + name;
      return result;
    }, {}),

    output: {
      path: './' + config.paths.scriptDist,
      filename: '[name].bundle.js'
    },

    resolve: {
      root: [
        path.resolve('./bower_components'),
        path.resolve('./' + config.paths.scriptSrc + 'vendor')
      ],
      alias: config.scripts.aliases
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'stage-2', 'react']
          }
        }
      ]
    },

    plugins: [
      new CommonsChunkPlugin('common.bundle.js'),
      
      // Allows us to require bower components
      // e.g. var someBowerInstalledLib = require('bower-installed-lib-name');
      new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
      ),
      
      // Remove duplicate code
      new webpack.optimize.DedupePlugin(),
      
      // Give all modules access to jQuery
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }

  webpack(webpackConfig, function(err, stats) {
    if (err) throw new util.PluginError('webpack', err);
    util.log('[webpack]', stats.toString({}));
    browserSync.reload({ once: true });
    callback();
  });
});
