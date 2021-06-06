import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
import { LoginComponent } from './views/account/login/login.component';
import { LogoutComponent } from './views/account/logout/logout.component';
import { RegisterComponent } from './views/account/register/register.component';
import { AppointmentShowComponent } from './views/appointment/appointment-show/appointment-show.component';
import { AppointmentComponent } from './views/appointment/appointment.component';

export const AppRoutingModule: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'appointment', component: AppointmentComponent, canActivate: [AuthGuard] },
    { path: 'appointment/show/:id', component: AppointmentShowComponent, canActivate: [AuthGuard]},
];