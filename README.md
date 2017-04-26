# A Simple Video Player using HTML5/CSS3/ES6 with Gulp/Babel

An HTML5/CSS/ES6 Simple Video Player using Gulp to organize the build and invoke babel for transpiling. We will also use ES6 in Gulp as well (requires Gulp 3.9 or greater).


version 1.0

**Using this Repo:**

Simply fork this branch. Have fun.

**Setup from Scratch:**

1. Create a new repo on github. Choose a title, description, for gitIgnore choose _node_, for license choose _MIT_.

2. Clone your newly created repo to your _projects folder_.

3. Go to the directory of your local copy of the repo in your projects folder ( i.e. cd ./blah/blah/projects/ra-videoplayer-es6-gulp-babel).

4. run **npm init**. This will create your base package.json. Fill in the details as appropriate. (make a note of your GIT url to ensure that it connects to your remote repository).

5. Make sure gulp is installed (global and local)

_`npm install gulp && install -g gulp`_

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
















