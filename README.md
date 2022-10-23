# dmhub-web

Web access to DMHub repository https://github.com/davewx7/dmhub-wiki/wiki

# WebHub

This project was generated with
[Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` or `npm run start` for a dev server. Navigate to
`http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can
also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Default configuration for build is `production`.

### Production

By default run `npm run build` to build the project. The build artifacts will be
stored in the `dist/` directory.

### Development

For `development` build run `npm run build:dev`.

### PWA

For a version with service worker detection run `npm run build:watch`.

_Note:_ For using that, in another terminal run `npm run start:server`.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To
use this command, you need to first add a package that implements end-to-end
testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the
[Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Contributing

If you would like to contribute to the project, please stick to the notes below.

## Styles

Global styles are placed in the `src/styles` folder.

For values used in most places, please use variables declared in the files from
styles folder.

_If the variable does not exist and the value is used a lot, please declare that
variable and update usages._

### Mobile First

This project uses mobile first approach, so the user can access the pages
wherever they want to.

Please use defined layout mixin to ensure mobile first, and if there should be
one used and is not, please either create an issue or update style accordingly.

## Assets

Images and fonts are stored in `src/assets` folder. Use of them is declared in
`.scss` files using variables declared in proper places.

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

Various interceptors (for now only for loading purpouses) should be placed in
the `interceptors` folder following naming convention.

### Components

Components used to build the application should be generated using `angular cli`
commands. **Please pay attention to component path! It's relative to `src/app`
folder!**

The components used in routing are **lazy-loaded**, so please pay attention to
it while adding new routing options.

#### Order

Please note, that the `<component name>` is path sensitive - if you want to
generate it as a child to different one, you have to include that in the
`<component name>`

##### Module

First thing that needs to be generated is a `module` for new component.

```
ng generate module <component name>
```

Ex.

```
ng generate module components/base/footer
```

If you need the component to be a part of routing, you can add routing while
generating the module.

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

Modules should import `WbHbModule` as first module, because the `WbHbModule`
will contain all shared modules for the application.

`BaseComponent` should be used in components that are fetching data from the
api. It contains simple logic for recording order of queries for multiple calls
(used with `forkJoin`). Inside this component there is also logic for
unsubscribing from promises when the component is destroyed - to make sure it's
used, you have to add `.pipe(takeUntil(this.unsubscribeSubject))` just before
`.subscribe(...`.

The components should be as small as possible, meaning each component should
have it's own responsibility and nothing more. If the component is used in
multiple places with minimal modyfications, it can be placed in `base` folder
with generic name and as little input/output configuration as possible.

## Conventions

### Commits

Commits should be named in accordance to guide for
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

### Issues / Tasks

Issues, or tasks, should be created via
[Projects page](https://github.com/users/pterodactor3000/projects/1). Name of
the task should contain some kind of overall portion (or section) of the app
developed there and a specific part of said portion.

```
<section> - <feature>
```

Ex.

```
Character sheet - attributes
```

In the task description you can specify details for this feature. Required
fields to be filled in the issue are

- Labels - provide label for the task, either if it's general question, bug,
  enhancement, or etc.
- Projects - assign the project for this repo if its not assigned automatically.
- Milestone - assign milestone for the issue, if t does not exist - create one.

_Optional_ You can assign specific contributor to do the task, if you know that
said person will definately do it.

### Branches

Branches should follow convention based on gitflow and should be branched from
`main` branch.

```
feature/<issue number>-<short description>
bugfix/<issue number>-<short description>
hotfix/<issue number>-<short description>
```

### Pull requests

Pull requests should have in the title issue number and short description on
what it contains. The description can have more informations about changes and
(optional) screenshots.

_Note_: I'm aware that PRs so far do not use this convention, but from now on
(17.10.2022) they will :smile:

Please review PRs thoroughly! Check if the features are being built locally, if
they work properly and look as agreed upon. If that is ok, check the code for
possible improvements and optimisation. For PR comments we use
[Conventional Comments](https://conventionalcomments.org/).

### Components names

The components should be named with rather short names, but long enough to state
what the component is responsible for. With naming also take into consideration
relative placement of the component.

**_No!_**

```
GameCharacteSheetResourcesListComponent
```

**_Yes!_**

```
ResourcesComponent
```

_Placed in `components/game/character/sheet/resources`_

### Services names

Services also should be named like components: short and to the point, but
enough that you can discern what it's responsible for.

### Code

This project uses [Prettier formatter](https://prettier.io/).

Code should follow
[TypeScript style guide](https://google.github.io/styleguide/tsguide.html).

Styles are created using [SCSS](https://sass-lang.com/documentation/) with
[BEM methodology](https://getbem.com/).

### Types

This project uses [TypeScript](https://www.typescriptlang.org/docs/).

The variables and functions **_all_** should have types specified (excluding
constructor).

Types definitions have two steps:

1. Define possible keys for the type
2. Utilise defined keys for type declaration

**Ad. 1.** Keys are specific type of types (I know, I know...) defined using
union types with suffix `Keys`, and stored in `keys.d.ts` file.

Ex.

```
export type AttributesKeys = 'cha' | 'con' | 'dex' | 'int' | 'str' | 'wis';
```

**Ad. 2.** Types are defined in `types.d.ts` using keys from `keys.d.ts` by
utilising them as possible properties of types.

Ex.

```
export type Attributes = {
  [key in AttributesKeys]: number;
};
```

This allows us to index through the object values and access properties
dynamically:

Ex.

```
private buildParams(query: QueryParams): HttpParams {
    let params = new HttpParams();

    for (const key in query) {
      if (query[key as QueryParamsKeys]) {
        params = params.append(key, query[key as QueryParamsKeys]);
      }
    }

    return params;
  }
```
