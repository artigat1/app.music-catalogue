import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { Music } from '@shared/interfaces';

export const musicAdaptor = createEntityAdapter<Music>();

export interface State extends EntityState<Music> {}

const defaultMusic = {
    ids: [],
    entities: {},
};

export const initialState: State = musicAdaptor.getInitialState(defaultMusic);
