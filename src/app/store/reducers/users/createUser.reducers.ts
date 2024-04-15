import { Action, createReducer, on } from '@ngrx/store';
import { CreateUser } from 'src/app/resources/interfaces/users.interface';
import {
    createUser,
    createUserSuccess,
    createUserFailure
} from '../../actions';

export interface CreateUserState {
    loaded: boolean;
    loading: boolean;
    error: any;
    user: CreateUser;
}

export const initialStateCreateUser: CreateUserState = {
    loaded: false,
    loading: false,
    error: null,
    user: {
        id: 0,
        user: '',
        email: ''
    },
};

const _createUser = createReducer (
    initialStateCreateUser,

    on(createUser, (state , {usuario }) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
        user: usuario,
    })),
    on(createUserSuccess, (state, { usuario }) => ({
        ...state,
        loading: false,
        loaded: true,
        error: null,
        user: usuario,
    })),
    on(createUserFailure, (state, { error }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: error,
    }))
);

export function reducerCreateUser(state: any, action: Action) {
    return _createUser(state, action);
}