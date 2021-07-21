import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BookingService {

    constructor(
        private http: HttpClient
    ) { }

    getAllBooking(): Observable<any> {
        const headers = {
            adminemail: 'testapis@tuten.cl',
            email: 'contacto@tuten.cl',
            app: 'APP_BCK',
            token: localStorage.getItem('token') || ''
        };
        return this.http.get<any>(environment.url_path + 'contacto%40tuten.cl/bookings?current=true', { headers });
    }
}
