import React from 'react';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import CartItem from '../cart-item/cart-item.component';

import {connect} from 'react-redux';

import {selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({cartItem})=> (
    <div className="cart-dropdown">
        <div className="cart-items">
          {
            cartItem.map(cartItem => <CartItem key={cartItem.id} item= {cartItem}/>)
          }
        </div>

      <CustomButton> Go To Checkout</CustomButton>
    </div>
);

const mapSateToProps = (state) => ({
  cartItem: selectCartItems(state)
});

export default connect(mapSateToProps)(CartDropdown);