import { Action, createReducer, on } from '@ngrx/store';

import {
    loadLogins,
    loadLoginsSuccess,
    loadLoginFailure,
    clearLogin
} from '../../actions';

export interface LoginState {
    loaded: boolean;
    loading: boolean;
    error: any;
    usuario: any;
}

export const initialStateLogin: LoginState = {
    loaded: false,
    loading: false,
    error: null,
    usuario: '',
};

const _reducerLogin = createReducer(
    initialStateLogin,
    on(loadLogins, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
        usuario: null,
    })),
    on(loadLoginsSuccess, (state, { usuario }) => ({
        ...state,
        loading: false,
        loaded: true,
        error: null,
        usuario: usuario,
    })),
    on(loadLoginFailure, (state, { error }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: error,
        usuario: '',
    })),
    on(clearLogin, (state) => ({
        ...state,
        loaded: false,
        loading: false,
        error: null,
        usuario: '',
    }))
);

export function reducerLogin(state: any, action: Action) {
    return _reducerLogin(state, action);
}
