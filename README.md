# Wsearch

This demo app was built to explore the intracacies of API requests and the benefit of using defined interfaces with RxJS and RxJS pipes to "condition" the received data.  By definining the interface to be used at the point of request, only the required data is passed around between components and modules.  One key point to note is that the interface is defined with the "consuming" class, so that the file that contains the class also has the definitions of what is required to use that class.  There's no doubt that Typescript has brought maturity to Javascript OOP.

A live demo of this app can be seen at [https://angular-demo-wikipedia-search.herokuapp.com/](https://angular-demo-wikipedia-search.herokuapp.com/).

# Angular Stuff ...

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
