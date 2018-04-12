/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

/**
 * MainReducer
 */
import { fromJS } from 'immutable';

import {
    ADD_NUMBER,
    SUB_NUMBER,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    counter: 0,
});

function testPageReducer(state = initialState, action) {
    // 액션이 일어났을때 State 를 어떻게 변경할지 구현한다.
    switch (action.type) {
        case ADD_NUMBER:
            if(state.get('counter') >= Number.MAX_SAFE_INTEGER) {
                return state.set('counter', 0);
            }
            return state.set('counter', state.get('counter') + 1);

        case SUB_NUMBER:
            if(state.get('counter') <= Number.MIN_SAFE_INTEGER) {
                return state.set('counter', 0);
            }
            return state.set('counter', state.get('counter') - 1);

        default:
            return state;
    }
}

export default testPageReducer;
