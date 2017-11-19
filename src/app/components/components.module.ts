import {NgModule} from '@angular/core';


import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {MusicCardComponent} from './music-card/music-card.component';
import {MusicCardListComponent} from './music-card-list/music-card-list.component';

@NgModule({
  declarations: [
    MusicCardComponent,
    MusicCardListComponent,
  ],
  exports: [
    MusicCardComponent,
    MusicCardListComponent,
  ],
  imports: [
    CoreModule,
    SharedModule
  ]
})
export class ComponentsModule {
}
