import { Component, } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { AppStateService } from 'src/app/services/app-state.service';
import { EventComponent } from '../event/event.component';


@Component({
  selector: 'app-home-calendar',
  templateUrl: './home-calendar.component.html',
  styleUrls: ['./home-calendar.component.scss']
})
export class HomeCalendarComponent {

  public date = new Date();

  constructor(
    private _dialog: MatDialog,
    private _appStateService: AppStateService,
  ){}

  public openNewEventDialog():void {
    this._dialog.open(EventComponent, {
      data: {date: this.date},
    })
  }

  public setDate($event: MatDatepickerInputEvent<Date>): void {
    //@ts-ignore
    this._appStateService.setDate($event._d);
  }

}
