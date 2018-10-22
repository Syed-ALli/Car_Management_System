import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ICar } from '../cars/car';

@Injectable()

export class CarService{

  private _carUrl = './api/cars/cars.json';
  cars:any = null;

  constructor(private _http: Http) { }


  public getCars(id:number): Observable<ICar[]> {
    return this._http.get(this._carUrl)
            .map((response: Response) => <ICar[]>response.json())
            .do(data => console.log('All cars: ' + JSON.stringify(data)))
            .catch(this.handleError);
  }

  public getCar(id: number) {
    return this.cars.find(x => x.carId == id);
  }

  public setCars(cars: any) {
    this.cars = cars;
    // console.log(this.cars)
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }



}
