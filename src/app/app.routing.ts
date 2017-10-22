import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

import {MusicListComponent} from './pages/music-list/music-list.component';
import {LoginComponent} from './pages/login/login.component';
import {LogoutComponent} from './pages/logout.component';

const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '', component: MusicListComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    StoreRouterConnectingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
