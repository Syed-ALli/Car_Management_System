import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { CarDetailComponent } from './car-detail/car-detail.component';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import {CarFilterPipe} from './cars/car-filter.pipe';
import { CheckComponent } from './shared/check.component';
import { HomeComponent } from './home/home.component';
import { PrimeNgComponent } from './prime-ng/prime-ng.component';
import {AccordionModule as AccordionModuleNG} from 'primeng/primeng';
import {SharedModule as SharedModuleNG} from 'primeng/primeng';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarService } from './services/car.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarFilterPipe,
    CheckComponent,
    HomeComponent,
    PrimeNgComponent,
    CarEditComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModuleNG,
    SharedModuleNG,
    RouterModule.forRoot([
      { path: 'cars', component: CarsComponent },
      { path: 'home', component: HomeComponent },
      { path: 'prime', component: PrimeNgComponent },
      { path: 'cardetail', component:  CarDetailComponent },
      { path: 'caredit/:id', component:  CarEditComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
      
  ])
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }