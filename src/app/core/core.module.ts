import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import * as LogRocket from 'logrocket';

import { environment } from '@environments/environment';
import { MusicService } from '@core/services/music.service';
import { SharedModule } from '@shared/shared.module';
import { AppEffects } from '@store/effects';
import { metaReducers, reducers } from '@store/reducers';
import { FooterBarComponent } from './footer/footer.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { LoaderComponent } from './loader.component';
import { AuthService } from './services/auth.service';

export class LogRocketErrorHandler implements ErrorHandler {
    handleError(err: any): void {
        console.log(err);
        if (environment.production) {
            LogRocket.error(err);
        }
    }
}

@NgModule({
    declarations: [HeaderBarComponent, LoaderComponent, FooterBarComponent],
    exports: [HeaderBarComponent, LoaderComponent, FooterBarComponent],
    imports: [
        AngularFireModule.initializeApp(
            environment.firebase,
            'music-catalogue',
        ),
        AngularFirestoreModule.enablePersistence(),
        AngularFireAuthModule,
        EffectsModule.forRoot(AppEffects),
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production
            ? StoreDevtoolsModule.instrument({ maxAge: 50 })
            : [],
        SharedModule,
    ],
    providers: [
        AuthService,
        { provide: ErrorHandler, useClass: LogRocketErrorHandler },
        MusicService,
    ],
})
export class CoreModule {
    /* make sure CoreModule is imported only by one NgModule the AppModule */
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule,
    ) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import only in AppModule',
            );
        }
    }
}
