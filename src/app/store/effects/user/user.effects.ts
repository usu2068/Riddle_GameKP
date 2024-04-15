import { mergeMap, map, catchError, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../../actions';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import { User } from 'src/app/resources/interfaces/users.interface';
import { UserService } from 'src/app/service/users/user.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private user: UserService
  ) { }

  loadUsers$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      mergeMap(() =>
        this.user.getUser().pipe(
          map(
            (data: User[]) => usersActions.loadUsersSuccess({ data })
          ),
          catchError((error) =>
            of(usersActions.loadUsersFailure({ error: error }))
          )
        ))
    ));


}