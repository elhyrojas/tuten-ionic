import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private http: HttpClient
    ) { }

    login(user: User): Observable<any> {
        const headers = {
            email: user.user,
            password: user.pass,
            app: 'APP_BCK'
        };
        return this.http.put<any>(environment.url_path + 'testapis%40tuten.cl', null, { headers });
    }
}
