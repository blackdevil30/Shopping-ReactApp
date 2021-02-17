import React from 'react';

import CollectionItem from '../../components/collection-previewItem/collection-previewItem.component';

import {selectCollection} from '../../redux/shop/shop.selectors';

import {connect } from 'react-redux';

import { CollectionPageConatiner,
         TitleContainer,
        ItemContainer} from './collection.styles';

const CollectionPage = ({ collection }) => 

{
    
    const {title, items} = collection;
   
   return( <CollectionPageConatiner>
        <TitleContainer>{title}</TitleContainer>
            <ItemContainer>
            {
            items.map(item =>(
                <CollectionItem key= {item.id} item={item}/>
            ))
        }
        </ItemContainer>
        
    </CollectionPageConatiner>
    );    
// );
}



const mapStateToProps = (state, ownProps) => ({
    
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);