import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, tap, mergeMap } from 'rxjs/operators';
import { CoffeeService } from '../services/coffee.service';
import * as i from './app.interfaces';
import { AppAction, GetCoffeeListSuccess, GetCoffeeListFailed, SetIsPageLoading } from './app.actions';

@Injectable()
export class AppEffects {
    @Effect()
    getCoffeeListStart$: Observable<Action> = this.actions$
        .pipe(
            ofType('GET_COFFEE_LIST'),
            tap(x => this._store.dispatch(new SetIsPageLoading(true))),
            switchMap(() => {
                return this.coffeeSvc.getAll()
                    .pipe(
                        switchMap(x =>
                            [
                                new GetCoffeeListSuccess(x),
                                new SetIsPageLoading(false)
                            ]),
                        catchError(() => of(
                            new GetCoffeeListFailed(),
                            new SetIsPageLoading(false)
                        ))
                    );
            })
        );

    constructor(private actions$: Actions<AppAction>,
        private coffeeSvc: CoffeeService,
        private _store: Store<i.AppState>) { }
}