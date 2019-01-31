import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { compose, applyMiddleware, createStore } from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/WeatherStation';
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";


const middleware = applyMiddleware(thunk, createLogger());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(middleware));

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
