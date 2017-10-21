import {type} from '../type-cache';
import {ActionWithPayload} from '../action-with-payload';

export const Types = {
  LOADING: type('[ui] loading')
};

/**
 * Set loading status of the application.
 * @class Loading
 * @implements {ActionWithPayload<boolean>}
 * @constructor takes the loading status {boolean} as the payload.
 */
export class Loading implements ActionWithPayload<boolean> {
  readonly type = Types.LOADING;

  constructor(public payload: boolean) {
  }
}

/**
 * Actions type.
 * @type {Actions}
 */
export type Actions = Loading;
