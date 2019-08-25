'use strict'
// Require gulp
const gulp = require('gulp');
// Require gulp-babel
const babel = require('gulp-babel');
const watchPath = 'src/app.js'

// Create an babelPresetEnv task
gulp.task('babelPresetEnv', () => {
	// Return gulp.src with the src set to our src folder
	// we return here do that we indicate to gulp that this task is async
	return gulp.src(watchPath)
		// We pipe the source into babel
		.pipe(babel({
			// We need to tell babel to use the @babel/preset-env
			presets: [
				[
					'@babel/preset-env', {
						'targets': {
							'browsers': '> 0.1%, not dead'
						},
						'debug': true
					}
				]
			]
		}))
		// We then pipe that into gulp.dest to set a final destination
		// In this case a build folder
		.pipe(gulp.dest('build'));
});
// Create a default gulp task, this lets us type gulp into the terminal
// The ['babelPresetEnv'] tells gulp what task or tasks to run right away.
gulp.task('default', gulp.series('babelPresetEnv',() => {
	// Tell gulp to watch for file changes on src/app.js
	// run the babelPresetEnv task when it changes!
	gulp.watch(watchPath, gulp.series('babelPresetEnv'));
}));


