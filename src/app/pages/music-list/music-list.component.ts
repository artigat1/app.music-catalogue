import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {Music} from '../../shared/interfaces';
import * as MusicActions from '../../store/actions/music.action';
import * as fromApp from '../../store/reducers';
import * as fromAuth from '../../store/reducers/auth.reducer';
import * as fromMusic from '../../store/reducers/music.reducer';

@Component({
  selector: 'music-list-page',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

  music$: Observable<Music[]>;
  isLoggedIn$: Observable<boolean>;
  isAdmin$: Observable<boolean>;

  constructor(private readonly store: Store<fromApp.State>) {
  }

  ngOnInit() {

    this.music$ = this.store.select(fromMusic.selectAll);
    this.isLoggedIn$ = this.store.select(fromAuth.isLoggedIn);
    this.isAdmin$ = this.store.select(fromAuth.isAdmin);

    this.store.dispatch(new MusicActions.Query());
  }
}
