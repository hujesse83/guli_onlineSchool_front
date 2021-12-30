import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, composeEnhancers());

export default store;