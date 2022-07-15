# Getting Started with this app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The react online editors we've tried has good support for react/js files, but limited options for styling imports.

Therefore, is project is set up to help:
1. Give the developers a working dev environment to create example code for a workshop
2. Generate a css-file with all necessary styling from ffe and the example code

Because of this, and to make sure no styling code is forgotten, the styling-part of the project is a little different.

When first cloning this app `npm install` in root folder.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### This will not recompile your styling, run `npm webpack` to generate new version of main.css


### `npm webpack`
Creates two master-files: `main.js` and `main.css`
The css file is the styling bundle made from the project files, to make sure your styling is included import it in `App.less`

### `npm watch`
runs webpack in watch mode

#### For hotloading while developing use both `npm start` and `npm watch`