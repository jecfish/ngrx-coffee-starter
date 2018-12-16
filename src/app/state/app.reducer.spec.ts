import { appInitialState } from './app.init';
import { GetCoffeeListSuccess } from './app.actions';
import { appReducer } from './app.reducer';

// jasmine test framework

describe('App Reducer', () => {
    // test groups GET_COFFEE_LIST_SUCCESS
    // test cases
    // case 1:
    // if i pass in [{ name: 'coffee 1', .... }],
    // then my coffeeList should be updated to [{ name: 'coffee 1', .... }]

    describe('GET_COFFEE_LIST_SUCCESS', () => {
        it('should return list of coffee', () => {
            // arrange
            const currentState = {
                ...appInitialState
            };

            const expectedState = {
                ...appInitialState,
                coffeeList: [
                    { name: 'coffee aaa', price: 99, recipe: [] }
                ]
            };

            // action
            const action = new GetCoffeeListSuccess([
                { name: 'coffee aaa', price: 99, recipe: [] }
            ]);
            const actual = appReducer(currentState, action);

            // assert
            expect(actual).toEqual(expectedState);
        });
    });

    // test groups ADD_TO_CART
    describe('ADD_TO_CART', () => {
        // write all your test cases here
        // test cases

        // case 1: if my cart doesn't contain  'coffee 1',
        // then it should add
        // an item into the cart { name: 'coffee 1', quantity: 1 }

        // 3 "A"s = Arrange, Action, Assert

        // arrange
        // const initialState = { cart: [] }
        // const expectedState = { cart: [{ name: 'coffee 1', quantity: 1 }] }
        // const actionObject = 'coffee 1';

        // action
        // const latestState = new AddToCart(actionObject)

        // asssert, checking
        // if expectedState === latestState




        // case 2: if my cart contains  'coffee 1' & quantiy 2,
        // then it should update the quantity by 1
        // { name: 'coffee 1', quantity: 3 }

        // case 3: if my cart contains  'coffee 1',
        // and i add to cart 'coffee 2'
        // then it should my cart should be
        // have 2 items
        // [{ name: 'coffee 1', quantity: 1 }, { name: 'coffee 2', quantity: 1 }]

    });

});

