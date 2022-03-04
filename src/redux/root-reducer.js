/**
 * Base reducer object that represents the base state of the application
 * This will combine all the other states together
 *
 */
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';


export default combineReducers({
    user: userReducer,
    cart: cartReducer
})