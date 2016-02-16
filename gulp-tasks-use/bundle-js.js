// gulp:bundle-js
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

module.exports = function() {
	gulp.task('bundle-js', function(){
		var webpackConfig = require('../webpackconfig_bundle-js.js');
		webpackConfig.watch = true;
	
		return gulp.src('./app/js/index.jsx')
			.pipe(webpack(webpackConfig))
			.pipe(uglify())
			.pipe(rename('bundle.js'))
			.pipe(gulp.dest('./build/js'));
	});
};
