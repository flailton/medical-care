import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Professional } from '../models/Professional';


@Injectable()
export class ProfessionalService {

    constructor(private httpClient: HttpClient) { }

    public index(): Observable<Professional[]> {
        return this.httpClient
            .get<Professional[]>(`${environment.apiURL}api/professionals`)
    }
}