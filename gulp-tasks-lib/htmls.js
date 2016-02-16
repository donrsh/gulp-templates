// gulp:htmls
var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');

module.exports = function() {
	gulp.task('htmls', function(){
		var opts = { comments: false, spare: false, quotes: true};

		return gulp.src('./app/*.html')
			// .pipe(minifyHTML(opts))
			.pipe(gulp.dest('./build'));
	});
};