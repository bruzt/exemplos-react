import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import messageReducer from './reducers/messageReducer';

const reducers = combineReducers({

    message: messageReducer

});

export default createStore(reducers, compose(applyMiddleware(thunk)));