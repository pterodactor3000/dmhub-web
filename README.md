# dmhub-web

Web access to DMHub repository https://github.com/davewx7/dmhub-wiki/wiki



# WebHub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



# Contributing

If you would like to contribute to the project, please stick to the notes below.

## Styles

Styles are created using [SCSS](https://sass-lang.com/documentation/) with [BEM methodology](https://getbem.com/).

Global styles are placed in the `src/styles` folder.

For values used in most places, please use variables declared in the files from styles folder. 

*If the variable does not exist and the value is used a lot, please declare that variable and update usages.*

### Mobile First

This project uses mobile first approach, so the user can access the pages wherever they want to.

Please use defined layout mixin to ensure mobile first, and if there should be one used and is not, please either create an issue or update style accordingly.

## Assets

Images and fonts are stored in `src/assets` folder. Use of them is declared in `.scss` files using variables declared in proper places.

## Structure

The project structure is as follows.

### Services

Services should be placed in the `services` folder following naming convention.

```
ng generate service <service name>
```

Ex.
```
ng generate service services/http
```

### Interceptors

Various interceptors (for now only for loading purpouses) should be placed in the `interceptors` folder following naming convention.

### Components

Components used to build the application should be generated using `angular cli` commands. **Please pay attention to component path! It's relative to `src/app` folder!**

The components used in routing are **lazy-loaded**, so please pay attention to it while adding new routing options.

#### Order

Please note, that the `<component name>` is path sensitive - if you want to generate it as a child to different one, you have to include that in the `<component name>`

##### Module

First thing that needs to be generated is a `module` for new component. 

```
ng generate module <component name>
```

Ex.
```
ng generate module components/base/footer
```

If you need the component to be a part of routing, you can add routing while generating the module.

```
ng generate module <component name> --routing
```

##### Component

After generating the module you should create component.

```
ng generate component <component name>
```

Ex.
```
ng generate component components/base/footer
```

#### Usage

Component can be used in different component after the module is imported.

Modules should import `WbHbModule` as first module, because the `WbHbModule` will contain all shared modules for the application.

`BaseComponent` should be used in components that are fetching data from the api. It contains simple logic for recording order of queries for multiple calls (used with `forkJoin`). Inside this component there is also logic for unsubscribing from promises when the component is destroyed - to make sure it's used, you have to add `.pipe(takeUntil(this.unsubscribeSubject))` just before `.subscribe(...`.

The components should be as small as possible, meaning each component should have it's own responsibility and nothing more. If the component is used in multiple places with minimal modyfications, it can be placed in `base` folder with generic name and as little input/output configuration as possible.

## Conventions

```TODO```
