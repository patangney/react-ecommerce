import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from 'redux/cart/cart.actions';
import { selectCartItemsCount } from 'redux/cart/cart.selectors';
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
 * memoize and not re-render a component if the state value does not change by using the reselect library
 */
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
