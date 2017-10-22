import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {Music} from '../../shared/models/music.model';

@Component({
  selector: 'add-new-music-dialog',
  templateUrl: './add-new-music-dialog.component.html',
  styleUrls: ['./add-new-music-dialog.component.scss']
})
export class AddNewMusicDialogComponent {

  constructor(public dialogRef: MatDialogRef<AddNewMusicDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Music) {
  }

}
