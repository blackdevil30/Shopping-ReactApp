import styled, {css} from 'styled-components';

const sharedName = css`width: 23%;`;

export const CheckoutItemComponent = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;`;

export const ImageContainerComponent = styled.div`
width: 23%;
padding-right: 15px;

img{
    width: 100%;
    height: 100%;
}`;



export const SpanName = styled.span`
${sharedName}
`;

export const SpanPrice = styled.span`
${sharedName}
`;

export const SpanQuantity = styled.span`
${sharedName};
display: flex;
div {
    cursor: pointer;
}

span{
    margin: 0 10px;

}`;



export const RemoveButtonComponent = styled.div`
      padding-left: 12px;
      cursor: pointer;
      `;