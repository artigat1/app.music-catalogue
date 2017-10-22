import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as LogRocket from 'logrocket';

import {environment} from '../environments/environment';
import * as fromApp from './store/reducers';
import * as fromUi from './store/reducers/ui.reducer';
import * as fromAuth from './store/reducers/auth.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  year = new Date().getFullYear();
  loading$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;

  constructor(public readonly store: Store<fromApp.State>) {
  }

  ngOnInit(): void {
    if (!LogRocket.sessionURL) {
      LogRocket.init(environment.logRocket, {
        network: {
          requestSanitizer: function (request: any) {
            return request;
          },
        },
      });
    }

    this.loading$ = this.store.select(fromUi.getLoadingStatus);
    this.isAdmin$ = this.store.select(fromAuth.isAdmin);
    this.isLoggedIn$ = this.store.select(fromAuth.isLoggedIn);
  }
}
