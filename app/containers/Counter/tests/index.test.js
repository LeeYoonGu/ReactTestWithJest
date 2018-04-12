/**
 * Test Counter
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import configureStore from '../../../configureStore';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { Counter, mapDispatchToProps } from '../index';
import {addNumber, subNumber} from "../actions";

import renderer from 'react-test-renderer'

const history = createHistory();
const store = configureStore({}, history);

describe('<Counter /> Test',()=>{

    let wrapper;
    let counter = 10;
    let store;
    beforeEach(()=>{
        wrapper = shallow(<Counter counter={counter}/>)
        store = configureStore({}, browserHistory);
    })

    it('<Counter /> Render', () => {
        expect(wrapper.length).toEqual(1)
    });

    it('<Counter /> Check Counter Number', () => {
        expect(wrapper.find('div[className="counter"]').props().children).toEqual(counter);
    });
});

describe('<ConnectedCounter /> ',()=>{
    const initialState = fromJS({
        counter: 1000,
    });
    let store,wrapper

    beforeEach(()=>{
        store = configureStore({}, browserHistory);
        wrapper = shallow(
            <Provider store={store}>
                <ConnectedCounter {...initialState}/>
            </Provider>
        )
    })
});

describe('Dispatch Actions ',()=> {
    it('AddNumber', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onAddNumber();
        expect(dispatch).toHaveBeenCalledWith(addNumber());
    });

    it('SubNumber', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubNumber();
        expect(dispatch).toHaveBeenCalledWith(subNumber());
    });
});

describe('Snapshot',()=>{
    it('+++capturing Snapshot of Home', () => {
        const renderedValue =  renderer.create(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Counter counter={100}/>
                </ConnectedRouter>
            </Provider>
        ).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});