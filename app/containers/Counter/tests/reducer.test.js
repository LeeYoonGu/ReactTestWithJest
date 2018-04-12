import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
    addNumber,
    subNumber,
} from '../actions';

describe('appReducer', () => {
    let state;
    beforeEach(() => {
        state = fromJS({
            counter: 0,
        });
    });

    it('initial state', () => {
        const expectedResult = state;
        expect(appReducer(undefined, {})).toEqual(expectedResult);
    });

    it('addNumber Result', () => {
        const expectedResult = state.set('counter', 1);
        expect(appReducer(state, addNumber())).toEqual(expectedResult);
    });

    it('addNumber Result Infinity', () => {
        const expectedResult = state.set('counter', 0);
        expect(appReducer(state.set('counter', Number.MAX_SAFE_INTEGER), addNumber())).toEqual(expectedResult);
    });

    it('subNumber Result', () => {
        const expectedResult = state.set('counter', -1);
        expect(appReducer(state, subNumber())).toEqual(expectedResult);
    });

    it('subNumber Result Infinity', () => {
        const expectedResult = state.set('counter', 0);
        expect(appReducer(state.set('counter', Number.MIN_SAFE_INTEGER), subNumber())).toEqual(expectedResult);
    });
});
