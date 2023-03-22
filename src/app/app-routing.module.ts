import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventComponent } from "./event/event.component";
import {AllEventsComponent} from "./all-events/all-events.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: 'home', component: EventComponent },
  { path: 'all-events', component: AllEventsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
