import React from 'react';

import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer,
    ImageContainer,
    ContentContainer,
    TitleContainer,
    SubTitle
} from './menu-Item.styles';

const MenuItem = ({title, imageUrl, size,history,match,linkUrl}) => (
    <MenuItemContainer size={size} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <ImageContainer className="background-image" imageUrl={imageUrl}/>

        
    <ContentContainer className="content">
<TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubTitle>SHOP NOW</SubTitle>
    </ContentContainer>
</MenuItemContainer>

);

export default withRouter(MenuItem);