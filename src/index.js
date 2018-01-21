import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import App from './App';
import automataApp from './reducers';

import './index.css';

const middleware = applyMiddleware(logger);
const store = createStore(automataApp, middleware);

// store.dispatch({type: "TOGGLE_SQUARE"})
var s = store.getState();

// console.log('state : ', s)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
