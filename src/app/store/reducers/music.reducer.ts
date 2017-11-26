import * as MusicActions from '../actions/music.action';
import {
    initialState,
    musicAdaptor,
    State,
} from '../entities/music-adaptor.entity';
import { createFeatureSelector } from '@ngrx/store';

export function musicStateReducer(state: State = initialState, action: any) {
    switch (action.type) {
        case MusicActions.Types.ADDED:
            return musicAdaptor.addOne(action.payload, state);

        case MusicActions.Types.MODIFIED:
            return musicAdaptor.updateOne(
                {
                    id: action.payload.id,
                    changes: action.payload,
                },
                state,
            );

        case MusicActions.Types.REMOVED:
            return musicAdaptor.removeOne(action.payload.id, state);

        default:
            return state;
    }
}

/**
 * Create the default selectors
 */

export const getMusicState = createFeatureSelector<State>('music');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = musicAdaptor.getSelectors(getMusicState);
