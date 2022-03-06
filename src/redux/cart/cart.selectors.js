import { createSelector } from 'reselect';

/**
 * Input Selector - fn that returns a slice
 */

const selectCart = (state) => state.cart;

// const selectUser = state => state.user;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity * cartItem.price,
      0
    )

)