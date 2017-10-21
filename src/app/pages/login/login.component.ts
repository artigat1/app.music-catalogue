import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';

import * as fromApp from '../../store/reducers';
import * as AuthActions from '../../store/actions/auth.action';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private readonly store: Store<fromApp.State>,
              private readonly formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signInWithEmailAndPassword() {
    this.store.dispatch(new AuthActions.Authenticate({
      email: this.form.value.email,
      password: this.form.value.password
    }));
  }

}
