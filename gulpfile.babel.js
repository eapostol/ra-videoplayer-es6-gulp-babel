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
import browsersync from 'browser-sync';

browsersync.create();
let browserSyncFn = () => {
    browsersync.init({
        server: {
            baseDir: 'app'
        },
    });
};

gulp.task('browserSyncTask', browserSyncFn);

let sassFn = () =>{
    console.log('sassifying scss');
    return gulp.src('./app/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
        .pipe(browsersync.reload({
            stream: true
        }))
};

/* add a watch to monitor changes to files
* gulp.watch('files-to-watch', ['tasks', 'to', 'run']);
* or
* gulp.task('watch',function(){});
* or ES6
* gulp.task('watch', ()=>{} );
*/
// gulp.watch('app/scss/**/*.scss', ['sassFn'])
// sassify code
gulp.task('sass',sassFn );
let watchFn = ()=>{
    gulp.watch('app/scss/**/*.scss', [sassFn]);

    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browsersync.reload);
    gulp.watch('app/js/**/*.js', browsersync.reload);
};

gulp.task('watch',['browserSyncTask','sass'], watchFn);

// gulp.task('default', () => console.log('Default task called'));
