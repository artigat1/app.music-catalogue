import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {MusicListComponent} from './pages/music-list.component';
import {MusicCardComponent} from './components/music-card/music-card.component';
import {MusicCardListComponent} from './components/music-card-list/music-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent,
    MusicCardComponent,
    MusicCardListComponent
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
