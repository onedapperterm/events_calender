import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EventComponent } from './components/event/event.component'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { AllEventsComponent } from './all-events/all-events.component'
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { HomeCalendarComponent } from './components/home-calendar/home-calendar.component'
import { MatDialogModule } from '@angular/material/dialog';
import { EventCardComponent } from './components/event-card/event-card.component'

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    AllEventsComponent,
    ContactComponent,
    HomeComponent,
    HomeCalendarComponent,
    EventCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
