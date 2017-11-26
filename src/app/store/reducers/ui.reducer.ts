import { createSelector } from 'reselect';

import * as UiActions from '../actions/ui.action';
import * as fromApp from './index';

/**
 * Interface for classes that represent the UI state.
 * @interface
 */
export interface State {
    loading: boolean;
}

export const INITIAL_STATE: State = {
    loading: false,
};

export function uiStateReducer(state: State = INITIAL_STATE, action: any) {
    switch (action.type) {
        case UiActions.Types.LOADING:
            return {
                ...state,
                loading: action.payload,
            };

        default:
            return state;
    }
}

/**
 * Returns the campaign manager state.
 * @function getCampaignManagerState
 * @param {State} state - Top level state.
 * @return {State} state - Ui level state
 */
export const getUiState = (state: fromApp.State) => state.ui;

/**
 * Returns the loading status
 * @function getLoadingStatus
 * @param UI state
 * @param {any} props
 * @return {boolean} - true if loading, otherwise false
 */
export const getLoadingStatus = createSelector(
    getUiState,
    (state: State) => state.loading,
);
