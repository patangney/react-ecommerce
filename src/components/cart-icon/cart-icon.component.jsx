import React from 'react';
import './_cart-icon.styles.scss';

import { ReactComponentElement as ShoppingIcon } from '../../assets/shoppingbag.svg';

const CartIcon = () => (
  <div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);
export default CartIcon;
