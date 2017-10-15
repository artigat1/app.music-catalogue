import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';

import {environment} from '../environments/environment';

/* Root component */
import {AppComponent} from './app.component';

/* Feature Modules */
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
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
