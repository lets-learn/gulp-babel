# Gulp and Babel Example

A simple gulp script to get you started with a new ES6 project.

If you want more information check out the [Let's Learn ES6](https://youtu.be/xFbi2lhHm04?list=PL57atfCFqj2h5fpdZD-doGEIs0NZxeJTX) video on it. 


###### Gulp [[1]](http://gulpjs.com/) [[2]](https://www.npmjs.com/package/gulp)
* Gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something

###### Babel [[1]](https://babeljs.io/) [[2]](https://www.npmjs.com/package/babel)
* Babel is a transpiler that has been created to make it realy easy to transfer our code from ES6 to ES5.

#### Install Gulp
```
npm install -g gulp
```
#### Create package.json
```
npm init
```
This will initialize the NPM package.json and It will ask a bunch of questions.
For more detail follow [this](https://docs.npmjs.com/getting-started/using-a-package.json).

#### Add dependencies

```
npm install --save-dev gulp gulp-babel babel-preset-es2015
```
This will grab all those packages and add into dependency in package.json like this.
```javascrip
 "devDependencies": {
    "babel-preset-es2015": "^6.18.0",
    "gulp": "^3.9.1",
    "gulp-babel": "^6.1.2"
  }
```

#### Gulp Task
* Create [gulpfile.js](https://github.com/Kishanjvaghela/gulp-babel/blob/master/gulpfile.js)
* To run Gulp Task, type this in terminal.
	```
    gulp
    ```
    Anytime save or change of file happens to [app.js](https://github.com/Kishanjvaghela/gulp-babel/blob/master/src/app.js), this task run and output compiled transpile code into build folder.

