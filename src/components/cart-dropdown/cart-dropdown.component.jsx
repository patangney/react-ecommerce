import React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import { selectCartItems } from 'redux/cart/cart.selectors';
import CustomButton from 'components/buttons/buttons.component';
import CartItem from 'components/cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
