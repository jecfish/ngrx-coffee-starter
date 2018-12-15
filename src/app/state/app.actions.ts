import { Action } from '@ngrx/store';
import * as i from './app.interfaces';

export class GetCoffeeListSuccess implements Action {
    readonly type = 'GET_COFFEE_LIST_SUCCESS';
    constructor(public payload: i.Coffee[]) { }
}
