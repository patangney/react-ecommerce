/**
 * We want to hide the dropdown - this will be set to inital state as true
 * Whatever the boolean value is set as, convert to oposite
 * cartItems array is setup as empty for inital state
 */
import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };    
    case CartActionTypes.ADD_ITEM: 
    return {
      ...state,
      cartItems: addItemToCart(state.cartItems, action.payload) //spread in cartitems from array
    }
    default: 
      return state;
  }
};

export default cartReducer;
