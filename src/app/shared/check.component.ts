import { Component, OnInit, Input, OnChanges, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-check',
  moduleId: module.id,
  templateUrl: 'check.component.html',
  styleUrls: ['check.component.css']
})
export class CheckComponent implements OnInit {
  @Input() serviceability: boolean;

  @Output() carAvailability: EventEmitter<string> =
     new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.getServiceabilityIcon();  
  }

  public getServiceabilityIcon(): string {
    let icon = 'glyphicon glyphicon-remove';

    if (this.serviceability) {
       icon = 'glyphicon glyphicon-ok'; 
    }

    return icon;
  }

  onClick(): void {
    if (this.serviceability) {
      this.carAvailability.emit('Car is available'); 
    } else {
      this.carAvailability.emit('Car is not available'); 
    }
       
  }

}
