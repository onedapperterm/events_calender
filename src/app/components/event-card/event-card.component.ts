import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CityEvent } from 'src/app/model/interfaces/event.interface';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {
  @Input() event!: CityEvent;

  constructor(private _dialog: MatDialog){}

  public openEventDialog():void {
    this._dialog.open(EventComponent, {
      data: {event: this.event},
      height: '650px'
    })
  }
}
