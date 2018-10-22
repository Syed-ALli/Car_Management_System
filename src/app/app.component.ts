import { Component } from '@angular/core';
import { CarService } from './services/car.service';

@Component({
  selector: 'ams-root',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ CarService ]
})
export class AppComponent {
  title: string = 'Cars Management System';
}
