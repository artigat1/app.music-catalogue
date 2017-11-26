import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';

import { Music } from '@shared/interfaces';

import * as MusicActions from '@store/actions/music.action';
import * as fromApp from '@store/reducers';

@Component({
    selector: 'add-new-music-dialog',
    templateUrl: './add-new-music-dialog.component.html',
    styleUrls: ['./add-new-music-dialog.component.scss'],
})
export class AddNewMusicDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<AddNewMusicDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Music,
        private readonly store: Store<fromApp.State>,
    ) {}

    onSubmit(music: Music): void {
        this.store.dispatch(new MusicActions.Create(music));
    }
}
