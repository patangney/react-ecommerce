import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from 'redux/cart/cart.actions';
import './_cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shoppingbag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

/**
 * mapStateToProps() - Selector
 * Gets the whole state object, pulls off a slice of the state and 
 *  reduce over the items to get a new value
 * 
 */
const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity, 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
