# A Simple Video Player using HTML5/CSS3/ES6 with Gulp/Babel

An HTML5/CSS/ES6 Simple Video Player using Gulp to organize the build and invoke babel for transpiling. We will also use ES6 in Gulp as well (requires Gulp 3.9 or greater).


version 1.0

**Using this Repo:**

Simply fork or clone the _master_ branch. Have fun. But really you should know how all these files were set up. So read on below to build this repo from scratch.

**Setup from Scratch:**

1. Create a new repo on github. Choose a title, description, for gitIgnore choose _node_, for license choose _MIT_.

2. Clone your newly created repo to your _projects folder_.

3. Go to the directory of your local copy of the repo in your projects folder ( i.e. cd ./blah/blah/projects/ra-videoplayer-es6-gulp-babel).

4. run **npm init**. This will create your base package.json. Fill in the details as appropriate. (make a note of your GIT url to ensure that it connects to your remote repository).

5. Make sure gulp is installed (global and local)

_`npm install --save-dev gulp && install -g gulp`_

_`gulp -v`_

returns 

_`[17:05:30] CLI version 3.9.1
[17:05:31] Local version 3.9.1`_


6. Make sure **babel** is installed.

_`npm install --save-dev babel-cli`_

_`(stuff is installed)`_

7. Make sure **babel-preset-es2015** is installed.

_`npm install babel-preset-es2015`_

_`(more stuff is installed)`_

8. Using an IDE or text editor, create a file called **.babelrc** and save it in your project directory. It's a configuration file for settings to be used by babel. In this file, enter the following code :

_`{
  "presets": ["es2015"]
}`_

This sets babel to read ES6/ES2015 style code and transpiles it back down to 2015.

9. now create your gulp file. But instead of calling it  __gulpfile.js__ call it **gulpfile.babel.js** in your project folder.

Using ES6 in gulpfile.js

10. Enter in the following code in gulpfile.js


**note this code is in the latest javascript ES6 (not in ES5)**

_`import gulp from 'gulp';`_

_`gulp.task('default', () => console.log('Default task called'));`_

this code illustrates the following ES6 commands:

- The _import_ statement

- 'fat arrow functions' (they are functions in a nice short form)
_`() =>`_ 


11. Now at the terminal in your project folder, just type in 

_`gulp`_


and the result should be something like this

edward-redacademy-to-2016:ra-videoplayer-es6-gulp-babel Edward_J_Apostol$ **gulp**

[18:02:24] Requiring external module babel-register

[18:02:24] Using gulpfile ~/Documents/Dropbox/RedAcademy/projects/ra-videoplayer-es6-gulp-babel/gulpfile.babel.js

[18:02:24] **Starting 'default'...
Default task called**

[18:02:24] Finished 'default' after 240 μs

The output in bold illustrates invoking gulp and executing the 'default' task/function.

**Next: install gulp-sass**

12. As a pre-requisite for the next series of steps, install gulp-sass to enable transpilation of .scss (SASS) files to .css

_`npm install --save-dev gulp-sass`_

13. and update gulpfile.babel.js by importing gulp-sass

_`import sass from 'gulp-sass';`_

14. create a folder in your project directory called **app**. The app folder will contain your source files for the project.

15. underneath the app folder, create the following subdirectories:

- scss
- css
- images
- fonts
- js
- media

16. Create a folder called **dist**. The dist folder will contain the outputted build of your website project .

17. edit **gulpfile.babel.js** in your IDE. Add the following:

at the top of the code:

_`import sass from 'gulp-sass';`_

18. Then add the following ES6 function below the import statements


_`let sassFn = () => {`_

_`return gulp.src("./app/scss/stylesTest.scss")
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest("./app/css"))`_
        
_`};`_

19. Then add the following task

_`gulp.task("sass",sassFn );`_


20. Test out your new sass transpilation process in the terminal...type 

_`gulp sass`_

You should see a new css file created in the css folder with the transpiled style.

**Add a gulp watch.**

Adding a watch function will _automate_ gulp. That means for example, if there are files that are changed (for example, editing your .scss files), you can call your transpilation function to transpile your .scss files to the .css file, in the correct directory.

21. Comment out this line

_`gulp.task("sass",sassFn );`_

so it becomes

_` // gulp.task("sass",sassFn );`_

22. Then type in the following code below the commented line from 21.

_`let watchFn = ()=>{
    gulp.watch("app/scss/**/*.scss", [sassFn]);
};
gulp.task("watch",watchFn);`_

23. Then in the terminal, type in

_`gulp watch`_

24. Make changes to your .scss file. for example, add

_`background-color: red;`_

then save the file.

25. Your terminal should update with statements like

[00:00:48] **Starting "watch"...**

[00:00:48] **Finished "watch" after 1.32 ms**

26. Look at your .css file. it should contain the updated stylings.

27. Repeat some additional changes to ensure that transpilation with a watch works.

28. press **ctrl-c** in your terminal to stop gulp from watching changes.

**Create an index.html page**

29. In the **app** folder, create an index.html page with the following code.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test Video Player v1.0</title>
    <link rel="stylesheet" href="css/main.css">

</head>
<body>
 Hello Video Player!
</body>
</html>

```

Save your file. You will use it with your web server.


**Configure a development 'web server'**

The next thing we'll do is configure a development 'web server'. As I discussed the other day, a web server is simply a 'fancy mac finder / windows explorer file find'. You request a web page from a web browser for example, and the computer that receives the request will then 'find' (in a directory) the file you requested and send it back through the network to your computer's web browser.

There are a number of development web servers to choose from when working in the node/npm environment.

This video player demo will use gulp-webserver, which is based on gulp-connect.

gulp-webserver:

https://www.npmjs.com/package/gulp-webserver

based on gulp-connect

https://github.com/AveVlad/gulp-connect/

There is also browser-sync. It may be better. They do the same thing.

Let's try browser-sync. If it fails, try gulp-webserver (but the instructions you may have to refer to elsewhere... like  - https://www.sourcetoad.com/web-training/gulp-webserver-for-the-win/ )

1. Install browser-sync at the terminal

_`npm install --save-dev browser-sync`_

2. Then in gulpfile.babel.js add the import...

import browsersync from 'browser-sync';

3. underneath the import, create an instance of the browser-sync server using the create method.

browsersync.create();

4. Create a browserSync task to enable Gulp to spin up a server using browser-sync. You will need to inform browser-sync where the root of the server should be. In our case, it's the `app` folder. Continue typing underneath the create() method statement.

_`let browserSyncFn = () => {`_

    browsersync.init({
    
        server: {
            baseDir: 'app'
        },
    });  
_`};`_

_`gulp.task('browserSyncTask', browserSyncFn);`_

5. Change the sass task slightly so browser-sync _injects_ new CSS styles (update the CSS) into the browser whenever the sass task is invoked. Modify the sassFn function so that the _return_ statement has this following appended to the end of the chain. (shortened for brevity here)

return gulp.src(...)

    .pipe(...)
    .pipe(...)
    .pipe(browsersync.reload({
                stream: true
            }))
});

6. Now we modify the watch and browserSyncTask functions.Add a second argument to the watch task and modify to run browser-sync, then sass before the watch function executes (ensuring that the css is ready).

_`gulp.task('watch',['browserSyncTask','sass'], watchFn);`_












































