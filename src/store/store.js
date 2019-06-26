import { combineReducers , createStore } from 'redux';
import {productsReducer, shoppingCartReducer} from './reducer'

const reducers = combineReducers({productsReducer, shoppingCartReducer});

const store = createStore(
                reducers, 
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;