import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { DocumentChangeAction } from 'angularfire2/firestore/interfaces';
import { Observable } from 'rxjs/Observable';

import { Music } from '@shared/interfaces';
import * as MusicActions from '@store/actions/music.action';

@Injectable()
export class MusicService {
    constructor(private readonly afs: AngularFirestore) {}

    create(music: Music): any {
            const ref = this.afs.doc<Music>(`music/${music.id}`);
             return Observable.fromPromise( ref.update(music.changes))
    }

    query(query: string): Observable<DocumentChangeAction[]> {
        return this.afs
            .collection<Music>('music', ref => ref.orderBy('title'))
            .stateChanges();
    }
}
