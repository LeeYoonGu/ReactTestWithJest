import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import Home from '../../../containers/Home/Loadable';
import Counter from '../../../containers/Counter/Loadable';

import App from '../index';

describe('<App /> Test',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<App />)

    })

    // 기본 렌더 테스트
    it('<App /> Render', () => {
        expect(wrapper.length).toEqual(1)
    });

    // 라우터 테스트
    it('<App /> has Router', () => {
        expect(wrapper.find(Route).length).not.toBe(0);
    });

    // Home Router 테스트
    it('<App /> has Home Router', () => {
        expect(wrapper.find('Route[path="/"]').props().component).toEqual(Home);
    });

    // Counter 테스트
    it('<App /> has Counter Router', () => {
        expect(wrapper.find('Route[path="/counter"]').props().component).toEqual(Counter);
    });
});

