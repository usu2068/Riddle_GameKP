import { createAction, props } from "@ngrx/store";
import { CreateUser } from "src/app/resources/interfaces/users.interface";

//CREATE USER
export const createUser = createAction (
    '[Create User] Create User',
    props<{ usuario: CreateUser }>()
);

export const createUserSuccess = createAction (
    '[Create User] Create User Success',
    props<{ usuario: any }>()
);

export const createUserFailure = createAction (
    '[Create User] Create User Failure',
    props<{ error: any }>()
);