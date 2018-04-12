/**
 * app.js
 *
 * 어플리케이션 집입점입니다.
 */

// require('offline-plugin/runtime').install();

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// Import root app
import App from 'containers/App';

// 파비콘을 위한 임포트 입니다.(maifest.json, .htaccess)
// import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';

import configureStore from './configureStore';
import 'font-awesome/css/font-awesome.css';
import './app.global.css';


// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
        MOUNT_NODE
    );
};

render();

