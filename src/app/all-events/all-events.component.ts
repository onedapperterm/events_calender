import { Component } from '@angular/core';
import { CityEvent } from '../model/interfaces/event.interface';
import { DUMMY_EVENTS } from '../util/dummy-data';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent {
  public events: CityEvent[] = DUMMY_EVENTS;
}
