import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as loginActions from '../../actions';
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { LoginService } from 'src/app/service/login/login.service';
import { catchError, map, mergeMap } from "rxjs/operators";
import { UserService } from "src/app/service/users/user.service";

@Injectable()
export class LoginEffects {
    constructor(
        private actions$: Actions,
        private login: UserService  
    ) { }

    validateLogin$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(loginActions.loadLogins),
            mergeMap(({}) =>
                this.login.getUser().pipe(
                    map((usuario: any) => loginActions.loadLoginsSuccess({ usuario })),
                    catchError((error) =>
                        of(loginActions.loadLoginFailure({ error: error })))
                )

            )
        )
    )
}