import {ErrorHandler, NgModule, Optional, SkipSelf} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as LogRocket from 'logrocket';

import {environment} from '../../environments/environment';
import {metaReducers, reducers} from '../store/reducers';
import {SharedModule} from '../shared/shared.module';
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
    LoaderComponent
  ],
  exports: [
    HeaderBarComponent,
    LoaderComponent
  ],
  imports: [
    StoreModule.forRoot(reducers, {metaReducers}),
    SharedModule
  ],
  providers: [
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
