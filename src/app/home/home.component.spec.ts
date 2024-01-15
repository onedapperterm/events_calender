import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { EventsCarouselComponent } from '../components/events-carousel/events-carousel.component';
import { EventsCrudService } from '../services/events-crud.service'
import { MockEventCard, MockEventsCrudService, MockMatDialog } from '../util/mocks';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, EventsCarouselComponent, MockEventCard ],
      providers: [
        {
          provide: EventsCrudService,
          useClass: MockEventsCrudService
        },
        {
          provide: MatDialog,
          useClass: MockMatDialog
        },
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
