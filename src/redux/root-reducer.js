/**
 * Base reducer object that represents the base state of the application
 * This will combine all the other states together
 *
 */
import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage'; //get local storage as default storage for now
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import directoryReducer from './directory/directory.reducer';


//define persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], //we only need cart as user is handled by firebase
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
