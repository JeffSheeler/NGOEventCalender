import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { NgoService } from './ngoService';
import { HttpClientModule } from '@angular/common/http';
import { EventInfoComponent } from './event-info/event-info.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component'
import { UserService } from './userservice';
import { AuthenticationService } from './authentication.service';
import { AdminGuard } from './admin.guard';
import { JwtHelperService, JwtModule} from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminViewComponent,
    UserViewComponent,
    EventInfoComponent,
    EventRegistrationComponent,
    EventManagementComponent,
    AddUserComponent,
    RegisterComponent,
    UserManagementComponent,
    AddEventComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return '';
        }
      }
    })
    
  ],
  providers: [NgoService,UserService, JwtHelperService, AuthenticationService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
