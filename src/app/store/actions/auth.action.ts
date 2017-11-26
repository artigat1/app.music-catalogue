import { Action } from '@ngrx/store/store';

import { type } from '../type-cache';
import { ActionWithPayload } from '../action-with-payload';
import * as firebase from 'firebase';

export const Types = {
    AUTHENTICATE: type('[auth] Authenticate user'),
    AUTHENTICATED: type('[auth] User authenticated'),
    AUTHENTICATE_ERROR: type('[auth] Authenticate user error'),
    SET_AUTHENTICATED_USER: type('[auth] Set authenticated user'),
    SIGN_OUT: type('[auth] Sign out'),
    SIGN_OUT_SUCCESS: type('[auth] Sign out success'),
    SIGN_OUT_ERROR: type('[auth] Sign out error'),
};

/**
 * Request to authenticate a user
 * @interface
 */
export interface AuthenticateRequest {
    email: string;
    password: string;
}

/**
 * Authenticate a user.
 * @class Authenticate
 * @implements {ActionWithPayload<AuthenticateRequest>}
 * @constructor takes the authenticate request {AuthenticateRequest} as the payload.
 * @see AuthenticateRequest
 */
export class Authenticate implements ActionWithPayload<AuthenticateRequest> {
    readonly type = Types.AUTHENTICATE;

    constructor(public payload: AuthenticateRequest) {}
}

/**
 * User has been successfully authenticated.
 * @class Authenticated
 * @implements {Action}
 */
export class Authenticated implements Action {
    readonly type = Types.AUTHENTICATED;
}

/**
 * Error occurred while authenticating the user.
 * @class AuthenticateError
 * @implements {ActionWithPayload<string>}
 * @constructor takes the error message {string} as the payload.
 */
export class AuthenticateError implements ActionWithPayload<string> {
    readonly type = Types.AUTHENTICATE_ERROR;

    constructor(public payload: string) {}
}

/**
 * Set the authenticated user in the state.
 * @class SetAuthenticatedUser
 * @implements {ActionWithPayload<firebase.User>}
 * @constructor takes the firebase User {firebase.User} as the payload.
 */
export class SetAuthenticatedUser implements ActionWithPayload<firebase.User> {
    readonly type = Types.SET_AUTHENTICATED_USER;

    constructor(public payload: firebase.User) {}
}

/**
 * Sign out.
 * @class SignOut
 * @implements {Action}
 */
export class SignOut implements Action {
    readonly type = Types.SIGN_OUT;
}

/**
 * Sign out success.
 * @class SignOutSuccess
 * @implements {Action}
 */
export class SignOutSuccess implements Action {
    readonly type = Types.SIGN_OUT_SUCCESS;
}

/**
 * Sign out error.
 * @class SignOut
 * @implements {ActionWithPayload<string>}
 * @constructor takes the error message {string} as the payload.
 */
export class SignOutError implements ActionWithPayload<string> {
    readonly type = Types.SIGN_OUT_ERROR;

    constructor(public payload: string) {}
}

/**
 * Actions type.
 * @type {Actions}
 */
export type Actions =
    Authenticate
    | Authenticated
    | AuthenticateError
    | SetAuthenticatedUser
    | SignOut
    | SignOutSuccess
    | SignOutError;
