import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import * as MusicActions from '../actions/music.action';
import { MusicService } from '@core/services/music.service';

@Injectable()
export class MusicEffectService {
    @Effect()
    query$: Observable<Action> = this.actions$
        .ofType(MusicActions.Types.QUERY)
        .pipe(
            switchMap(action => {
                return this.musicService.query(null);
            }),
            mergeMap(actions => actions),
            map(action => {
                return {
                    type: `[music] ${action.type}`,
                    payload: {
                        id: action.payload.doc.id,
                        ...action.payload.doc.data(),
                    },
                };
            }),
        );

    @Effect()
    addMusic$: Observable<Action> = this.actions$
        .ofType(MusicActions.Types.CREATE)
        .pipe(
            map((action: MusicActions.Added) => action.payload),
            mergeMap(music => this.musicService.create(music)),
        );

    constructor(
        private readonly actions$: Actions,
        private readonly musicService: MusicService,
    ) {}
}
