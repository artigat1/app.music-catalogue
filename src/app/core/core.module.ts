import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {HeaderBarComponent} from './header-bar/header-bar.component';

@NgModule({
  declarations: [
    HeaderBarComponent
  ],
  exports: [
    HeaderBarComponent
  ],
  imports: [
    SharedModule
  ],
  providers: []
})
export class CoreModule {
}
