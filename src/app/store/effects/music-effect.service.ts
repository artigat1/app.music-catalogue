import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {AngularFirestore} from 'angularfire2/firestore';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {map, mergeMap, switchMap} from 'rxjs/operators';

import * as MusicActions from '../actions/music.action';
import {Music} from '../../shared/interfaces';

@Injectable()
export class MusicEffectService {

  @Effect()
  query$: Observable<Action> = this.actions$
    .ofType(MusicActions.Types.QUERY)
    .pipe(
      switchMap(action => {
        console.log(action);
        return this.afs.collection<Music>('music', ref => ref.orderBy('title')).stateChanges();
      }),
      mergeMap(actions => actions),
      map(action => {
        return {
          type: `[music] ${action.type}`,
          payload: {id: action.payload.doc.id, ...action.payload.doc.data()}
        };
      })
    );


  constructor(private readonly actions$: Actions,
              private readonly afs: AngularFirestore) {
  }
}
