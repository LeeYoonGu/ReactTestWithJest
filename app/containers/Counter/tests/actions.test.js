import {
    ADD_NUMBER,
    SUB_NUMBER,
} from '../constants';

import {
    addNumber,
    subNumber,
} from '../actions';

describe('ADD_NUMBER', () => {
    it('ADD_NUMBER Type', () => {
        const expectedResult = {
            type: ADD_NUMBER,
        };

        expect(addNumber()).toEqual(expectedResult);
    });
});

describe('SUB_NUMBER', () => {
    it('SUB_NUMBER Type', () => {
        const expectedResult = {
            type: SUB_NUMBER,
        };

        expect(subNumber()).toEqual(expectedResult);
    });
});
