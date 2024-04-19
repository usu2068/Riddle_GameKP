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
    usuario: '', //SPANGLISH
};

const _reducerLogin = createReducer(
    initialStateLogin,
    on(loadLogins, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        error: null,
        usuario: null //SPANGLISH
    })),
    on(loadLoginsSuccess, (state, { usuario }) => ({
        ...state,
        loading: false,
        loaded: true,
        error: null,
        usuario: usuario, //SPANGLISH
    })),
    on(loadLoginFailure, (state, { error }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: error,
        usuario: '',    //SPANGLISH
    })),
    on(clearLogin, (state) => ({
        ...state,
        loaded: false,
        loading: false,
        error: null,
        usuario: '',    //SPANGLISH
    })) 
);

export function reducerLogin(state: any, action: Action) {
    return _reducerLogin(state, action);
}
