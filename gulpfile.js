var gulp = require('gulp');

// gulp:sync
var syncGlobs = ['app/images/**/*']; 

gulp.task('watch',function(){
    gulp.watch('app/scss/*.scss',['styles']);
    gulp.watch('app/*.html',['htmls']);
    gulp.watch(syncGlobs, ['sync']);
});

gulp.task('sync', function(){
	return gulp.src(syncGlobs, { base: 'app' })
		.pipe(gulp.dest('./build'))
});

require('gulp-task-loader')('gulp-tasks-use');
// gulp.task('default', ['bundle-js']);
gulp.task('default',['webserver', 'bundle-js', 'htmls', 'styles', 'watch', 'sync']);
