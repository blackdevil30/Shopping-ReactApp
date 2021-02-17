import React from 'react';

import { 
    CartItemComponent,
    ItemDetailComponent,
    CartItemImgComponent,
    SpanName
} from './cart-item.styles';

const CartItem = ({item: { imageUrl, price, name, quantity} }) => (
    <CartItemComponent>
        <CartItemImgComponent src={imageUrl} alt="item"/>
            <ItemDetailComponent>
                <SpanName>{name}</SpanName>
                <span className="price">{quantity} x ${price}</span>
            </ItemDetailComponent>
    </CartItemComponent>
);

export default CartItem;