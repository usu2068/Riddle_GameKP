import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
// import jwt_decode from 'jwt-decode';
import { Observable, Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { pluck, map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UtilitiesService {

    //VARIABLES PRIVADAS
    private routeActive;

    constructor(private router: Router, private http: HttpClient) { }

    public ObserveRoute(): Observable<any> {
        this.routeActive = this.router.url;
        return new Observable(subscribe => {
            setInterval(() => {
                subscribe.next(this.router.url);
            }, 200);
        });
    }

    public isLoggedIn(): boolean {
        return true;
    }

    public goToast(message: string, error: boolean): void {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
        });
        Toast.fire({
            icon: error === false ? 'success' : 'error',
            title: message,
        });
    }

    public goToastS(message: string, success: boolean): void {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
        });
        Toast.fire({
            icon: success === true ? 'success' : 'success',
            title: message,
        });
    }

    private handleError(error: any) {
        console.log(error);

        return throwError(error);
    }
}