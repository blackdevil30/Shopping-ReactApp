import React from 'react';

import CollectionItem from '../collection-previewItem/collection-previewItem.component';

import { CollectionPreviewComponent, TitleComponent, PreviewComponent} from './collection-preview.styles';


const CollectionPreview = ({title, items})=> (
   <CollectionPreviewComponent>
        <TitleComponent>{title.toUpperCase()}</TitleComponent>
        <PreviewComponent>
            {
                items
                .filter((item, idx) => (idx < 4))
                .map((item) => (
                    <CollectionItem key= {item.id} item= {item}/>
                     
                ))
            }
        </PreviewComponent>
</CollectionPreviewComponent>
);


export default CollectionPreview;