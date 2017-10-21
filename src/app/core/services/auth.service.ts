import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as firebase from 'firebase';

import * as fromApp from '../../store/reducers';
import * as AuthActions from '../../store/actions/auth.action';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;

  constructor(private readonly fbAuth: AngularFireAuth,
              private readonly store: Store<fromApp.State>) {
    this.init();
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return Observable.fromPromise(
      this.fbAuth
        .auth
        .signInWithEmailAndPassword(email, password));
  }

  logout() {
    return Observable.fromPromise(
      this.fbAuth
        .auth
        .signOut());
  }

  private init(): void {
    this.user = this.fbAuth.authState;
    this.user
      .subscribe(
        (user) => {
          if (user) {
            this.store.dispatch(new AuthActions.SetAuthenticatedUser(user));
          }
        }
      );
  }
}
