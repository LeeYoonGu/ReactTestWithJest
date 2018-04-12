import { fromJS } from 'immutable';

import {
    selectCounter,
    makeSelectCounter,
} from '../selectors';

describe('selectCounter', () => {
    it('selectCounter', () => {
        const counterState = fromJS({
            counter: 100,
        });
        const mockedState = fromJS({
            counter: {
                counter: 100,
            },
        });
        expect(selectCounter(mockedState)).toEqual(counterState);
    });
});

describe('makeSelectCounter', () => {
    const selector = makeSelectCounter();
    it('makeSelectCounter', () => {
        const counter = 100;
        const mockedState = fromJS({
            counter: {
                counter: 100,
            },
        });
        expect(selector(mockedState)).toEqual(counter);
    });
});
