import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import toastReducer from './reducers/toastReducers';

const reducers = combineReducers({

    toast: toastReducer

});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(reducers, compose(applyMiddleware(thunk), devTools));