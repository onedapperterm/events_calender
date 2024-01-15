import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';

import { HomeCalendarComponent } from './home-calendar.component';

describe('HomeCalendarComponent', () => {
  let component: HomeCalendarComponent;
  let fixture: ComponentFixture<HomeCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCalendarComponent ],
      imports: [
        MatCardModule,
        MatDatepickerModule,
        MatDialogModule,
        MatMomentDateModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
