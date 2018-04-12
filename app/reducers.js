/**
 * reducers
 * configureStore 에서 호출
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';


/**
 * 초기 State 설정
 */
const routeInitialState = fromJS({
    location: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
    switch (action.type) {
        case LOCATION_CHANGE:
            // URL 이 변경액션에 대한 처리
            return state.merge({location: action.payload});
        default:
            return state;
    }
}

/**
 * Main Reducer 생성
 */
export default function createReducer(injectedReducers) {
    return combineReducers({
        route: routeReducer,
        ...injectedReducers,
    });
}
