import React from 'react';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import {
    CartIconComponent,
    ShoppingIconComponent,
    SpanItemCount} from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount})=> (
    <CartIconComponent onClick={toggleCartHidden}>
        <ShoppingIconComponent className="shopping-icon"/>
        <SpanItemCount> {itemCount} </SpanItemCount>
    </CartIconComponent>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})
const mapSateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
});

export default connect(mapSateToProps, mapDispatchToProps)(CartIcon);