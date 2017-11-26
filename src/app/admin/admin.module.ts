import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { AddNewMusicDialogComponent } from './add-new-music-dialog/add-new-music-dialog.component';
import { MusicEditFormComponent } from './music-edit-form/music-edit-form.component';

@NgModule({
    declarations: [AddNewMusicDialogComponent, MusicEditFormComponent],
    exports: [AddNewMusicDialogComponent, MusicEditFormComponent],
    imports: [CoreModule, SharedModule],
    entryComponents: [AddNewMusicDialogComponent],
})
export class AdminModule {}
