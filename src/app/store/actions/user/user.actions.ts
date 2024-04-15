import { createAction, props } from "@ngrx/store";
import { User } from "src/app/resources/interfaces/users.interface";


//ALL USERS
export const loadUsers = createAction('[User] Load Users');

export const loadUsersSuccess = createAction (
    '[User] Load User Success',
    props<{ data: User[]}>()
);

export const loadUsersFailure = createAction (
    '[User] Load User Failure',
    props<{ error: any }>()
);

export const clearLoadUsers = createAction (
    '[User] Clear Load Users'
);