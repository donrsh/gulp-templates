//gulp:webserver
var gulp = require('gulp');
var webserver = require('gulp-webserver');

module.exports = function() {
	gulp.task('webserver', function() {
	  gulp.src('./build/')
	    .pipe(webserver({
	      port:1234,
	      livereload: true,
	      directoryListing: false,
	      open: false,
	
	      fallback: 'index.html'
	    }));
	});
};