import { Action } from '@ngrx/store';
import * as i from './app.interfaces';

export class GetCoffeeListSuccess implements Action {
    readonly type = 'GET_COFFEE_LIST_SUCCESS';
    constructor(public payload: i.Coffee[]) { }
}

export class AddToCart implements Action {
    readonly type = 'ADD_TO_CART';
    constructor(public payload: string) { }
}

export class RemoveCartItem implements Action {
    readonly type = 'REMOVE_CART_ITEM';
    constructor(public payload: string) { }
}

/* export types */

export type AppAction =
    | GetCoffeeListSuccess
    | AddToCart
    | RemoveCartItem;
