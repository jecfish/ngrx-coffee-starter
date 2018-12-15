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

        default: {
            return state;
        }

    }
}
