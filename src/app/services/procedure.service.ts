import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Procedure } from '../models/Procedure';


@Injectable()
export class ProcedureService {

    constructor(private httpClient: HttpClient) { }

    public index(): Observable<Procedure[]> {
        return this.httpClient
            .get<Procedure[]>(`${environment.apiURL}api/procedures`)
    }
}