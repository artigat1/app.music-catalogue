import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';

import {environment} from '../environments/environment';
/* Root component */
import {AppComponent} from './app.component';
/* Feature Modules */
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
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
