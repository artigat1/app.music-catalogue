import * as fromUi from './ui.reducer';
import * as UiActions from '../actions/ui.action';

describe('Reducer: UI', () => {
  it('should return current state when no valid actions have been made', () => {
    expect(fromUi.uiStateReducer(fromUi.INITIAL_STATE, {type: 'NEW_TYPE'}))
      .toEqual(fromUi.INITIAL_STATE);
  });

  describe(`loading`, () => {
    it('should set the loading status to true', () => {
      const result = fromUi.uiStateReducer(fromUi.INITIAL_STATE, {
        type: UiActions.Types.LOADING,
        payload: true
      });

      expect(result.loading).toBeTruthy();
    });

    it('should set the loading status to false', () => {
      const initState = fromUi.INITIAL_STATE;
      initState.loading = true;

      const result = fromUi.uiStateReducer(initState, {
        type: UiActions.Types.LOADING,
        payload: false
      });

      expect(result.loading).toBeFalsy();
    });
  });
});
