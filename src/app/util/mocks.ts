import { Injectable, Component, Input } from "@angular/core";
import { Observable, of } from 'rxjs';
import { CityEvent } from "../model/interfaces/event.interface";


@Injectable()
export class MockMatDialog {
  public open(){}
}

@Component({
  selector: 'app-event-card',
  template: ''
})
export class MockEventCard {
  @Input() event!: CityEvent;
  @Input() edit: boolean = false;
}

@Injectable()
export class MockEventsCrudService {

  private readonly API_GATWAY: string = "http://localhost:8000";

  constructor() { }

  public createEvent(event: CityEvent): Observable<CityEvent> {
    // Mock implementation for createEvent
    return of({ id: 1, ...event });
  }

  public updateEvent(event: CityEvent): Observable<CityEvent> {
    // Mock implementation for updateEvent
    return of({ ...event });
  }

  public getEvents(): Observable<CityEvent[]> {
    // Mock implementation for getEvents
    const dummyEvents: CityEvent[] = [
      { id: 1, name: 'Event 1', date: new Date(), description: 'Description 1', location: 'Location 1' },
      { id: 2, name: 'Event 2', date: new Date(), description: 'Description 2', location: 'Location 2' },
    ];
    return of(dummyEvents);
  }

  public getEventsByDates(from: Date, to: Date): Observable<CityEvent[]> {
    // Mock implementation for getEventsByDates
    const dummyEvents: CityEvent[] = [
      { id: 1, name: 'Event 1', date: from, description: 'Description 1', location: 'Location 1' },
      { id: 2, name: 'Event 2', date: to, description: 'Description 2', location: 'Location 2' },
    ];
    return of(dummyEvents);
  }

  public getEventsByCategory(category: string): Observable<CityEvent[]> {
    // Mock implementation for getEventsByCategory
    const dummyEvents: CityEvent[] = [
      { id: 1, name: 'Event 1', date: new Date(), description: 'Description 1', location: 'Location 1' },
      { id: 2, name: 'Event 2', date: new Date(), description: 'Description 2', location: 'Location 2' },
    ];
    return of(dummyEvents);
  }

  public getEventsByLocation(location: string): Observable<CityEvent[]> {
    // Mock implementation for getEventsByLocation
    const dummyEvents: CityEvent[] = [
      { id: 1, name: 'Event 1', date: new Date(), description: 'Description 1', location: location },
      { id: 2, name: 'Event 2', date: new Date(), description: 'Description 2', location: location },
    ];
    return of(dummyEvents);
  }

  public deleteEvent(eventId: number): Observable<any> {
    // Mock implementation for deleteEvent
    return of(`Event with ID ${eventId} deleted successfully`);
  }
}

