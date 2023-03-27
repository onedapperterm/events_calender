import { Component, EventEmitter, Output, } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { EventComponent } from '../event/event.component';


@Component({
  selector: 'app-home-calendar',
  templateUrl: './home-calendar.component.html',
  styleUrls: ['./home-calendar.component.scss']
})
export class HomeCalendarComponent {
  public date = new Date();

  @Output() dateSelected = new EventEmitter<Date>();

  constructor(private _dialog: MatDialog){}

  public openNewEventDialog():void {
    this._dialog.open(EventComponent, {
      data: {date: this.date},
      height: '650px'
    })
  }

  public setDate($event: MatDatepickerInputEvent<Date>): void {
    //@ts-ignore
    this.dateSelected.emit($event._d)
  }

}
