import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { MusicListComponent } from './pages/music-list/music-list.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout.component';
import { AppRoutingModule } from './app.routing';
import { AdminModule } from './admin/admin.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        MusicListComponent,
    ],
    imports: [
        AdminModule,
        AppRoutingModule,
        ComponentsModule,
        CoreModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
