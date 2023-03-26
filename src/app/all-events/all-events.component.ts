import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CityEvent } from '../model/interfaces/event.interface';
import { DUMMY_EVENTS } from '../util/dummy-data';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {
  public events!: CityEvent[];
  
  constructor() {}

  ngOnInit(): void {
    axios.get("http://localhost:8000/getEvents")
      .then(response => {
        const events = response.data;
        this.events = events;
        this.events.forEach(ev => {
          ev.date = new Date(ev.dateString)
        })

      })
      .catch(error => {
        console.log(error);
      });
  }
  
}
