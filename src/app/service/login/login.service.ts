import { Injectable } from "@angular/core";
import { HttpHeaders, HttpResponse } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, of, throwError } from "rxjs";
import { LoginUser } from "src/app/resources/interfaces/users.interface";
import { catchError, map } from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
    observe: "response" as "response",
};

@Injectable({
    providedIn: "root",
})
export class LoginService {
    constructor(private http: HttpClient) { }

    

    private handleError(error: any) {
        return throwError(error);
    }
}