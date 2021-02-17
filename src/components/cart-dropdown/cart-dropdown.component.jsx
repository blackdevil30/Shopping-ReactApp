import React from 'react';



import CartItem from '../cart-item/cart-item.component';

import {connect} from 'react-redux';

import {selectCartItems } from '../../redux/cart/cart.selectors';

import { createStructuredSelector } from 'reselect';

import { withRouter} from 'react-router-dom';

import { toggleCartHidden} from '../../redux/cart/cart.action';

import { 
  CartDropDownContainer, 
  CartDropDownButton, 
  CartItemContainer, 
  SpanEmptyMessage} from './cart-dropdown.styles';

const CartDropdown = ({cartItem,history,dispatch})=> (
    <CartDropDownContainer>
        <CartItemContainer>
          {
            cartItem.length ? 
            (cartItem.map(cartItem => <CartItem key={cartItem.id} item= {cartItem}/>))
            :
            (<SpanEmptyMessage>Your cart is empty </SpanEmptyMessage>)
          }
        </CartItemContainer>

      <CartDropDownButton onClick={()=>
        { history.push('/checkout')
          dispatch(toggleCartHidden())
        }}> Go To Checkout
        </CartDropDownButton>
    </CartDropDownContainer>
);

const mapSateToProps = createStructuredSelector({
  cartItem: selectCartItems
});

export default withRouter(connect(mapSateToProps)(CartDropdown));