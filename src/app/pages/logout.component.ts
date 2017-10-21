import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromApp from '../store/reducers';
import * as AuthActions from '../store/actions/auth.action';

@Component({
  selector: 'logout-page',
  template: `
    <p>
      Signing out!
    </p>
  `,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private readonly store: Store<fromApp.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new AuthActions.SignOut());
  }

}
