import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MusicListComponent} from './pages/music-list/music-list.component';
import {LoginComponent} from './pages/login/login.component';
import {LogoutComponent} from './pages/logout.component';
import {AuthGuard} from './shared/auth.guard';

const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '', component: MusicListComponent},
  {
    path: 'admin',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
