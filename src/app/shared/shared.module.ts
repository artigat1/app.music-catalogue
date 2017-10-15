import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoConflictStyleCompatibilityMode} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {CustomMaterialModule} from './material.module';

@NgModule({
  declarations: [],
  exports: [
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    CustomMaterialModule,
    NoConflictStyleCompatibilityMode,
    NoopAnimationsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    CustomMaterialModule,
    NoConflictStyleCompatibilityMode,
    NoopAnimationsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule {
}
