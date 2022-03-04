/**
 * We want to hide the dropdown - this will be set to inital state as true
 * Whatever the boolean value is set as, convert to oposite
 */

import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
