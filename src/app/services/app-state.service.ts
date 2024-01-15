import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private dateBehaviourSubject = new BehaviorSubject<Date>(new Date);
  public date$ = this.dateBehaviourSubject.asObservable();

  constructor() { }

  public setDate(date: Date): void {
    this.dateBehaviourSubject.next(date);
  }

}
