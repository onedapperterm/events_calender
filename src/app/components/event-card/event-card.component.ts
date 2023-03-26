import { Component, Input } from '@angular/core';
import { CityEvent } from 'src/app/model/interfaces/event.interface';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {
  @Input() event!: CityEvent;

  toEditEvent(){
    console.log("Ji")
  }

}
