import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AdminGuard } from './admin.guard';



const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'userView', component:UserViewComponent},
  {path:'eventInfo/:eventId', component:EventInfoComponent},
  {path:'eventRegistration', component:EventRegistrationComponent},
  {path:'adminView', component:AdminViewComponent, 
    children:
    [
      {path:'eventManagement', component:EventManagementComponent},
      {path:'userView', component:UserViewComponent},
      {path:'addEvent', component:AddEventComponent},
      {path:'editEvent/:eventId', component:EditEventComponent},
      {path:'userManagement', component:UserManagementComponent}
    ], canActivate:[AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
