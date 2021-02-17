import React from 'react';


import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.action';

import {
    CollectionItemComponent,
    CollectionFooterComponent,
    ImageComponent,
    SpanName,
    SpanPrice,
    CustomButtonStyled } from './collection-previewItem.styles';

const CollectionItem = ({item,addItem}) => {

    const {name,price,imageUrl} = item;

    return (
    <CollectionItemComponent>
        <ImageComponent className="image" 
        imageUrl = {imageUrl}/>

        <CollectionFooterComponent>
            <SpanName>{name} </SpanName>
            <SpanPrice>${price} </SpanPrice>
        </CollectionFooterComponent>
        <CustomButtonStyled onClick={()=> addItem(item)} inverted> ADD TO CART</CustomButtonStyled>
    </CollectionItemComponent>
)
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);