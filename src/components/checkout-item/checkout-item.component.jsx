import React from 'react';

import {connect} from 'react-redux';

import {clearItemFromCart, removeItem, addItem} from '../../redux/cart/cart.action';

import {
    CheckoutItemComponent, 
    ImageContainerComponent, 
    SpanName, 
    SpanPrice, 
    SpanQuantity , 
    RemoveButtonComponent} from './checkout-item.styles';

const CheckoutItem = ({cartItem,clearItem, removeItem, addItem}) => {
    const { name,imageUrl,price,quantity } = cartItem;
    return(
 
    <CheckoutItemComponent>
        <ImageContainerComponent>
            <img src={imageUrl} alt="item"/>

        </ImageContainerComponent>

<SpanName>{name}</SpanName>
<SpanQuantity>
    <div className="arrow" onClick= {() =>removeItem(cartItem)}> &#10094;</div>
          <span>{quantity}</span>  
    <div className="arrow" onClick = {()=> addItem(cartItem)}> &#10095;</div>
</SpanQuantity>
<SpanPrice>{price}</SpanPrice>
     <RemoveButtonComponent onClick= {()=> clearItem(cartItem)}>&#10005;</RemoveButtonComponent>
    </CheckoutItemComponent>
)};

const mapDispactchToProps = dispatch => 
({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispactchToProps)(CheckoutItem);