/**
 * App
 * 전체 어플리케이션을 라우팅 하는 컨테이너 입니다.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Home from '../../containers/Home/Loadable';
import Counter from '../../containers/Counter/Loadable';

export default function App() {
    return (
        <div>
            <Helmet
                defaultTitle="WEHAGO BOILER PLATE"
            >
                <meta name="description" content="douzone wehago rtc" />
            </Helmet>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/counter" component={Counter}/>
            </Switch>
        </div>
    );
}
