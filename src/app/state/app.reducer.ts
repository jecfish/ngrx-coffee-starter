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

        case 'REMOVE_CART_ITEM': {
            // remove the cart item
            // with the name in payload
            const newCart = state.cart
                .filter(x => x.name !== action.payload);

            const current = {
                cart: newCart
            };

            return { ...state, ...current };
        }

        case 'REMOVE_ONE_CART_ITEM': {
            // if the quantity is more than 1
            // -1 from the quantity

            // if quanity is equal to 1
            // remove the item from the cart

            // you have more than 1 way to
            // achieve the above logic
            // below is how I do it
            let isQuantity0 = false;
            const selected = state.cart
                .filter(x => x.name === action.payload)
                .map(x => {
                    const quantity = x.quantity - 1;
                    isQuantity0  = (quantity <= 0);
                    return {
                        ...x,
                        quantity: quantity
                    };
                });

            const current = {
                cart: [
                    ...state.cart.filter(x => x.name !== action.payload),
                    ...isQuantity0 ? [] : selected
                ]
            };


            return { ...state, ...current}; // fix it
        }

        default: {
            return state;
        }

    }
}
