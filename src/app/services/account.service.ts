import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RequestLogin } from '../models/RequestLogin';
import { Observable } from 'rxjs';
import { RequestRegister } from '../models/RequestRegister';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { ResponseLogin } from '../models/ResponseLogin';
import { ResponseRegister } from '../models/ResponseRegister';
import { environment } from 'src/environments/environment';
import { ResponseLogout } from '../models/ResponseLogout';
import { RequestLogout } from '../models/RequestLogout';


@Injectable()
export class AccountService {
    constructor(private httpClient: HttpClient, private authService: AuthService) { }

    public login(requestLogin: RequestLogin): Observable<ResponseLogin> {
        return this.httpClient
            .post<ResponseLogin>(`${environment.apiURL}api/auth/login`, requestLogin)
            .pipe(
                tap(
                    (response) => this.authService.setToken(JSON.stringify(response))
                )
            );
    }

    public logout(requestLogout: RequestLogout): Observable<ResponseLogout> {
        return this.httpClient
            .post<ResponseLogout>(`${environment.apiURL}api/auth/logout`, requestLogout)
            .pipe(
                tap((response) => (this.authService.clearToken()))
            );
    }

    public register(requestRegister: RequestRegister): Observable<ResponseRegister> {
        return this.httpClient
            .post<ResponseRegister>(`${environment.apiURL}api/auth/register`, requestRegister);
    }
}