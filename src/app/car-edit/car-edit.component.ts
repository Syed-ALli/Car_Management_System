import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICar } from '../cars/car';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  mycarI: any;

  private pageTitle: string = "Cars-Detail";

  constructor(private _route: ActivatedRoute, private _routeback: Router,private _carservice:CarService) { }

  ngOnInit() {

    this.getcarId();

    //let id=+this._route.snapshot.params['id'];
    //this.pageTitle += `: ${id}`
  }

  goBack():void{
    this._routeback.navigate(['/cars']);
  }

  getcarId(): void{
    const id=+this._route.snapshot.params['id'];
    this.pageTitle += `:${id}`
    this.mycarI = this._carservice.getCar(id);
    
  }

  updateData():void{

    localStorage.setItem(this.mycarI.carId,JSON.stringify(this.mycarI));
    this._routeback.navigate(['/cars']);
   
  }



}
