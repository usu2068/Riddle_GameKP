import { mergeMap, map, catchError, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../../actions';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { UserService } from 'src/app/service/users/user.service';

@Injectable()
export class CreateUserEffects {
    constructor(
        private actions$: Actions,
        private user: UserService
    ) { }

    createUser$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(usersActions.createUser),
            mergeMap(({ usuario }) =>
                this.user.createUser(usuario).pipe(
                    map((usuario: any) => usersActions.createUserSuccess({ usuario })),
                    catchError((error) =>
                        of(usersActions.createUserFailure({ error: error }))
                    )
                )
            )
        ))

}