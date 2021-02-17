import React from 'react';



import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { 
    CheckoutHeaderContainer,
    CheckoutPageContainer,
    HeaderBlockContainer,
    TestWarningContainer,
    TotalConatiner
} from './checkout.styles';

const checkoutPage = ({cartItem, cartTotal}) => (
 <CheckoutPageContainer>
     <CheckoutHeaderContainer>
        <HeaderBlockContainer>
            <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
            <span>Remove</span>
        </HeaderBlockContainer>
     </CheckoutHeaderContainer>
    
    {
        cartItem.map(cartItem =>
            <CheckoutItem key ={cartItem.id} cartItem= {cartItem}/>
         )
    }
    <TotalConatiner>
        <span>TOTAL: ${cartTotal}</span>
    </TotalConatiner>
    <TestWarningContainer>
        *Please use the followig test credit card for payments*
        <br/>
        4242 4242 4242 4242 Exp-01/22 CVV- 123
    </TestWarningContainer>
    <StripeCheckoutButton price={cartTotal}/>
 </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItem: selectCartItems,
    cartTotal: selectCartTotal
}) 

export default connect(mapStateToProps)(checkoutPage);