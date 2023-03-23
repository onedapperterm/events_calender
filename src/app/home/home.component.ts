import { Component } from '@angular/core';
import { CityEvent } from '../model/interfaces/event.interface';
import { DUMMY_EVENTS } from '../util/dummy-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public events: CityEvent[] = DUMMY_EVENTS;

}
