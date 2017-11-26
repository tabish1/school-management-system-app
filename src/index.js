import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import env from 'dotenv'
import combineReducers from './redux/reducers/indexReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

env.config();

const store = createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
