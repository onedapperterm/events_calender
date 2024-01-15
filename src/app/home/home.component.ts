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
  public highlighted$: Observable<CityEvent[]> = this._evntsCrudService.getEvents()

  constructor(private _evntsCrudService: EventsCrudService) {}

  ngOnInit(): void {
  }

}
