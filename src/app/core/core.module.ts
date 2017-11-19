import {ErrorHandler, NgModule, Optional, SkipSelf} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import * as LogRocket from 'logrocket';

import {environment} from '../../environments/environment';
import {metaReducers, reducers} from '../store/reducers';
import {AppEffects} from '../store/effects/index';
import {AuthGuard} from '../shared/auth.guard';
import {SharedModule} from '../shared/shared.module';
import {AuthService} from './services/auth.service';
import {FooterBarComponent} from './footer/footer.component';
import {HeaderBarComponent} from './header-bar/header-bar.component';
import {LoaderComponent} from './loader.component';

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
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    EffectsModule.forRoot(AppEffects),
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [],
    StoreRouterConnectingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {provide: ErrorHandler, useClass: LogRocketErrorHandler},
  ]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
