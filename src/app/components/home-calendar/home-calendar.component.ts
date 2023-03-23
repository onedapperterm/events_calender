import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventComponent } from '../event/event.component';


@Component({
  selector: 'app-home-calendar',
  templateUrl: './home-calendar.component.html',
  styleUrls: ['./home-calendar.component.scss']
})
export class HomeCalendarComponent implements OnInit{
  public date = new Date();

  public readonly months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  public readonly week: string[] = [ 'S', 'M', 'D', 'M', 'D', 'F', 'S', ];
  public monthDays!: number[];

  constructor(private _dialog: MatDialog){}

  ngOnInit(): void {
    this.setMonthDays();
  }

  private setMonthDays(date = this.date):void {
    let parameters = this.getMonthInfo(date);
    this.monthDays = [];
    for(let i = 1; i <= parameters.limit + parameters.offset; i++) {
      if(i < parameters.offset) this.monthDays.push(0);
      else this.monthDays.push(i - parameters.offset)
    }
  }

  private getMonthInfo(date: Date): {offset: number, limit: number} {
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let firstDayOfWeek = firstDay.getDay();
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let lastDayOfMonth = lastDay.getDate();
    return {
      offset: firstDayOfWeek,
      limit: lastDayOfMonth,
    };
  }

  public openNewEventDialog(day: number):void {
    if(day == 0) return;
    this._dialog.open(EventComponent, {
      data: {date: this.date},
      height: '550px'
    })
  }

}
