import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from "src/app/store/reducers";

export const getTypeUserState = createFeatureSelector<LoginState>('login');

export const getTypeUser = createSelector(
  getTypeUserState,
  (state: LoginState) => state.usuario
);
