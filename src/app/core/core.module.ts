import {ErrorHandler, NgModule, Optional, SkipSelf} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import * as LogRocket from 'logrocket';

import {environment} from '../../environments/environment';
import {metaReducers, reducers} from '../store/reducers';
import {SharedModule} from '../shared/shared.module';
import {FooterBarComponent} from './footer/footer.component';
import {HeaderBarComponent} from './header-bar/header-bar.component';
import {LoaderComponent} from './loader.component';
import {AuthService} from './services/auth.service';
import {AppEffects} from '../store/effects/index';
import {AddNewMusicDialogComponent} from '../admin/add-new-music-dialog/add-new-music-dialog.component';
import {AngularFirestoreModule} from 'angularfire2/firestore';

export class LogRocketErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    console.log(err);
    if (environment.production) {
      LogRocket.error(err);
    }
  }
}

@NgModule({
  declarations: [
    HeaderBarComponent,
    LoaderComponent,
    FooterBarComponent
  ],
  exports: [
    HeaderBarComponent,
    LoaderComponent,
    FooterBarComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'music-catalogue'),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    EffectsModule.forRoot(AppEffects),
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [],
    SharedModule
  ],
  providers: [
    AuthService,
    {provide: ErrorHandler, useClass: LogRocketErrorHandler}
  ],
  entryComponents: [AddNewMusicDialogComponent],
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
