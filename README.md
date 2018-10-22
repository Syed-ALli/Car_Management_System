# AeroplaneManagementSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.31.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Notes

Interfaces are used to implement strong typing. They enforce the shape of objects and promote consistency:

[aeroplane.ts](https://github.com/DonatoCappiello/Aeroplane-Management-System/blob/master/src/app/aeroplanes-fleet/aeroplane.ts)


All components properties are declared private and accessed using getters and setters methods ensuring that no data can be stored without proper validation:

[aeroplanes-fleet.component.ts](https://github.com/DonatoCappiello/Aeroplane-Management-System/blob/master/src/app/aeroplanes-fleet/aeroplanes-fleet.component.ts)
(in this demo validation has not been implemented)


Data is retrieved using a service and an observable, making it available troughout the whole application:
[aeroplane.service.ts](https://github.com/DonatoCappiello/Aeroplane-Management-System/blob/master/src/app/services/aeroplane.service.ts)

[screenshot1.jpg](https://github.com/DonatoCappiello/Aeroplane-Management-System/blob/master/screenshot1.jpg)
[screenshot2.jpg](https://github.com/DonatoCappiello/Aeroplane-Management-System/blob/master/screenshot2.jpg)
[screenshot3.jpg](https://github.com/DonatoCappiello/Aeroplane-Management-System/blob/master/screenshot3.jpg)
[screenshot4.jpg](https://github.com/DonatoCappiello/Aeroplane-Management-System/blob/master/screenshot4.jpg)
[screenshot5.jpg](https://github.com/DonatoCappiello/Aeroplane-Management-System/blob/master/screenshot5.jpg)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
