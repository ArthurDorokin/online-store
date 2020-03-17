import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {contentList} from './components/constants.js';
import './common.css';
import App from './App';

function contentListStore(state = contentList, action) {
    if (action.type == 'DEFOLT_TRACK') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(contentListStore, window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
