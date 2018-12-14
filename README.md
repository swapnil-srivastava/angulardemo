# Angulardemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Project Help 

Firebase token should be generated in order to get the app up and running. 

`firebase login:ci` to generate the code on ur local machine 

`FIREBASE_TOKEN` to the build enviornment for safe keeping so the next command can pick up this and deploy

`firebase deploy --token "$FIREBASE_TOKEN"`  use this command to deploy in ci 


## Firebase help

firebase.json file has a key `public` if it is equal to the `""` then it means that it is will take everything is the root directory


## Angular Universal 

https://angular.io/guide/universal

`npm install --save @angular/platform-server @nguniversal/module-map-ngfactory-loader ts-loader`

