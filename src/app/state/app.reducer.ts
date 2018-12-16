import * as i from './app.interfaces';
import { AppAction } from './app.actions';
import { appInitialState } from './app.init';

export function appReducer(state: i.App, action: AppAction): i.App {
    switch (action.type) {
        case 'GET_COFFEE_LIST_SUCCESS': {
            const current = {
                coffeeList: action.payload
            };

            return { ...state, ...current };
        }

        case 'ADD_TO_CART': {
            //  logic to update cart
            const newCart = [];
            let isExist = false;

            state.cart.forEach(x => {
                const item = { ...x }; // make ur own copy
                if (x.name === action.payload) {
                    item.quantity = item.quantity + 1;
                    isExist = true;
                }

                newCart.push(item);
            });

            if (!isExist) {
                newCart.push({ name: action.payload, quantity: 1 });
            }

            const current = {
                cart: newCart
            };

            return { ...state, ...current };
        }

        default: {
            return state;
        }

    }
}
