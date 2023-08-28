import React from 'react';
import { ReviewsItem } from './ReviewsItem/ReviewsItem';
import { Info, Wrapper } from './Styles';

export const Revievs = () => {
    return (
        <Wrapper id='revievs'>
          <Info>Відгуки</Info>
          <ReviewsItem/>
        </Wrapper>
    );
};
