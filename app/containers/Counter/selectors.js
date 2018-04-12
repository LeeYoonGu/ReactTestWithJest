/**
 * TestPage selectors
 */
import { createSelector } from 'reselect';

const selectCounter = (state) => state.get('counter');

const makeSelectCounter = () => createSelector(
    selectCounter,
    (state) => state.get('counter')
);

export {
    selectCounter,
    makeSelectCounter,
};
