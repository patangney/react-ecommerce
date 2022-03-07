import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckOutItem from 'components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from 'redux/cart/cart.selectors';


import './_checkout.styles.scss';

const CheckOutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span className=''>Product</span>
      </div>
      <div className='header-block'>
        <span className=''>Description</span>
      </div>
      <div className='header-block'>
        <span className=''>Price</span>
      </div>
      <div className='header-block'>
        <span className=''>Quantity</span>
      </div>
      <div className='header-block'>
        <span className=''>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className='total'>
        <span>Total: €{total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckOutPage);
