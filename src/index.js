import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { requestHouses } from './reducers';
import 'tachyons';

const logger = createLogger();

const store = createStore( requestHouses, applyMiddleware( thunkMiddleware, logger) );

ReactDOM.render(
                <Provider store={store}>
                  <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
