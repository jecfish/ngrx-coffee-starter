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
            const isExist = state.cart
                .find(x => x.name === action.payload);

            if (isExist) {
                state.cart.forEach(x => {
                    if (x.name === action.payload) {
                        x.quantity = x.quantity + 1;
                    }

                    newCart.push(x);
                });
            } else {
                state.cart.forEach(x => {
                    newCart.push(x);
                });

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
