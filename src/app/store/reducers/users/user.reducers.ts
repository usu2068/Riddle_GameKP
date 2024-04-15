import { User } from "src/app/resources/interfaces/users.interface";
import { 
    loadUsers,
    loadUsersSuccess,
    loadUsersFailure,
    clearLoadUsers,
} from '../../actions/user/user.actions';
import { Action, createReducer, on } from "@ngrx/store";

//GET USERS
export interface UserState {
    loaded: boolean;
    loading: boolean;
    error: any;
    users: User[];
}

export const initialState: UserState = {
    loaded: false,
    loading: false,
    error: null,
    users: [],
};

const _reducerUsers = createReducer(
    initialState,

    on(loadUsers, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        eror: null,
        users: [],
    })),
    on(loadUsersSuccess, (state, { data }) => ({
        ...state,
        loading: false,
        loaded: true,
        error: null,
        users: data,
    })),
    on(loadUsersFailure, (state, { error }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: null,
        users: [],
    })),
);
export function reducerUsers(state: any, action: Action) {
    return _reducerUsers(state, action);
}

