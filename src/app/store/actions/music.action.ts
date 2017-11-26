import { Action } from '@ngrx/store';

import { type } from '../type-cache';
import { Music } from '../../shared/interfaces/music.interface';

export const Types = {
    CREATE: type('[music] add'),
    ADDED: type('[music] added'),
    QUERY: type('[music] query music'),
    UPDATE: type('[music] update'),
    MODIFIED: type('[music] modified'),
    REMOVED: type('[music] removed'),
    SUCCESS: type('[music] success'),
    ERROR: type('[music] error'),
};

// Initial query
export class Query implements Action {
    readonly type = Types.QUERY;
}

// AngularFire2 StateChanges
export class Create implements Action {
    readonly type = Types.CREATE;

    constructor(public payload: Music) {}
}

export class Added implements Action {
    readonly type = Types.ADDED;

    constructor(public payload: Music) {}
}

// Run a Firestore Update
export class Update implements Action {
    readonly type = Types.UPDATE;

    constructor(public id: string, public changes: Partial<Music>) {}
}

export class Modified implements Action {
    readonly type = Types.MODIFIED;

    constructor(public payload: Music) {}
}

export class Removed implements Action {
    readonly type = Types.REMOVED;

    constructor(public payload: Music) {}
}

export class Success implements Action {
    readonly type = Types.SUCCESS;
}

export class Error implements Action {
    readonly type = Types.ERROR;
}

/**
 * Actions type.
 * @type {Actions}
 */
export type Actions =
    Query
    | Create
    | Added
    | Modified
    | Removed
    | Update
    | Success
    | Error;
