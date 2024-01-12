import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { CityEvent } from '../model/interfaces/event.interface'
import { EventsCrudService } from '../services/events-crud.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public events$: Observable<CityEvent[]> = this._evntsCrudService.getEvents()

  constructor(private _evntsCrudService: EventsCrudService) {}

  ngOnInit(): void {
  }

  public filterEventsByDate(date: Date): void {
    // this.events = this.allEvents.filter(event => isSameDay(event.date, date))
  }

}

function isSameDay(date1: Date, date2: Date): boolean {
  let num1 = date1.getDate() + date1.getMonth() * 100 + date1.getFullYear() * 10000;
  let num2 = date2.getDate() + date2.getMonth() * 100 + date2.getFullYear() * 10000;
  return num1 === num2;
}
