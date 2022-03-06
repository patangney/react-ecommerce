import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from 'redux/cart/cart.selectors';

import './_checkout.styles.scss';



const CheckOutPage = ()  => (

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
    </div>

);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default connect(mapStateToProps)(CheckOutPage);