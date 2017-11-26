import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as LogRocket from 'logrocket';

import { environment } from '@environments/environment';
import * as fromApp from './store/reducers';
import * as fromUi from './store/reducers/ui.reducer';
import * as fromAuth from './store/reducers/auth.reducer';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddNewMusicDialogComponent } from './admin/add-new-music-dialog/add-new-music-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    loading$: Observable<boolean>;
    isAdmin$: Observable<boolean>;
    isLoggedIn$: Observable<boolean>;
    dialogRef: MatDialogRef<AddNewMusicDialogComponent> | null;

    constructor(
        public readonly store: Store<fromApp.State>,
        public dialog: MatDialog,
    ) {}

    ngOnInit(): void {
        if (!LogRocket.sessionURL) {
            LogRocket.init(environment.logRocket, {
                network: {
                    requestSanitizer: function(request: any) {
                        return request;
                    },
                },
            });
        }

        this.loading$ = this.store.select(fromUi.getLoadingStatus);
        this.isAdmin$ = this.store.select(fromAuth.isAdmin);
        this.isLoggedIn$ = this.store.select(fromAuth.isLoggedIn);
    }

    onAddMusicClick(): void {
        this.dialogRef = this.dialog.open(AddNewMusicDialogComponent, {
            width: '50vw',
            data: null,
        });

        this.dialogRef.afterClosed().subscribe((result: string) => {
            this.dialogRef = null;
        });
    }
}
