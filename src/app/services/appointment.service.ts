import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from '../models/Appointment';
import { AppointmentFull } from '../models/AppointmentFull';


@Injectable()
export class AppointmentService {

    constructor(private httpClient: HttpClient) { }

    public index(): Observable<Appointment[]> {
        return this.httpClient
            .get<Appointment[]>(`${environment.apiURL}api/appointments`)
    }

    public show(appointment: AppointmentFull): Observable<AppointmentFull> {
        return this.httpClient
            .get<AppointmentFull>(`${environment.apiURL}api/appointments/${appointment.id}`);
    }

    public update(appointment: Appointment): Observable<Appointment> {
        return this.httpClient
            .patch<Appointment>(`${environment.apiURL}api/appointments/${appointment.id}`, appointment);
    }

    public store(appointment: Appointment): Observable<Appointment> {
        return this.httpClient
            .post<Appointment>(`${environment.apiURL}api/appointments`, appointment);
    }

    public destroy(appointment: Appointment): Observable<Appointment> {
        return this.httpClient
            .delete<Appointment>(`${environment.apiURL}api/appointments/${appointment.id}`);
    }
}