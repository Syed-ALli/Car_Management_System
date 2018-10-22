import { Component, OnInit, ViewChild } from '@angular/core';
import { ICar} from './car';
import { CarService } from '../services/car.service';
import { CarEditComponent } from '../car-edit/car-edit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'ams-fleet',
  moduleId: module.id,
  templateUrl: 'cars.component.html',
  styleUrls: ['cars.component.css']
})
export class CarsComponent implements OnInit {

  

  private pageTitle: string = "Cars Management";

  private imageWidth: number = 150;

  private imageMargins: number = 2;

  private showImage: boolean = false;

  public carListFilter: string = "";

  errorMessage: string;

  id: number;

  private localData = JSON.parse(localStorage.getItem("mylocalData"));


  private cars: ICar[];

  constructor(private _carService: CarService,private _router:Router) { }

  // @ViewChild(CarEditComponent) private _child: CarEditComponent;

  ngOnInit() {
    console.log('');
    this._carService.getCars(this.id)
      .subscribe(Car => {
        this.cars = Car;
        if (this.cars) {
          this.cars.forEach((obj)=>{
            if(obj.carId in localStorage)
            {
              let lSObj = JSON.parse(localStorage.getItem(''+obj.carId));
              obj.type = lSObj.type;
              obj.registration_no = lSObj.registration_no;
              obj.hourly_rate = lSObj.hourly_rate;
              obj.color = lSObj.color;
              obj.serviceability = lSObj.serviceability;
              obj.imageUrl = lSObj.imageUrl;
              console.log(this.cars);
            }
          })
        }
        console.log('data: ', this.cars)
        this._carService.setCars(this.cars);
      }, 
      error => this.errorMessage = <any>error);
  }

  public getPageTitle(): string {
    return this.pageTitle;
  }


/**
 * foreach loop
 *  obj.carId in localstorage
 * if mathes then replace values
 * else use
 */

  public getCars(): any[] {

    if (this.cars) {
      this.cars.forEach(function(obj){
        if(obj.carId in localStorage)
        {
          obj = JSON.parse(localStorage.getItem(''+obj.carId));
  
        }
        else{
        }
      })
    }
      return this.cars ;
    
  }

  public getImageWidth(): number {
    return this.imageWidth;
  }

  public getImageMargins(): number {
    return this.imageMargins;
  }

  public toggleImage(): void {
    this.showImage = !this.showImage;
  }

  public imageVisibility(): boolean {
    return this.showImage;
  }

  public onServiceabilityClicked($message): void {
    alert($message);
  }

  onEdit(e):void{
    
    e.preventDefault();
  }

  
  
}
