import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/resources/interfaces/users.interface';


//
export const loadLogins = createAction (
    '[Login] Load Logins',
    props<{ usuario: User }>() // SPANGLISH PILAS
);

export const loadLoginsSuccess = createAction (
    '[Login] Load Logins Success',
    props<{  usuario: User }>() //SAME HERE
);

export const loadLoginFailure = createAction (
    '[Login] Load Logins Failure',
    props<{ error: any }>()
);

export const clearLogin = createAction (
    '[Login] Clear Login',
)

