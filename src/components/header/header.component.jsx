import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from 'components/cart-icon/cart-icon.component';
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './_header.style.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
        {
          hidden ? null : <CartDropdown />
        }
    
  </div>
);

/**
 *
 * I want the value from user from currentUser which is being destructured from the state
 * we also need the hidden value from the cart (true or false boolean)
 *
 * */

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  // currentUser: state.user.currentUser, <= instead of this we can just write as below
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);
