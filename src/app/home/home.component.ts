import { Component, OnInit } from '@angular/core'
import { CityEvent } from '../model/interfaces/event.interface'
import { EventsCrudService } from '../services/events-crud.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private allEvents: CityEvent[] = []
  public events: CityEvent[] = []

  constructor(private _evntsCrudService: EventsCrudService) {}

  ngOnInit(): void {
    this.updateEvents();
  }

  private updateEvents():void {
    this._evntsCrudService.getEvents()
      .subscribe(events => this.allEvents = events);
  }

  public filterEventsByDate(date: Date): void {
    this.events = this.allEvents.filter(event => isSameDay(event.date, date))
  }
}

function isSameDay(date1: Date, date2: Date): boolean {
  let num1 = date1.getDate() + date1.getMonth() * 100 + date1.getFullYear() * 10000;
  let num2 = date2.getDate() + date2.getMonth() * 100 + date2.getFullYear() * 10000;
  return num1 === num2;
}
