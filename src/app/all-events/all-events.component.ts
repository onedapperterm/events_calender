import { Component, OnInit } from '@angular/core';
import { CityEvent } from '../model/interfaces/event.interface';
import { EventsCrudService } from '../services/events-crud.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit{
  public events: CityEvent[] = [];

  constructor(
    private _eventsCrudService: EventsCrudService,
    ) {}

  ngOnInit(): void {    
    this._eventsCrudService.getEvents()
      .subscribe(res => this.events = res)
  }
}
