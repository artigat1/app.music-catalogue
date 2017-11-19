import {NgModule} from '@angular/core';


import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {AddNewMusicDialogComponent} from '../admin/add-new-music-dialog/add-new-music-dialog.component';
import {MusicCardComponent} from './music-card/music-card.component';
import {MusicCardListComponent} from './music-card-list/music-card-list.component';
import {MusicEditFormComponent} from './music-edit-form/music-edit-form.component';

@NgModule({
  declarations: [
    AddNewMusicDialogComponent,
    MusicCardComponent,
    MusicCardListComponent,
    MusicEditFormComponent,
  ],
  exports: [
    AddNewMusicDialogComponent,
    MusicCardComponent,
    MusicCardListComponent,
    MusicEditFormComponent,
  ],
  imports: [
    CoreModule,
    SharedModule
  ]
})
export class ComponentsModule {
}
