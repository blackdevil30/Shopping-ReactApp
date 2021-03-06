import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemComponent = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    &:hover{
        .image{
          opacity: 0.8;
        }

        button{
            opacity: .85;
            display: flex;
          }
    }
      `;

export const ImageComponent = styled.div`
      width: 100%;
      height: 95%;
      background-size: cover;
      background-position: center;
      margin-bottom: 5px;
      background-image: ${({imageUrl}) => `url(${imageUrl})`}
      `;

export const CollectionFooterComponent = styled.div`
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;`;

export const SpanName = styled.span`
width: 85%;
margin-bottom: 15px;
`;

export const SpanPrice = styled.span`
width: 15%;
`;

export const CustomButtonStyled = styled(CustomButton)`
width: 80%;
opacity: 0.7;
position: absolute;
top: 255px;
display: none;

`;