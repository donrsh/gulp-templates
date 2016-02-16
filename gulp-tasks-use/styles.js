//gulp:webserver
var gulp = require('gulp');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var nano = require('gulp-cssnano');
var concat = require('gulp-concat');

//postcss dependencies
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var lost = require('lost');
var rucksack = require('rucksack-css');
var minmax = require('postcss-media-minmax');

module.exports = function() {
	gulp.task('styles', function(){
		var processors = [
			lost,
			rucksack({
				clearFix: false,
				fallbacks: true
			}),
			minmax,
			precss({}),
			autoprefixer({browsers: ['last 2 versions']}),
			// csswring({preserveHacks: true}),
		];

		var nanoOption = {
			discardComments: {removeAll: true},
			minifyFontValues: true,
		} 

		return gulp.src('./app/scss/*.scss')
			.pipe(plumber())
			.pipe(compass({
				// sourcemap: true,
				time: true,
				css: './app/css/',
				sass: './app/scss/',
				style: 'nested',
				require: ['susy', 'modular-scale', 'breakpoint']
			}))
			.pipe(postcss(processors))
			.pipe(concat('all.css'))
			.pipe(gulp.dest('./build/css/'))
			.pipe(nano(nanoOption))
			.pipe(rename('all.min.css'))
			.pipe(gulp.dest('./build/css/'));
	});
};