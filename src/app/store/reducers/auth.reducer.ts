import {createSelector} from 'reselect';
import * as firebase from 'firebase';

import * as AuthActions from '../actions/auth.action';
import * as fromApp from './index';
import {environment} from '../../../environments/environment';

/**
 * Interface for classes that represent the Auth state.
 * @interface
 */
export interface State {
  user: firebase.User;
  error?: string;
}

export const INITIAL_STATE: State = {
  user: undefined,
};

export function authStateReducer(state: State = INITIAL_STATE, action: any) {
  switch (action.type) {

    case AuthActions.Types.SET_AUTHENTICATED_USER:
      return {
        ...state,
        user: action.payload
      };

    case AuthActions.Types.SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: undefined
      };

    case AuthActions.Types.AUTHENTICATE_ERROR:
    case AuthActions.Types.SIGN_OUT_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}

/**
 * Returns the auth state.
 * @function getAuthState
 * @param {State} state - Top level state.
 * @return {State} state - Auth level state
 */
export const getAuthState = (state: fromApp.State) => state.auth;

/**
 * Returns the authenticated user
 * @function getAuthUser
 * @param Auth state
 * @param {any} props
 * @return {firebase.User} - authenticated user
 */
export const getAuthUser = createSelector(getAuthState, (state: State) => state.user);

/**
 * Returns authenticate error
 * @function getAuthError
 * @param Auth state
 * @param {any} props
 * @return {string} - error message
 */
export const getAuthError = createSelector(getAuthState, (state: State) => state.error);

/**
 * Is user logged in and an admin
 * @function isAdmin
 * @param Auth state
 * @param {any} props
 * @return {boolean} - true if admin user, false otherwise
 */
export const isAdmin =
  createSelector(getAuthState, (state: State) => !!(state.user && state.user.email === environment.adminEmail));

/**
 * Is user logged in and a guest
 * @function isGuest
 * @param Auth state
 * @param {any} props
 * @return {boolean} - true if logged in guest user, false otherwise
 */
export const isGuest =
  createSelector(getAuthState, (state: State) => !!(state.user && state.user.email.startsWith('guest')));

/**
 * Is user logged in
 * @function isLoggedIn
 * @param Auth state
 * @param {any} props
 * @return {boolean} - true if logged in user, false otherwise
 */
export const isLoggedIn =
  createSelector(getAuthState, (state: State) => !!(state.user));
