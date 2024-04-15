import { User, CreateUser } from "src/app/resources/interfaces/users.interface";
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { map, catchError, pluck, mapTo, filter } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})

export class UserService {
    private readonly httpOptions: any;

    constructor(
        private http: HttpClient,
        private router: Router,
    ){
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            observe: 'response' as 'response',
        };
    }

    public getUser(): Observable<any>{
        return this.http.get(`${environment.urlUsers}/Api/Usuarios`, this.httpOptions)
            .pipe(
                pluck('body'),
                map((data: any) => {
                    console.log(data);
                    return data;
                }),
                catchError(this.handleError)
            );
    }

    public createUser(user: CreateUser): Observable<any> {
        console.log(user);
        return this.http.post<any>(`${environment.urlUsers}/Api/Usuarios`, user, this.httpOptions)
            .pipe(
                map((res: HttpResponse<any>) =>{
                    return res.body;
                }),
                catchError(this.handleError)
            );
    }

    private handleError(error: any) {
        return throwError(error);
    }


}
