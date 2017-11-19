import {Action, ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import * as LogRocket from 'logrocket';

import * as fromAuth from './auth.reducer';
import * as fromUi from './ui.reducer';
import * as fromMusic from './music.reducer';
import {musicAdaptor} from '../entities/music-adaptor.entity';

/**
 * Interface for classes that represent the application's state.
 * @interface
 */
export interface State {
  ui: fromUi.State;
  auth: fromAuth.State;
  music: any;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.uiStateReducer,
  auth: fromAuth.authStateReducer,
  music: fromMusic.musicStateReducer
};

export const INITIAL_STATE: State = {
  ui: fromUi.INITIAL_STATE,
  auth: fromAuth.INITIAL_STATE,
  music: musicAdaptor.getInitialState()
};

// Add the LogRocket meta reducer.
const reduxMiddleware = LogRocket.reduxMiddleware({
  actionSanitizer: (action: Action) => {
    // if (action.type === LoginActions.Types.AUTHENTICATE) {
    //   return null;
    // }
    return action;
  }
});

export function logrocketMiddleware(reducer): ActionReducer<any, any> {
  let currentState;
  const fakeDispatch = reduxMiddleware({
    getState: () => currentState,
  })(() => {
  });

  return function (state, action) {
    const newState = reducer(state, action);
    currentState = state;
    fakeDispatch(action);
    return newState;
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = [logrocketMiddleware];
