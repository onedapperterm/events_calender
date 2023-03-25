import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AllEventsComponent } from './all-events/all-events.component'
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component'
import { LoginAdminComponent } from './login-admin/login-admin.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'all-events', component: AllEventsComponent },
  { path: 'login', component: LoginAdminComponent },
  { path: 'contact', component: ContactComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
