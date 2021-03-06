import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import * as fromApp from '@store/reducers';
import * as fromAuth from '@store/reducers/auth.reducer';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private readonly store: Store<fromApp.State>,
              private readonly router: Router) {
  }

  /**
   * True when user is authenticated
   * @method canActivate
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    const observable = this.store.select(fromAuth.isLoggedIn);

    observable
      .subscribe(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      });

    return observable;
  }

  /**
   * True when user is authenticated
   * @method canActivateChild
   */
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
