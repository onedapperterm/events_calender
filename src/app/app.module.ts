import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { EventComponent } from './components/event/event.component'
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component'
import { HomeCalendarComponent } from './components/home-calendar/home-calendar.component'
import { EventCardComponent } from './components/event-card/event-card.component'
import { LoginAdminComponent } from './login-admin/login-admin.component'
//MATERIAL MODULES
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatDialogModule } from '@angular/material/dialog'
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ContactComponent,
    HomeComponent,
    HomeCalendarComponent,
    EventCardComponent,
    LoginAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    MatCardModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
