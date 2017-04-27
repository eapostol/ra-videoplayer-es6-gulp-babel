/**
 * Created by Edward_J_Apostol on 2017-04-26.
 *
 *
 * gulp.task('task-name',
 * function () {
 * // Get source files with gulp.src
 * // Sends it through a gulp plugin
 * // Outputs the file in the destination folder
 *  return gulp.src('source-files')
 *  .pipe(aGulpPlugin())
 *  .pipe(gulp.dest('destination'))
 *  })
 */

'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';


let sassFn = () =>{
    return gulp.src('app/scss/main.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css'))
};

// sassify code
gulp.task('sass',sassFn );

// gulp.task('default', () => console.log('Default task called'));
