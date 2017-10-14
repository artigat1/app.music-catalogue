import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {CustomMaterialModule} from './material.module';

@NgModule({
  declarations: [],
  exports: [
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CommonModule,
    FlexLayoutModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CommonModule,
    FlexLayoutModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule {
}
