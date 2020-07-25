//kho chứa các global state

import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer.js';
import thunk from 'redux-thunk';

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;