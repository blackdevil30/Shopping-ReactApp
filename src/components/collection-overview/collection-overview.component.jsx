import React from 'react';


import CollectionPreview from '../collection-preview/collection-preview.component';
import {connect } from 'react-redux';

import { selectCollectionForPreview} from '../../redux/shop/shop.selectors';

import {createStructuredSelector} from 'reselect';

import { CollectionOverviewComponent } from './collection-overview.styles';
const CollectionOverview = ({collections}) => (

    <CollectionOverviewComponent>
         { 
         collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
      
          ))
        }
    </CollectionOverviewComponent>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);