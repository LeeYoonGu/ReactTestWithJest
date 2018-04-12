/**
 * Test Home
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router-dom';

import { Home } from '../index';

describe('<Home /> Test',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<Home />)

    })

    it('<Home /> Render', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('<Home /> contains h2 Home', () => {
        expect(wrapper.find('h2[children="Home"]').length).toEqual(1);
    });

    it('<Home /> contains Link to Counter', () => {
        expect(wrapper.find('Link[to="/counter"]').children().text()).toEqual('to Counter');
    });

});
