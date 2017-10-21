import {NgModule, Optional, SkipSelf} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {HeaderBarComponent} from './header-bar/header-bar.component';
import { LoaderComponent } from './loader.component';

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
    SharedModule
  ],
  providers: []
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
