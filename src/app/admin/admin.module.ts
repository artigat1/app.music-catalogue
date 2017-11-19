import {NgModule} from '@angular/core';


import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {AddNewMusicDialogComponent} from './add-new-music-dialog/add-new-music-dialog.component';

@NgModule({
  declarations: [
    AddNewMusicDialogComponent
  ],
  exports: [
    AddNewMusicDialogComponent
  ],
  imports: [
    CoreModule,
    SharedModule
  ]
})
export class AdminModule {
}
