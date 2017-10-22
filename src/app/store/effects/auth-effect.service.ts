import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import * as firebase from 'firebase';
import * as LogRocket from 'logrocket';

import {AuthService} from '../../core/services/auth.service';
import * as AuthActions from '../actions/auth.action';

@Injectable()
export class AuthEffectService {

  /**
   * Authenticate user.
   */
  @Effect()
  authenticate$: Observable<Action> = this.actions$
    .ofType(AuthActions.Types.AUTHENTICATE)
    .map((action: AuthActions.Authenticate) => action.payload)
    .switchMap(request => {
      return this.authService
        .signInWithEmailAndPassword(request.email, request.password)
        .map((res: any) => new AuthActions.Authenticated())
        .catch(error => Observable.of(new AuthActions.AuthenticateError(error.message)));
    });

  /**
   * Sign out.
   */
  @Effect()
  signOut$: Observable<Action> = this.actions$
    .ofType(AuthActions.Types.SIGN_OUT)
    .switchMap(request => {
      return this.authService
        .logout()
        .map(() => new AuthActions.SignOutSuccess())
        .catch(error => Observable.of(new AuthActions.SignOutError(error.message)));
    });

  /**
   * User authenticated.
   */
  @Effect({dispatch: false})
  identifyWithLogrocket$: Observable<Action> = this.actions$
    .ofType(AuthActions.Types.SET_AUTHENTICATED_USER)
    .do((action: AuthActions.SetAuthenticatedUser) => {
      const user: firebase.User = action.payload;
      if (user) {
        LogRocket.identify(user.uid, {email: user.email});
      } else {
        LogRocket.identify(null, {});
      }
    });

  /**
   * User authenticated.
   */
  @Effect({dispatch: false})
  userAuthenticated$: Observable<Action> = this.actions$
    .ofType(
      AuthActions.Types.SET_AUTHENTICATED_USER,
      AuthActions.Types.SIGN_OUT_SUCCESS)
    .do(() => this.router.navigate(['/']));


  constructor(private readonly actions$: Actions,
              private readonly authService: AuthService,
              private readonly router: Router) {
  }
}
