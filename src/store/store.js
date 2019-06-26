import { combineReducers , createStore } from 'redux';
import {productsReducer, shoppingCartReducer} from './reducer'
import {saveCart, hydrateCart} from './localStorage'

const reducers = combineReducers({productsReducer, shoppingCartReducer});

const localCart = hydrateCart();

const store = createStore(
                reducers, 
                localCart,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe(() => {
    saveCart({
        shoppingCartReducer: store.getState().shoppingCartReducer
  });
});


export default store;