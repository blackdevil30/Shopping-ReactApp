import { combineReducers } from 'redux';

import UserReducer from './user/user.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ShopReducer from './shop/shop.reducer';

import CartReducer from './cart/cart.reducer';

import directoryReducer from '../redux/Directory/directory.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: ShopReducer
});
 
export default persistReducer(persistConfig, rootReducer);