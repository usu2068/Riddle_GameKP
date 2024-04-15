import { ActionReducerMap } from "@ngrx/store";
import * as reducer from './reducers';

export interface AppState {
    users: reducer.UserState;
    login: reducer.LoginState;
    createUser: reducer.CreateUserState;
}

export const appReducers: ActionReducerMap<AppState> = {
    users: reducer.reducerUsers,
    login: reducer.reducerLogin,
    createUser: reducer.reducerCreateUser
}