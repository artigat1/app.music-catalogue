import {ActionReducerMap} from '@ngrx/store';

import * as fromUi from './ui.reducer';

/**
 * Interface for classes that represent the application's state.
 * @interface
 */
export interface State {
  ui: fromUi.State;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.uiStateReducer,
};

export const INITIAL_STATE: State = {
  ui: fromUi.INITIAL_STATE
};
