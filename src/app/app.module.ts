import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { AccountService } from './services/account.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './views/account/login/login.component';
import { LogoutComponent } from './views/account/logout/logout.component';
import { RegisterComponent } from './views/account/register/register.component';
import { FooterComponent } from './views/navigation/footer/footer.component';
import { MenuComponent } from './views/navigation/menu/menu.component';
import { MenuUserComponent } from './views/navigation/menu/menu-user/menu-user.component';
import { AppointmentComponent } from './views/appointment/appointment.component';
import { ProcedureService } from './services/procedure.service';
import { ProfessionalService } from './services/professional.service';
import { AppointmentService } from './services/appointment.service';
import { AppointmentShowComponent } from './views/appointment/appointment-show/appointment-show.component';

@NgModule({
  declarations: [
    AppComponent,
    //UserComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    FooterComponent,
    MenuComponent,
    MenuUserComponent,
    AppointmentComponent,
    AppointmentShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(AppRoutingModule, { useHash: false})]
  ],
  providers: [
    AccountService,
    ProcedureService,
    ProfessionalService,
    AppointmentService,
    {provide: APP_BASE_HREF, useValue: '/'},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
