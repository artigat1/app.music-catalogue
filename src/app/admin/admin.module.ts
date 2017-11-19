import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {AddNewMusicComponent} from './pages/add-new-music/add-new-music.component';
import {adminRouting} from './admin.routing';
import {MusicEditFormComponent} from './components/music-edit-form/music-edit-form.component';

@NgModule({
  declarations: [
    AddNewMusicComponent,
    MusicEditFormComponent
  ],
  exports: [,
    AddNewMusicComponent
  ],
  imports: [
    adminRouting,
    SharedModule
  ]
})
export class AdminModule {
}
