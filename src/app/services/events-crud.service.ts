import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CityEvent, CityEventDto } from '../model/interfaces/event.interface';
import { CityEventConverter } from '../util/city-event.converter';

@Injectable({
  providedIn: 'root'
})
export class EventsCrudService {
  private readonly API_GATWAY:string = "http://localhost:8000"

  constructor(private _httpClient: HttpClient) { }

  public createEvent(event: CityEvent): Observable<CityEventDto> {
    return this._httpClient.post<CityEventDto>(`${this.API_GATWAY}/saveEvent`, CityEventConverter.cityEvent2Dto(event));
  }

  public updateEvent(event: CityEvent): Observable<CityEventDto> {
    return this._httpClient.post<CityEventDto>(`${this.API_GATWAY}/saveEvent`, CityEventConverter.cityEvent2Dto(event));
  }

  public getEvents():Observable<CityEvent[]> {
    return this._httpClient.get<CityEventDto[]>(`${this.API_GATWAY}/getEvents`)
      .pipe(
        map(res => CityEventConverter.convertDtoList(res)),
      )
  }

  public getEventsByDates(from: Date, to: Date):Observable<CityEvent[]> {
    const url = `${this.API_GATWAY}/date-range?startDate=${from.toISOString()}&endDate=${to.toISOString()}`;
    return this._httpClient.get<CityEventDto[]>(url)
      .pipe(
        map(res => CityEventConverter.convertDtoList(res)),
      );
  }

  public getEventsByCategory(category: string): Observable<CityEvent[]> {
    const url = `${this.API_GATWAY}/by-category?category=${category}`;
    return this._httpClient.get<CityEventDto[]>(url)
      .pipe(
        map(res => CityEventConverter.convertDtoList(res)),
      )
  }

  public getEventsByLocation(location: string): Observable<CityEvent[]> {
    const url = `${this.API_GATWAY}/by-location?location=${location}`;
    return this._httpClient.get<CityEventDto[]>(url)
      .pipe(
        map(res => CityEventConverter.convertDtoList(res)),
      )
  }

  public deleteEvent(eventId: number) {
    return this._httpClient.delete(`${this.API_GATWAY}/deleteEventBy/${eventId}`);
  }

}
