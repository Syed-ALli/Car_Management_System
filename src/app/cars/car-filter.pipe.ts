import { PipeTransform, Pipe } from '@angular/core';
import {ICar} from './car'
 
@Pipe({
    name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {
    transform (value: ICar[], filterBy: string): ICar[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(function(value){return (value.type.toLocaleLowerCase().indexOf(filterBy) !== -1)}) : value;
    }

}