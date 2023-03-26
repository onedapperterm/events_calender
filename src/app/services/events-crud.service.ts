import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityEvent } from '../model/interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventsCrudService {
  private readonly API_GATWAY:string = "http://localhost:8000"

  constructor(private _httpClient: HttpClient) { }

  public createEvent(event: CityEvent): Observable<CityEvent> {
    return this._httpClient.post<CityEvent>(`${this.API_GATWAY}/saveEvent`, event);
  }

  public updateEvent(event: CityEvent): Observable<CityEvent> {
    return this._httpClient.patch<CityEvent>(`${this.API_GATWAY}/edit`, event);
  }
}
