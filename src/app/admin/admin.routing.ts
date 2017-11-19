import {RouterModule, Routes} from '@angular/router';

import {AddNewMusicComponent} from './pages/add-new-music/add-new-music.component';

const ADMIN_ROUTES: Routes = [
  {path: 'add', component: AddNewMusicComponent},
  {path: '**', redirectTo: 'add', pathMatch: 'full'}
];

export const adminRouting = RouterModule.forChild(ADMIN_ROUTES);
