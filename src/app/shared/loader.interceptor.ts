import {
    HttpEvent,
    HttpEventType,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as LogRocket from 'logrocket';
import 'rxjs/add/operator/catch';

import * as UiActions from '../store/actions/ui.action';
import * as fromApp from '../store/reducers';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(private readonly store: Store<fromApp.State>) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        this.store.dispatch(new UiActions.Loading(true));

        return next
            .handle(req)
            .map(event => {
                if (event.type === HttpEventType.Response) {
                    this.store.dispatch(new UiActions.Loading(false));
                }
                return event;
            })
            .catch((error: any) => {
                if (LogRocket) {
                    LogRocket.error(
                        `Server communication error (${error.message}`,
                        error,
                    );
                }
                this.store.dispatch(new UiActions.Loading(false));
                return Observable.throw(error);
            });
    }
}
