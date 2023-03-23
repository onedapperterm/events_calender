import { Component, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventComponent } from '../event/event.component';


@Component({
  selector: 'app-home-calendar',
  templateUrl: './home-calendar.component.html',
  styleUrls: ['./home-calendar.component.scss']
})
export class HomeCalendarComponent {
  public date = new Date();

  constructor(private _dialog: MatDialog){}

  public openNewEventDialog():void {
    this._dialog.open(EventComponent, {
      data: {date: this.date},
      height: '550px'
    })
  }

}
